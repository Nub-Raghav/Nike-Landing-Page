import { arrowRight } from "../assets/icons"


const Button = ({label, iconURL, backgroundColor, borderColor, textColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    }`}>
        {label}
    {iconURL && <img src={iconURL} alt="arrow right" className="w-5 h-5"/>}
    </button>
  )
}

export default Button