"use client;"
import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({title, textStyle, rightIcon, containerStyle, handleClick, btnType} : CustomButtonProps) => {
  return (
    <div>
      <button 
      disabled = {false}
      type={ btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
      >
        <span className={`flex-1 ${textStyle}`}>
            {title}
        </span>
        {rightIcon && (
          <div className="relative w-6 h-6">
              <Image 
              src={rightIcon}
              alt="right arrow"
              fill
              className="object-contain"
              />
          </div>
        )}
      </button>
    </div>
  )
}

export default CustomButton
