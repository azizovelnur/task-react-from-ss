import { FC } from "react"
import { useAppSelector } from "../hooks/hooks"
import { RootState } from "../store/store"
import { Company } from "./Company"

export const Companies: FC = () => {
  const { companiesDataFromSlice } = useAppSelector(
    (state: RootState) => state.companies
  )
  return (
    <>
      {companiesDataFromSlice.map((company, index) => (
        <Company
          key={index}
          index={index}
          companyImg={company.companyImg}
          companyName={company.companyName}
          companyCity={company.companyCity}
          achievement={company.achievement}
          orderAmount={company.orderAmount}
          remainingAmount={company.remainingAmount}
          shipmentAmount={company.shipmentAmount}
        />
      ))}
    </>
  )
}
