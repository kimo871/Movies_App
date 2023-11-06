import Results from './Results'

import { useEffect , useContext , useRef  } from 'react';
import { Get_Genres , Search_Movies } from '../context/ActionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {Context} from '../context/context'

function Search (){
  const {state , dispatch}= useContext(Context)
  const input = useRef(null)

  
  useEffect(()=>{
    console.log(state.search)
    Search_Movies(state.search.paginationNumber , dispatch , {type:"GET_DATA"} ,  {query:state.search.query })
  },[])

  const fetch_more = ()=>{
    let windowHeight = window.innerHeight;
    let scrollY = window.scrollY;
    let documentHeight = document.body.scrollHeight;
    console.log(windowHeight,scrollY,documentHeight)

    if(windowHeight + scrollY > documentHeight -2 ){
        console.log("bottom reached wow!");
        setTimeout(()=>{Search_Movies(state.search.paginationNumber ,dispatch,{type:"ADD_DATA"},{query:state.search.query})},500)
    }
  };


function Filter (e:any){
  e.preventDefault();
  let form = new FormData(e.target);
  let entry : [string, FormDataEntryValue] 
  let object3 : any = {};

  for(entry of form){

     switch(entry[0]){
      default :
       object3[entry[0]] = (entry[1].toString().trim()==="" ? ("DEFAULT") : entry[1] );

       break;
     }

    }
  Search_Movies(state.search.paginationNumber , dispatch , {type:"GET_DATA"} ,  {query:object3.query })

  console.log(object3)
}

  
    return (
        <>
        <div style={{flex:"1 0 0"}} className="p-5 mt-3">
        <h4 style={{textAlign:"left"}}>
            Search Movies
        </h4>
        <form onSubmit={(e)=>Filter(e)}method="POST" className="d-flex  flex-wrap gap-2  ">
        <div className="col-12 col-md-5">
          <input  ref={input}  aria-label="search"  name="query" style={{borderRadius:"2.5px"}} placeholder="Search your movie..." className="p-1 ps-3 pe-3 w-100 bg-black border border-0" type="text"/>
        </div>


        <div className="col-5 col-md-2">
         
          <input style={{border:"none",borderRadius:"3px"}} type="submit" className="btn-dark-red w-100  p-1 text-white ps-3 pe-3" value="Filter"/>
        </div>

        </form>

        <Results Main={true} />
        <button onClick={fetch_more}>Load More...</button>

        

        </div>
        </>
    )
}

export default Search;