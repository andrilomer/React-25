import { useState } from "react"
import { FaStar } from "react-icons/fa"

const StarRating = ({ noOfStars = 5 }) => {



  const [rating,setRating]=useState(0)
  const [hover,setHover]=useState(0)

  function handleClick(getCurrentIndex){
    console.log(getCurrentIndex)
    setRating(getCurrentIndex)
  }

  function handleMouseEnter(getCurrentIndex){
    console.log(getCurrentIndex);
    console.log("I am currently touched");
    
    setHover(getCurrentIndex)
    
  }

  function handleMouseLeave(){
    // console.log(getCurrentIndex);
    console.log("I am currently touched in leave");
    setHover(rating)
    
  }






  return (
    <div className="flex justify-center items-center ">
      {
        [...Array(noOfStars)].map((_, index) => {

          index+=1

          return <FaStar key={index}
          className={`cursor-pointer ${
            index <= (hover || rating) ? "text-yellow-400" : "text-gray-400"
          }`}
            onClick={()=>handleClick(index)}
            onMouseMove={()=>handleMouseEnter(index) }
            onMouseLeave={()=>handleMouseLeave()}
            size={40} />
        })
      }
    </div>
  )
}

export default StarRating