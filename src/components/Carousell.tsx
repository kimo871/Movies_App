
import Carousel from 'react-bootstrap/Carousel';
import { useEffect , useContext } from 'react';
import {Context} from '../context/context'
import {Get_Coming} from '../context/ActionCreators'

function Carousell() {

 const {state,dispatch}= useContext(Context)

  useEffect(
    ()=>{
     Get_Coming(dispatch)
    },[])

  return (
    <>
    <Carousel role="list" fade >

      {state.coming.map((item:any)=>{
        return (

          <Carousel.Item key={item.id} role="listitem" interval={1200}>

      <div className="item  ">

       <div className="caption d-flex flex-wrap align-items-center ">

         <div className="overview col-12 col-lg-6 ">

          <div  className="alert alert-danger ps-3 pe-3 pt-1 pb-1 btn-dark-red border border-0 w-50  " role="alert">
            UpComing Movies
          </div>

          <h1>{item.title}</h1>

          <p>{item.overview}</p>

          <button aria-label="watch" className="btn btn-dark-red">Watch Trailer</button>

         </div>

         <div className="d-flex flex-column justify-content-center align-items-center col-12 col-lg-6 mt-4 mt-lg-0 ">
            
          <img aria-label={item.title} className="rounded"  alt="poster" width="200px" height="250px" src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />
         
         </div>
      
       </div>

       <div className="background-image">

        <img aria-label={item.title} width="100%" height="100%" alt="text" src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}/>
        
       </div>

       <div className='background-overlay'></div>

      </div>

      </Carousel.Item>

        )
      })}
    

  </Carousel>

    </>
  );
}

export default Carousell;