import {useReducer  , createContext } from 'react'

(localStorage.getItem("watched"))==null && localStorage.setItem("watched",JSON.stringify({}));

(localStorage.getItem("favorites"))==null && localStorage.setItem("favorites",JSON.stringify({}));

(localStorage.getItem("watchlist"))==null  && localStorage.setItem("watchlist",JSON.stringify({}));




function genreReducer(state:any,action:any){
  switch(action.type){
    case "GET_GENRES":
      return action.payload ;
    default :
      return state;
  }
}

function comingReducer(state:any ,action:any){
  switch(action.type){
    case "GET_COMING":
      return action.payload ;
    default :
      return state
  }
}

function searchReducer (state:any , action:any){
  switch(action.type){
    case 'GET_DATA':
      return {...state , query:action.payload.query , paginationNumber:action.payload.page,Movies:action.payload.results}
      case 'ADD_DATA':
      return {...state ,paginationNumber:action.payload.page ,   Movies:state.Movies.concat(action.payload.results)}
    default :
      return state;
  }
}

function watchedReducer(state:any , action:any){

  switch(action.type){
    case 'ADD_MOVIE_WATCHED':
       return Object.assign({} , state , action.payload)

    case 'DELETE_ALL_WATCHED':
      return {}
    
    case 'DELETE_MOVIE_WATCHED':
      let obj : any = {};
      Object.keys(state).map(item =>{
        if(item!=action.payload)obj[item]=state[item];
      })
      return obj;

    default:
      return state
  }
}

function watchlistReducer(state:any,action:any){
  switch(action.type){
    case 'ADD_MOVIE_WATCHLIST':
      return  Object.assign({},state , action.payload)

    case 'DELETE_ALL_WATCHLIST':
      return {}
    
    case 'DELETE_MOVIE_WATCHLIST':
     let obj : any = {};
      Object.keys(state).map(item =>{
        if(item!=action.payload)obj[item]=state[item];
      })
      return obj;

    default:
      return state
  }
}

function favoritesReducer(state:any,action:any){
  switch(action.type){

    case 'ADD_MOVIE_FAVORITE':
      return Object.assign({},state , action.payload)

    case 'DELETE_ALL_FAVORITE':
      return {}
    
    case 'DELETE_MOVIE_FAVORITE':
      let obj : any = {};
      Object.entries(state).map(item =>{
        if(item[0]!=action.payload)obj[item[0]]=item[1];
      })
      console.log(action)
      return obj;

    default:
      return state
  }
}

const initial = {
  genres:[],
  coming:[],
  search:{query:"DEFAULT", Movies:[],paginationNumber:0},
  watched:JSON.parse(localStorage.getItem("watched") as string ),
  watchlist:JSON.parse(localStorage.getItem("watchlist") as string ),
  favorites:JSON.parse(localStorage.getItem("favorites") as string)
}

const combineReducers = (reducers:any)=>{ return  (state:any,action:any)=>{
  return Object.keys(reducers).reduce((target:any,key:any)=>{
     target[key] = reducers[key](state[key],action)
     return target;
  },{})
}
}

function useMultipleReducers(initialState:any) {
  // Create a combined reducer from the individual reducers
  const combinedReducer = combineReducers({
    genres : genreReducer,
    coming:comingReducer,
    search:searchReducer,
    watched:watchedReducer,
    watchlist:watchlistReducer,
    favorites:favoritesReducer
});

  const [state, dispatch] = useReducer(combinedReducer, initialState);

  return [state, dispatch];
}
const Context = createContext<any>({})

export {useMultipleReducers , initial , Context}




