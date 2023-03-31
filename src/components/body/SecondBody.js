import car from '../images/SecondBodyIcons/car.png'
import office from '../images/SecondBodyIcons/office.png'
import plane from '../images/SecondBodyIcons/plane.svg'
import ship from '../images/SecondBodyIcons/ship.png'

import './SecondBody.css'

export const SecondBody = () => {
  return (
    <div className="main-con">
      <div className="second-con">
        <div className="catA slide-one">
          <p className="side-note">What We Do</p>
          <h1 className="context">Safe & Reliable <br/> Cargo Solutions</h1>
        </div>
        <div className="catB slide-two">
          <span>
            <img className="icons" src={ship} alt="" />
            <div className="vertical"></div>
            <div className="span-div">
              <h3 className="subheading">Sea Transport Services</h3>
              <p className="subtext">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </span>
          <div className="slide-three">
            <span>
              <img className="icons" src={plane} alt="" />
              <div className="vertical"></div>
              <div className="span-div">
                <h3 className="subheading">Air Fright Services</h3>
                <p className="subtext">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </span>
          </div>
        </div>
        <div className="catC slide-four">
          <span>
            <img className="icons" src={office} alt="" />
            <div className="vertical"></div>
            <div className="span-div">
              <h3 className="subheading">Warehousing Services</h3>
              <p className="subtext">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </span>
          <div className="slide-five">
            <span>
              <img className="icons" src={car} alt="" />
              <div className="vertical"></div>
              <div className="span-div">
                <h3 className="subheading">Local Shipping Services</h3>
                <p className="subtext">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
