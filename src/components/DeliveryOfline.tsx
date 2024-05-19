import { FC } from "react"
import { useAppSelector } from "../hooks/hooks"
import { RootState } from "../store/store"
import { Product } from "./Product"
import { DeliveryOflineParameters } from "./DeliveryOflineParameters"
import { ReactComponent as DeleteIcon } from "../assets/images/trash.svg"
import { StatusHeaderOfProducts } from "./StatusHeaderOfProducts"

export const DeliveryOfline: FC = () => {
  const { productsDataFromSlice } = useAppSelector(
    (state: RootState) => state.products
  )
  return (
    <section className="px-[27px]">
      <div className="bg-white min-h-[697px] mt-[45px] px-[30px] pt-[40px]  rounded-[20px]">
        <div className="flex justify-between">
          <div className="font-semibold text-[20px]">
            Доставка поставщика offine
          </div>
          <button>
            <DeleteIcon />
          </button>
        </div>

        <DeliveryOflineParameters />

        <StatusHeaderOfProducts />

        {productsDataFromSlice.map((el, key) => (
          <Product
            key={key}
            productImg={el.productImg}
            productName={el.productName}
            productModel={el.productModel}
            shipmentPieces={el.shipmentPieces}
            remainingPieces={el.remainingPieces}
            shipmentAmount={el.shipmentAmount}
            remainingAmount={el.remainingAmount}
          />
        ))}
      </div>

      <div className="mt-[53px] mb-[33px]">
        <button className="h-[48px] w-[114px]  text-white font-medium bg-[#F25627] rounded-[5px] mr-[36px]">
          Сохранить
        </button>
        <button className="text-[#F25627] font-medium rounded-[5px]">
          Удалить
        </button>
      </div>
    </section>
  )
}
