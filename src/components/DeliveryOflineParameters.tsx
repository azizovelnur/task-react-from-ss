import { FC } from "react"
import { CustomBtn } from "./buttons/CustomBtn"
import { ReactComponent as ArrowOfBtn } from "../assets/images/arrowOfBtn.svg"
import { ReactComponent as CalendarOfBtn } from "../assets/images/calendar.svg"
import { CustomBtnWithLine } from "./buttons/CustomBtnWithLine"

export const DeliveryOflineParameters: FC = () => {
  return (
    <section className="mt-[43px] mb-[40px] h-[247px]">
      <div className="flex justify-between">
        <CustomBtn
          value1="Статус"
          value2="Деловые линии"
          valueIcon={<ArrowOfBtn />}
          width={212}
        />
        <CustomBtn
          value1="Дата отгрузки"
          value2="21/09/2023"
          valueIcon={<CalendarOfBtn />}
          width={212}
        />

        <CustomBtnWithLine value1="Длина" value2="100" />
        <CustomBtnWithLine value1="Высота" value2="100" />
        <CustomBtnWithLine value1="Ширина" value2="100" />
      </div>

      <div className="flex justify-between mt-[18px]">
        <CustomBtn
          value1="Количество мест"
          value2="Деловые линии"
          width={212}
        />

        <CustomBtnWithLine value1="Вес" value2="100" />

        <CustomBtn
          value1="Условия доставки"
          value2="Деловые линии"
          valueIcon={<ArrowOfBtn />}
          width={465}
        />

        <CustomBtnWithLine value1="Цена доставки" value2="100" />
      </div>

      <div className="flex justify-between mt-[18px]">
        <CustomBtn
          value1="Траснпортная компания"
          value2="Деловые линии"
          valueIcon={<ArrowOfBtn />}
          width={212}
        />
        <CustomBtn value1="URL" value2="Деловые линии" width={719} />

        <CustomBtn
          value1="Номер отслеживания"
          value2="Деловые линии"
          width={212}
        />
      </div>
    </section>
  )
}
