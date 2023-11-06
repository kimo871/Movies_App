import Nav from './Nav'
import Results from './Results'
import Footer from './Footer'
function Favorite (){
    return (
        <>
       <div style={{minHeight:"100vh"}} className="d-flex flex-column">
       <Nav theme={"navbar-light"} position={"position-relative"} changeTheme={"navbar-light"} changePosition={"position-fixed"} background={"bg-white"} changeBackground={"bg-white"}  />
       <div style={{flex:"1 0 0 "}} className="p-5  position-relative">
        <h4 style={{textAlign:"left"}}>
            Favorite Movies
        </h4>

        <Results Main={false} category={"favorites"}/>

       
        
        </div>
        <Footer/>
        </div>
        </>
    )
}

export default Favorite;