import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import {shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import Shoe from "../components/Shoe"
import { useState } from "react"

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-start min-h-screen gap-10 max-container" >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
            <p className="text-xl font-montserrat text-coral-red"> Our Summer Collection </p>
            <h1 className="text-8xl font-bold font-palanquin max-sm:text-[72px] max-sm:leading-[82]">
                <span className="xl: bg-white xl:whitespace-nowrap z-10 pr-10 mt-2">The New Arrival</span>
                <br />
                <span className="text-coral-red"> Nike </span> Shoes
                
            </h1>
            <p className="text-slate-gray text-lg mt-6 mb-8 font-montserrat sm:max-w-sm leading-8"> 
                Discover stylish Nike arrivals, quality comfort and innovations for your active life
            </p>
            <Button label="Show Now" iconURL={arrowRight}/>
        

            <div className="flex justify-start items-start flex-wrap w-full mt-8 gap-16">
                {statistics.map((item) => (
                    <div>
                        <p className="font-bold font-palanquin text-3xl ">{item.value}</p>
                        <p className="font-montserrat font-semibold">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex flex-col justify-center bg-hero bg-cover bg-primary bg-center w-full items-center gap-10">
            <img src={bigShoeImg} alt="Shoe1" width={510} height={400} className="object-containr elative z-10" />
            
            <div className="flex justify-center gap-4 mt-6 ">
                {shoes.map((shoe) => (
                    <div>
                        <Shoe imgURL={shoe} changeImg={(shoe)=> setBigShoeImg(shoe)} bigShoeImg={bigShoeImg}/>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Hero