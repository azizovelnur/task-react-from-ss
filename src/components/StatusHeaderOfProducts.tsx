import { FC } from "react"

export const StatusHeaderOfProducts: FC = () => {
  return (
    <header className="bg-[#C7C7C7] h-[62px] rounded-[5px] mb-[11px] pl-[166px]">
      <div className="flex items-center h-[62px]">
        <div className="mr-[242px]">Наименование</div>
        <div className="mr-[64px]">Отгрузка шт</div>
        <div className="mr-[90px]">Остаток шт</div>
        <div className="mr-[84px]">Сумма отгрузки</div>
        <div>Сумма остаток</div>
      </div>
    </header>
  )
}
