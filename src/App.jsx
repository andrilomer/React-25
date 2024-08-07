import ImageSlider from "./components/ImageSlider"






function App() {
  

  return (
    <>
    {/* <Accordion/> */}
    {/* <RandomColor/> */}
    {/* <StarRating noOfStars={10}/> */}
    <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1}/>
    </>
  )
}

export default App
