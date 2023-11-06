type dispatch_function = (object : object)=>{};
type Filter_Scheme = {
    query : string ,
}

type Action = {
  type:string
}


const options = {
    method:"GET",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzU4MmVmN2JiMGIxZjc3YjkyNWYxNWVmZTI0NTQ2ZSIsInN1YiI6IjY0ZmNjMzFmNmEyMjI3MDBhYmE3MWJhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ee666x8WhseU2PwpDjnVeFk6yociAWKf3Potx0Fr8Mo'
      }
  }

  // get coming returns upcoming movies soon

const Get_Coming = (dispatch:dispatch_function)=>{
  return fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",options)
    .then((res)=> res.json())
    .then((res)=>  {dispatch({type:"GET_COMING",payload:res.results})}).catch(err=>console.log(err))
}

// get genres return genres classifications from api

const Get_Genres = (dispatch:dispatch_function)=>{
    return  fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",options)
      .then(res=>res.json())
      .then(res=>{dispatch({type:"GET_GENRES",payload:res.genres})})
}

// return movies based on filtered options (query,..etc)

const Search_Movies = (paginationNumber : number , dispatch:dispatch_function,action:Action ,  obj:Filter_Scheme)=>{
   let logic_url : string  = '';
   if(obj.query==="DEFAULT"){
     logic_url="movie/popular?page=" + (action.type=="GET_DATA" ? "1" : paginationNumber+1 );
   }
   else{
     logic_url="search/movie?query="+obj.query+"&page=" +  (action.type=="GET_DATA" ? "1" : paginationNumber+1 )
   }

    return fetch(`https://api.themoviedb.org/3/${logic_url}`,options)
      .then(res=>res.json())
      .then(res=> {dispatch({type:action.type,payload:Object.assign({},res,{query:obj.query})    })})
      .catch((err:Error)=>console.log(err))
}

const Add_Item = (dispatch:dispatch_function , action:Action , obj:any )=>{
    let object :any = {};
    object[obj.id]=obj
    return dispatch({type:action.type , payload:object})
}

const Delete_Item = (Id:number , dispatch:dispatch_function , type:string)=>{
   return dispatch({type:type , payload:Id})
}

const Delete_All = (dispatch:dispatch_function , action:Action)=>{
  return dispatch({type:action.type})
}


export {Get_Coming , Get_Genres , Search_Movies , Add_Item, Delete_Item , Delete_All}