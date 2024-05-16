const Shoe = ({imgURL, changeImg ,bigShoeImg}) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeImg(imgURL.bigShoe);
    }
  };

  return (
    <div onClick={handleClick} className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? "border-coral-red": "border-transparent"} cursor-pointer`}>
      <div className="flex justify-center items-center p-3 bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail} alt="SmallShoe" width={127} height={103.34} className='object-contain'/>
      </div>
    </div>
  )
}

export default Shoe