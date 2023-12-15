import React, { useState } from "react"

function Counter() {
  const [value, setValue] = useState(0)

  const plusButton = () => {
    setValue(value + 1)
  }
  const MinusButton = () => {
    setValue(value - 1)
  }

  return (
    <>
      <div>
        <div>
          カウント!!:{value}
        </div>
      </div>
      <button className="plus" onClick={plusButton}>プラス!</button>
      <button className="plus" onClick={MinusButton} >マイナス!</button >
    </>
  )

}

export default Counter;