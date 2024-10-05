
import './Top.css'
import bgImage from "./images/comming_soon.jpg"


function Top() {  
  const greet = 'Hello Everyone!';
  return (
    <>
      <div className="top">
          <h1>{greet}</h1>
          <img src={bgImage} alt="comming soon image" />
      </div>
    </>
  )
}

export default Top
