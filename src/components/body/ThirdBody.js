import Photo from '../images/ThirdBodyicons/Photo.jpg'
import Images from '../images/ThirdBodyicons/Images.png'
import Icon8 from '../images/ThirdBodyicons/Icon8.png'
import Icon9 from '../images/ThirdBodyicons/Icon9.png'
import './ThirdBody.css'

const ThirdBody = () => {
  return (
    <div>
      <div className="cargo">
        <img src={Photo} alt="" className="photo" />
        <div className="overlay"></div>
        <div className="background">
          <div className="center">
            <div className="items">
              <p className="small">Why us </p>
              <h2>
                We provide full range global <br />
                logistics solution
              </h2>
              <div>
                <p className="tags">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                </p>
                <p className="tags ">
                  Organically grow the holistic world view of disruptive
                  innovation via workplace diversity and empowerment.
                </p>
                <div className="setting">
                  <img src={Icon8} alt="" className="icon" />
                  <span>Delivery on Time</span>
                </div>
                <div className="setting">
                  <img src={Icon9} alt="" className="icon" />
                  <span>Optimized Travel Cost</span>
                </div>
              </div>
            </div>
            <div className="items">
              <img src={Images} alt="" className="work" />
            </div>
          </div>
          <div className="part">
            <div className="line"></div>
            <div className="flex-side">
              <div className="side">
                <h1 className="num">1294</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    width="17"
                    height="17"
                    fill="url(#paint0_linear_1_4448)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_4448"
                      x1="0.0180415"
                      y1="3.68333"
                      x2="21.4042"
                      y2="5.20206"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFB629" />
                      <stop offset="0.507189" stop-color="#FFDA56" />
                      <stop offset="1" stop-color="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>Delivered Packages</span>
              </div>
              <div className="vertical-line"></div>
              <div className="m-side">
                <h1 className="num">3594</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    width="17"
                    height="17"
                    fill="url(#paint0_linear_1_4448)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_4448"
                      x1="0.0180415"
                      y1="3.68333"
                      x2="21.4042"
                      y2="5.20206"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFB629" />
                      <stop offset="0.507189" stop-color="#FFDA56" />
                      <stop offset="1" stop-color="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>Satisfied Clients</span>
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdBody
