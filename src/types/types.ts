export interface ICompany {
  companyImg: string
  companyName: string
  companyCity: string
  orderAmount: number
  shipmentAmount: number
  remainingAmount: number
  achievement: number
  index?: number
}

export interface ICompanyProductInfo {
  productDeliveryStatus: string
  productDate: string
  trackingNumber: number
  productSize: string
  productWeight: number
  numberOfSeats: number
  paymentForDeliveryStatus: string
}

export interface IProduct {
  productImg: string
  productName: string
  productModel: string
  shipmentPieces: number
  remainingPieces: number
  shipmentAmount: number
  remainingAmount: number
}

export interface IStatusHeaderProps {
  value1: string
  value2: string
  value3: string
  value4: string
  value5: string
}
