import fb from '../images/ButtomNavIcons/Facebook.png'
import ig from '../images/ButtomNavIcons/Instagram.png'
import ld from '../images/ButtomNavIcons/Linkdin.png'
import tw from '../images/ButtomNavIcons/Twitter.png'
import v from '../images/ButtomNavIcons/Vector.png'
import './BottomNav.css'

export const BottomNav = () => {
  return (
    <div className="nav-container">
      <div className="inner">
        <div className="nav-bar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li className="dropdown">
              Pages <img className='vector' src={v} alt="dropdown" />
              <ul className="dropdown-menu">
                <li>Page 1</li>
                <li>Page 2</li>
                <li>Page 3</li>
              </ul>
            </li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="social-icons">
          <img className="Facebook" src={fb} alt="facebook icon" />
          <img className="instagram" src={ig} alt="Instagram icon" />
          <img className="linkdin" src={ld} alt="Linkdin icon" />
          <img className="twitter" src={tw} alt="Twitter icon" />
        </div>
        <button className='request-btn'> Request Quote </button>
      </div>
    </div>
  )
}
