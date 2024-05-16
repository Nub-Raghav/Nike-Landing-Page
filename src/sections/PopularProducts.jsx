import { products } from "../constants"
import Products from "../components/Products"

const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-12"> 
      <div className="flex flex-col justify-start items-start gap-4">
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p className="text-slate-gray font-montserrat mt-2">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>

        <div className="flex flex-row justify-between gap-10">
          {products.map((item) => (
            <Products key={item.name} {...item} rating={item.rating}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularProducts