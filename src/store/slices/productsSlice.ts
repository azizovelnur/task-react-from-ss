import { createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../types/types"
import ProductImg from "../../assets/images/productImg.png"

interface IProductsState {
  productsDataFromSlice: IProduct[]
}

const initialState: IProductsState = {
  productsDataFromSlice: [
    {
      productImg: ProductImg,
      productName: "Токарный станокпрврплврап",
      productModel: "Z-MaT | F200.1",
      shipmentPieces: 0,
      remainingPieces: 10,
      shipmentAmount: 75200000,
      remainingAmount: 75200000,
    },
    {
      productImg: ProductImg,
      productName: "Токарный станокпрврплврап",
      productModel: "Z-MaT | F200.1",
      shipmentPieces: 0,
      remainingPieces: 10,
      shipmentAmount: 75200000,
      remainingAmount: 75200000,
    },
    {
      productImg: ProductImg,
      productName: "Токарный станокпрврплврап",
      productModel: "Z-MaT | F200.1",
      shipmentPieces: 0,
      remainingPieces: 10,
      shipmentAmount: 75200000,
      remainingAmount: 75200000,
    },
  ],
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
})

// export const {} = productsSlice.actions

export default productsSlice.reducer
