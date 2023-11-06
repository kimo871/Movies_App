import Nav from './Nav'
import Results from './Results'
import Footer from './Footer'
function Watched (){
    return (
        <>
       <div style={{minHeight:"100vh"}} className="d-flex flex-column">
       <Nav theme={"navbar-light"} position={"position-relative"} changeTheme={"navbar-light"} changePosition={"position-fixed"} background={"bg-white"} changeBackground={"bg-white"}  />
       <div style={{flex:"1 0 0"}} className="p-5  position-relative">
        <h4 style={{textAlign:"left"}}>
            Watched Movies
        </h4>

        <Results Main={false} category={"watched"}/>

        </div>
        <Footer/>
        </div>
        </>
    )
}

export default Watched;