import Logo from '../images/TopNavIcons/Logo.png'
import PhoneIcon from '../images/TopNavIcons/phone.png'
import MailIcon from '../images/TopNavIcons/mail.png'
import ClockIcon from '../images/TopNavIcons/clock.png'
import './TopNav.css'

function TopNav() {
  return (
      <div className="container">
        <div className="content">
          <div className="logo-div">
            <img className="logo" src={Logo} alt="Logo" />
          </div>
          <div className="contact">
            <div className="sub con1">
              <img className="phone icon" src={PhoneIcon} alt="Icon" />
              <p className='info'>Mon - Sat 9.00 - 18.00 Sunday Closed</p>
            </div>
            <div className="sub con2">
              <img className="mail icon" src={MailIcon} alt="Icon" />
              <p className='info'>Email contact@logistics.com</p>
            </div>
            <div className="sub con3">
              <img className="clock icon" src={ClockIcon} alt="Icon" />
              <p className='info'>Call Us <br></br> (00) 112 365 489</p>
            </div>
          </div>
        </div>
      </div>
  )
}
export default TopNav
