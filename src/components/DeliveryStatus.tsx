import { FC } from "react"
import { StatusHeader } from "./StatusHeader"
import { Companies } from "./Companies"

export const DeliveryStatus: FC = () => {
  return (
    <>
      <h1 className="font-semibold text-[20px] my-10">
        Доставка поставщиков online
      </h1>
      <StatusHeader />
      <main className="bg-[#F5F6F8] min-h-[800px] m-auto rounded-b-[5px] border-[#EFF0F4] border-[1px] ">
        <Companies />
      </main>
    </>
  )
}
