
import { useEffect , useContext  } from 'react';
import { Search_Movies , Add_Item , Delete_Item , Delete_All } from '../context/ActionCreators';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay ,faNotesMedical  , faHeart , faEye , faClose  } from '@fortawesome/free-solid-svg-icons'
import {Context} from '../context/context'
function Results (props:any){
    const {state,dispatch}= useContext(Context)
    console.log("palestine")

    useEffect(()=>{
    
    },[])

    const AddItem = (obj:any,type:any,category:any)=>{
      if(state[category][obj.id])return;
      return Add_Item(dispatch,{type:type},obj);
    }

    const DeleteItem = (Id:number , category:any)=>{
        switch(category){
            case 'favorites':
                return Delete_Item(Id,dispatch,"DELETE_MOVIE_FAVORITE")
            case 'watched' :
                return Delete_Item(Id,dispatch,"DELETE_MOVIE_WATCHED")
            case 'watchlist':
                return Delete_Item(Id,dispatch,"DELETE_MOVIE_WATCHLIST")
                 
        }
     return;
    }


    return (
        <>
        <div className="d-flex flex-wrap gap-3 pt-4 ">
        
        {props.Main && state.search.Movies.map((item:any)=>{
            return (
                <div key={item.id} className="col-5 col-md-custom  ">
                <div  className="card rounded-bottom-0 position-relative ">
                    <div className="layer"></div>
                    <div className="text"><span ><FontAwesomeIcon  icon={faCirclePlay} /></span>
                    </div>
                    <img width="100%" height="100%" alt="text" src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}/>
                </div>
                <div  className="info  w-100 position-relative text-white rounded-bottom d-flex p-2 justify-content-between">
                    <div>
                    <span >{item.release_date.split("-")[0]}</span>
                    </div>
                    
                    
                      <div className="d-flex gap-3 ">
                      <span onClick={(e)=> AddItem(item,"ADD_MOVIE_FAVORITE","favorites")}><FontAwesomeIcon icon= { faHeart} /></span>
                      <span onClick={(e)=>AddItem(item,"ADD_MOVIE_WATCHED","watched")}><FontAwesomeIcon  icon= { faEye} /></span>
                      <span onClick={(e)=> AddItem(item,"ADD_MOVIE_WATCHLIST","watchlist")}><FontAwesomeIcon icon= { faNotesMedical} /></span>
                      </div>
                
                </div>
                <h6 className="p-2">{item.title}</h6>
                
                </div>
            )
        })}


{!props.Main && Object.entries(state[props.category]).map((item:any)=>{
    console.log(item);
            return (
                
                <div key={item[0]} className="col-5 col-md-custom  ">
                <div  className="card rounded-bottom-0 position-relative ">
                    <div className="layer"></div>
                    <div className="text"><span ><FontAwesomeIcon  icon={faCirclePlay} /></span>
                    </div>
                    <img width="100%" height="100%" alt="text" src={`https://image.tmdb.org/t/p/w300/${item[1].poster_path}`}/>
                </div>
                <div  className="info  w-100 position-relative text-white rounded-bottom d-flex p-2 justify-content-between">
                    <div>
                    <span >{item[1].release_date.split("-")[0]}</span>
                    </div>
                
            
                    <div className="d-flex gap-3 ">
                    <span onClick={(e)=> DeleteItem(item[0],props.category)}><FontAwesomeIcon icon= { faClose} /></span>
                    </div>
                    
                
 
                    
                    
                </div>
                <h6 className="p-2">{item[1].title}</h6>
                
                </div>
            )
        })}

        
          </div>
        
        </>
    )
}

export default Results;