import imgOne from '../images/FourthImageIcon/img1.png'
import imgTwo from '../images/FourthImageIcon/img2.png'
import imgThree from '../images/FourthImageIcon/img3.png'
import imgFour from '../images/FourthImageIcon/img4.png'
import imgFive from '../images/FourthImageIcon/img5.png'
import pattern from '../images/FourthImageIcon/Pattern.png'

import './FourthBody.css'


export const FourthBody = () => {
  return (
    <div className="main">
      <div className="top-con">
        <div className="text">
          <h2>Transporting Across The World</h2>
        </div>
        <div className="sample-img">
          <img className='imgGrid' src={imgOne} alt="imageA" />
          <img className='imgGrid' src={imgTwo} alt="imageB" />
          <img className='imgGrid' src={imgThree} alt="imageC" />
          <img className='imgGrid' src={imgFour} alt="imageD" />
          <img className='imgGrid' src={imgFive} alt="imageE" />
        </div>
        <div className="btn">
            <button className='blue-btn'>More work
            <img className='debree' src={pattern} alt='button'></img>
            </button>
        </div>
      </div>
      <div className="low-con"></div>
    </div>
  )
}