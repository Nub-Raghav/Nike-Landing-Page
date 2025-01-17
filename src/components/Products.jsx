import { star } from "../assets/icons"

const Products = ({imgURL, name, price, rating}) => {
  return (
    <div className="flex flex-1 flex-col w-full">
        <img src={imgURL} alt={name} className="w-[282px] h-[282px]"/>
        
        <div className="flex mt-8 gap-2.5 justify-start">
            <img src={star} alt="star" width={24} height={24}/>
            <p className="font-montserrat text-xl text-slate-gray"> {rating} </p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'> {name} </h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'> {price} </p>
    </div>
  )
}

export default Products