import icon1 from '../images/SixthBodyIcons/Icon1.png'
import icon2 from '../images/SixthBodyIcons/Icon2.png'
import icon3 from '../images/SixthBodyIcons/Icon3.png'
import icon4 from '../images/SixthBodyIcons/Icon4.png'
import icon5 from '../images/SixthBodyIcons/Icon5.png'
import icon6 from '../images/SixthBodyIcons/Icon6.png'
import plane from '../images/SixthBodyIcons/plane.png'
import tiny from '../images/SixthBodyIcons/tinyPlane.png'

import './SixthBody.css'

export const SixthBody = () => {
  return (
    <div className="Segment-main">
      <div className="sub-seg1">
        <div className="airPlane">
          <img className="airplane-img" src={plane} alt="" />
          <div className="tag">
            <img className="airplane-tag" src={tiny} alt="" />
            <p className="tag-text">Moving your products across borders</p>
          </div>
        </div>
      </div>
      <div className="sub-seg2">
        <div className="inner-seg">
          <div className="smallCard">
            <div className="upper">
              <p className="tag-unit">Why Choose</p>
              <h4 className="header-unit">
                We create opportunity to <br />
                reach potential
              </h4>
              <h5 className="text-unit">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </h5>
            </div>
            <div className="lower">
              <div className="pac1">
                <div className="item1">
                  <img src={icon1} alt="icon" />
                  <p className="item-tags">Safe Package</p>
                </div>
                <div className="item1">
                  <img src={icon2} alt="icon" />
                  <p className="item-tags">Global Tracking</p>
                </div>
                <div className="item1">
                  <img src={icon3} alt="icon" />
                  <p className="item-tags">In Time Delivery</p>
                </div>
              </div>
              <div className="pac2">
                <div className="item1">
                  <img src={icon4} alt="icon" />
                  <p className="item-tags">Ship Everyware</p>
                </div>
                <div className="item1">
                  <img src={icon5} alt="icon" />
                  <p className="item-tags">24/7 Support</p>
                </div>
                <div className="item1">
                  <img src={icon6} alt="icon" />
                  <p className="item-tags">Transparant Pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
