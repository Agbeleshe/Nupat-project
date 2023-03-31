import pattern from '../images/TopBody/Pattern.png'
import backgroud from '../images/TopBody/Backgroound.jpg'
import './FirstBody.css'


export const FirstBody = () => {
  return (
    <div className="body-container">
      <div className="body-content">
        <p className='top-note'>Logistics & Suppy Chain Solutions</p>
        <h1 className='note'>Your Gateway <br /> to any Destination <br /> in the World</h1>
        <p className='small-note'>
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.{' '}
        </p>
        <button className='explore-btn'>Explore more
        <img className='pattern' src={pattern} alt="" />
        </button>
      </div>
      <img src={backgroud} alt="" className="background-img" />
    </div>
  )
}