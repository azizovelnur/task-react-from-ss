import { FC, useState } from "react"
import { ICompany } from "../types/types"
import { CompanyProductsInfo } from "./CompanyProductsInfo"
import { DeliveryOfline } from "./DeliveryOfline"
import { ReactComponent as Arrow } from "../assets/images/arrow.svg"
import { ReactComponent as ActiveArrow } from "../assets/images/active-arrow.svg"

export const Company: FC<ICompany> = ({
  companyImg,
  companyName,
  companyCity,
  orderAmount,
  shipmentAmount,
  remainingAmount,
  achievement,
}) => {
  const [open, setOpen] = useState<boolean>(true)
  return (
    <>
      <div
        className="h-[62px] bg-white flex items-center border-t-[#C7C7C7] border pl-10 relative"
        style={{ backgroundColor: `${open ? "#CBDDFF" : "white"}` }}
      >
        {open ? (
          <button
            className="absolute left-[10px]"
            onClick={() => setOpen(false)}
          >
            <ActiveArrow />
          </button>
        ) : (
          <button
            className="absolute left-[10px]"
            onClick={() => setOpen(true)}
          >
            <Arrow />
          </button>
        )}
        <div className="min-w-[245px] flex items-center h-[62px] mr-[174px]">
          <div className="mr-9">
            <img src={companyImg} alt="" />
          </div>
          <div className="m-w-[119px]">
            <div className="text-[#F25627]">{companyName}</div>
            <div className="text-[#8E8E8E]">{companyCity}</div>
          </div>
        </div>

        <div className="min-w-[113px] mr-[124px]">
          {orderAmount.toLocaleString("ru-Ru")} ₽
        </div>
        <div className="min-w-[113px] mr-[126px] relative">
          <div>{shipmentAmount.toLocaleString("ru-Ru")} ₽</div>
          <div
            className={
              remainingAmount < 600000000
                ? "bg-[#6CA695] rounded-t-[3px] h-[5px] min-w-[113px] absolute top-[36px]"
                : "bg-[#FFD964] rounded-t-[3px] h-[5px] min-w-[113px] absolute top-[36px]"
            }
          ></div>
        </div>
        <div className="min-w-[113px] mr-[110px] relative">
          <div>{remainingAmount.toLocaleString("ru-Ru")} ₽</div>
          <div
            className={
              remainingAmount === 0
                ? "bg-none"
                : remainingAmount < 600000000
                ? "bg-[#6CA695] rounded-t[3px] h-[5px] min-w-[113px] absolute top-[36px]"
                : "bg-[#FFD964] rounded-t-[3px] h-[5px] min-w-[113px] absolute top-[36px]"
            }
          ></div>
        </div>
        <div className="flex h-[21px] min-w-[154px] justify-between items-center">
          <div className="mr-[6px] w-[40px]">{achievement} %</div>
          <div className="h-[10px] bg-gray-200 rounded w-[100px]">
            <div
              style={{ width: `${achievement}%` }}
              className="h-full bg-[#6CA695] rounded"
            ></div>
          </div>
        </div>
      </div>

      {open && (
        <>
          <CompanyProductsInfo />
          <DeliveryOfline />
        </>
      )}
    </>
  )
}
