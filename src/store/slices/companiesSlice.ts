import { createSlice } from "@reduxjs/toolkit"
import { ICompany, ICompanyProductInfo } from "../../types/types"
import KoyoCompanyImg from "../../assets/images/koyo-company.png"
import SZDOCompanyImg from "../../assets/images/szdo-company.png"

interface ICompaniesState {
  companiesDataFromSlice: ICompany[]
  companyProductsInfoFromSlice: ICompanyProductInfo[]
}

const initialState: ICompaniesState = {
  companiesDataFromSlice: [
    {
      companyImg: KoyoCompanyImg,
      companyName: "ООО Koyo",
      companyCity: "Санкт-Петербург",
      orderAmount: 12000000000,
      shipmentAmount: 12000000000,
      remainingAmount: 0,
      achievement: 100,
    },
    {
      companyImg: SZDOCompanyImg,
      companyName: "ООО SZDO",
      companyCity: "Брянск",
      orderAmount: 12000000000,
      shipmentAmount: 6000000000,
      remainingAmount: 6000000000,
      achievement: 50,
    },
  ],
  companyProductsInfoFromSlice: [
    {
      productDeliveryStatus: "Доставлен",
      productDate: "12.02.2023",
      trackingNumber: 34856387564,
      productSize: "90х90х90 mm",
      productWeight: 100,
      numberOfSeats: 5,
      paymentForDeliveryStatus: "Оплачена",
    },
    {
      productDeliveryStatus: "В пути",
      productDate: "12.02.2023",
      trackingNumber: 34856387564,
      productSize: "90х90х90 mm",
      productWeight: 100,
      numberOfSeats: 5,
      paymentForDeliveryStatus: "Оплачена",
    },
    {
      productDeliveryStatus: "В пути",
      productDate: "12.02.2023",
      trackingNumber: 34856387564,
      productSize: "90х90х90 mm",
      productWeight: 100,
      numberOfSeats: 5,
      paymentForDeliveryStatus: "Оплачена",
    },
  ],
}

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
})

// export const {} = companiesSlice.actions

export default companiesSlice.reducer
