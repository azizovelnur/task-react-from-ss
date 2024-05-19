import { FC, ReactNode } from "react"

interface ICustomBtnProps {
  value1: string
  value2: string
  valueIcon?: ReactNode
  width: number
}

export const CustomBtn: FC<ICustomBtnProps> = ({
  value1,
  value2,
  valueIcon,
  width,
}) => {
  return (
    <div className="h-[69px]">
      <div className="text-[#1C1C1C]">{value1}</div>
      <div
        className="h-[49px] w-[212px] rounded-[5px] border-[1px] text-[16px] font-medium text-[#505050] flex items-center relative"
        style={{ width: `${width}px` }}
      >
        <span className="ml-[21px]">{value2}</span>
        <div className="absolute right-[17px] cursor-pointer z-50">
          {valueIcon}
        </div>
      </div>
    </div>
  )
}
