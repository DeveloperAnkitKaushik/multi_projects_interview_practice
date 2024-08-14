import Accordian from "./component/accordian/Accordian"
import ColorFinder from "./component/colorFinder/ColorFinder"
import ImageSlider from "./component/imageSlider/ImageSlider"
import NestedMenu from "./component/nestedMenu/NestedMenu"
import StarRating from "./component/starRating/StarRating"

const App = () => {
  return (
    <div className="appcontainer">
      {/* <Accordian/>
      <ColorFinder/>
      <StarRating num={5}/>
      <ImageSlider/> */}
      <NestedMenu/>
    </div>
  )
}

export default App