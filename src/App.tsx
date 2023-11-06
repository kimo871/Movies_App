import { useEffect , lazy , Suspense  } from 'react'
import './App.css'
import Home  from './components/Home'
//import Favorite  from './components/Favorite'
const Favorite = lazy(()=> import("./components/Favorite"))
const Watched = lazy(()=> import("./components/Watched"))
//import Watched  from './components/Watched'
import WatchList  from './components/WatchList'
import {useMultipleReducers , initial , Context} from './context/context'
import  {BrowserRouter , Routes , Route} from  'react-router-dom'

function App() {
  const [state , dispatch] = useMultipleReducers(initial)
  useEffect(()=>{
    localStorage.setItem("watched",JSON.stringify(state["watched"]))
    localStorage.setItem("watchlist",JSON.stringify(state["watchlist"]))
    localStorage.setItem("favorites",JSON.stringify(state["favorites"]))
    console.log(state)
  },[state])
  
  return (
    <>
    <Context.Provider value={{state,dispatch}}>
      <BrowserRouter>
      <Suspense>
      <Routes>
        <Route  path="" element={<Home/>}/>
        
        <Route path="/favorites" element={<Favorite/>}/>
       
        <Route  path="/watched" element={<Watched/>}/>
      
        <Route  path="/watchlist" element={<WatchList/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
    </Context.Provider>
    </>
  )
}

export default App
