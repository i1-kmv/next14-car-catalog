import Image from 'next/image';
import { FC } from "react";

export interface ICustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: () => void;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

const CustomButton:FC<ICustomButtonProps> = ({
     title,
     containerStyles,
     textStyles,
     isDisabled ,
     rightIcon,
     btnType ,
     handleClick
}) => {
    return (
        <button
            disabled={isDisabled}
            type={btnType}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className="flex-1">
                {title}
            </span>
        </button>
    );
};

export default CustomButton;
