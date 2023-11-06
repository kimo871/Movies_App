import { useEffect, useRef , useState    } from 'react'
//import Skeleton from '@mui/material/Skeleton'
import Nav from './Nav'
import Search from "./Search"
import Footer from './Footer'
import Carousell from './Carousell'
//const Carousell = lazy(()=> import("./Carousell"))
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from 'react-bootstrap';
function Home (){
    const object1 = useRef(null)
  
    useEffect(()=>{
            
    },[])

      

    return (
    <>
    <div style={{minHeight:"100vh"}} className="d-flex flex-column">
    <Nav theme={"navbar-dark"} position={"position-fixed"} changeTheme={"navbar-light"} changePosition={"position-fixed"} background={"bg-transparent"} changeBackground={"bg-white"}  />
    <Carousell/>
    
    <Search/> 
    <div ref={object1} style={{bottom:"1%",right:"2%",borderRadius:"4px",transition:"400ms ease-in-out",zIndex:"999999999999999999999999"}} className="opacity-0 d-none position-fixed bg-dark pt-2 pb-2 ps-3 pe-3 ">
    <FontAwesomeIcon  style={{verticalAlign:"middle",cursor:"pointer"}} className=' text-white text-dark-red' icon={faCaretUp} />
    </div>
    </div>
    <Footer/>
    
    </>
    )
}

export default Home;