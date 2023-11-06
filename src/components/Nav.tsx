import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import {useRef , useEffect  } from 'react'

function Nav({theme,position,changeTheme , changePosition , background , changeBackground}:any) {
  const object2 : any = useRef(null)
  useEffect(()=>{
    window.onscroll = ()=>{
      if(window.scrollY > 0){
        if(object2.current !== null ) {
          object2.current.classList.remove(position,theme,background)
          object2.current.classList.add(changePosition,changeTheme,changeBackground,"shadow-lg")
        }
      }
      else{
        object2.current.classList.remove(changePosition,changeTheme,changeBackground,"shadow-lg")
        object2.current.classList.add(position,theme,background)
      }
    }
    
  })
  
  return (<>
   
    <Navbar  expand="lg" ref={object2} style={{transition:"350ms ease-in-out",zIndex:"999999999999999999",letterSpacing:"3px"}} className={`${background}  ${position}  t-0 s-0 w-100 p-3 ${theme}`}>
      
      <Container  className="ms-4 me-4 mw-100   " >
        <Navbar.Brand className="text-dark-red" href="/">React Movies</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="w-100 justify-content-end align-items-center">
          <Navbar.Text  role="button" className="  me-5">
          <Link className="text-decoration-none" to="/watchlist" >WatchList</Link>
          </Navbar.Text>
          <Navbar.Text role="button" className=" me-5">
          <Link className="text-decoration-none" to="/watched" >Watched</Link>
          </Navbar.Text>
          <Navbar.Text role="button" className="me-5">
            <Link className="text-decoration-none" to="/favorites" >Favorites</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Nav;