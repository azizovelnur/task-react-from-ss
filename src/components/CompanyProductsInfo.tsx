import { FC } from "react"
import { RootState } from "../store/store"
import { useAppSelector } from "../hooks/hooks"
import { ReactComponent as Arrow } from "../assets/images/arrow.svg"
import { motion } from "framer-motion"
export const CompanyProductsInfo: FC = () => {
  const { companyProductsInfoFromSlice } = useAppSelector(
    (state: RootState) => state.companies
  )
  return (
    <div className="px-[27px]">
      {companyProductsInfoFromSlice.map((el, key) => (
        <motion.div
          className="h-[69px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={key}
        >
          <div className="bg-white mt-2 rounded-[5px] h-[62px] flex  items-center pl-[62px] border-2 border-[#EFF0F4] relative">
            <button className="absolute left-[18px]">
              <Arrow />
            </button>
            <div className="flex h-17px items-center w-[105px] mr-[31px]">
              {el.productDeliveryStatus === "Доставлен" ? (
                <div className="w-[17px] h-[17px] rounded-[50%] bg-[#6CA695] mr-[14px]"></div>
              ) : (
                <div className="w-[17px] h-[17px] rounded-[50%] bg-[#FFD964] mr-[14px]"></div>
              )}
              <div className="font-semibold">{el.productDeliveryStatus}</div>
            </div>
            <div className="text-[#1C1C1C] mr-[70px]">{el.productDate}</div>
            <div className="w-[101px] mr-[90px]">
              <div className="text-[#505050]">Трекинг номер</div>
              <div className="text-[#0C47B7] underline">
                {el.trackingNumber}
              </div>
            </div>
            <div className="w-[95px] mr-[95px]">
              <div className="text-[#505050]">Габариты</div>
              <div>{el.productSize}</div>
            </div>
            <div>
              <div className="w-[73px] mr-[104px]">
                <div className="text-[#505050]">Общий вес</div>
                <div>{el.productWeight} kg</div>
              </div>
            </div>
            <div className="w-[83px] mr-[108px]">
              <div className="text-[#505050]">Кол-во мест</div>
              <div>{el.numberOfSeats}</div>
            </div>
            <div>
              <div className="text-[#505050]">Оплата доставки</div>
              <div>{el.paymentForDeliveryStatus}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
