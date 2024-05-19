import { useState } from "react"
import { ReactComponent as MinusIcon } from "../assets/images/minus.svg"
import { ReactComponent as PlusIcon } from "../assets/images/plus.svg"

export const ProductCounter = () => {
  const [number, setNumber] = useState<number>(0)

  const decrement = (value: number) => {
    if (value > 0) {
      setNumber(value - 1)
    }
  }

  const increment = (value: number) => {
    setNumber(value + 1)
  }

  return (
    <div className="w-[92px] h-[36px] border rounded-[5px] border-[#E4E4E4] flex items-center justify-between px-[10px] mr-[57px]">
      <button className="h-[20px]" onClick={() => decrement(number)}>
        <MinusIcon />
      </button>
      <div>{number}</div>
      <button onClick={() => increment(number)}>
        <PlusIcon />
      </button>
    </div>
  )
}
