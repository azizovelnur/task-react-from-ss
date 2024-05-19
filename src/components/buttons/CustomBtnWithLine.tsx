import { FC } from "react"

import { ReactComponent as ArrowOfBtn } from "../../assets/images/arrowOfBtn.svg"
interface ICustomBtnWithLineProps {
  value1: string
  value2: string
}

export const CustomBtnWithLine: FC<ICustomBtnWithLineProps> = ({
  value1,
  value2,
}) => {
  return (
    <div className="h-[69px]">
      <div className="text-[#1C1C1C]">{value1}</div>
      <div className="h-[49px] w-[212px] rounded-[5px] border-[1px] border-[#C7C7C7] text-[16px] font-medium text-[#505050] flex items-center relative">
        <span className="ml-[21px]">{value2}</span>
        <div className="absolute right-[17px] cursor-pointer">
          <ArrowOfBtn />
        </div>
        <div className="border-l-[1px] absolute w-[82px] border-[#C7C7C7] top-0 bottom-0 right-0 rounded-[3px]"></div>
      </div>
    </div>
  )
}
