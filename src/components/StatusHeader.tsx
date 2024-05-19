import { FC } from "react"

export const StatusHeader: FC = () => {
  return (
    <header className="bg-[#C7C7C7] h-[62px] rounded-[5px] mb-[11px] pl-[166px] pr-[43px]">
      <div className="flex items-center h-[62px]">
        <div className="mr-[230px] w-[65px]">Компания</div>
        <div className="mr-[140px] w-[98px]">Сумма заказа</div>
        <div className="mr-[130px] w-[115px]">Сумма отгрузки</div>
        <div className="mr-[160px] w-[115px]">Сумма остаток</div>
        <div>Выполнение</div>
      </div>
    </header>
  )
}
