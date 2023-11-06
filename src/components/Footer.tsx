import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer   , faHeart   } from '@fortawesome/free-solid-svg-icons'
const Footer = ()=>{
    return (
        <div className="p-2 bg-dark">
          <p className="text-white text-center mt-4">Developed With <span ><FontAwesomeIcon icon={faMugSaucer}   /></span> & <span ><FontAwesomeIcon  icon={faHeart} /></span> By Mohamed Kamal Mohamed</p>
        </div>
    )
}

export default Footer;