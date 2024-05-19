import { FC } from "react"
import { IProduct } from "../types/types"
import { ReactComponent as DeleteIcon } from "../assets/images/trash.svg"
import { ProductCounter } from "./ProductCounter"

export const Product: FC<IProduct> = ({
  productImg,
  productName,
  productModel,
  shipmentPieces,
  remainingPieces,
  shipmentAmount,
  remainingAmount,
}) => {
  return (
    <div className="h-[62px] mb-[5px] bg-white w-full rounded-[5px] border border-[#EFF0F4] flex items-center">
      <div className="mr-[32px]">
        <img src={productImg} alt="" />
      </div>
      <div className="mr-[170px]">
        <div className="font-semibold">{productName}</div>
        <div className="font-medium text-[#8E8E8E]">{productModel}</div>
      </div>
      <ProductCounter />
      <div className="mr-[150px]">{remainingPieces}</div>
      <div className="mr-[108px]">{shipmentAmount} RUB</div>
      <div className="mr-[60px]">{remainingAmount} RUB</div>
      <button>
        <DeleteIcon />
      </button>
    </div>
  )
}
