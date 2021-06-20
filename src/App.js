import { useEffect, useState } from "react";
import "./App.css"
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";


function App() {
  const [items,setItems] =useState([])
  const [isLoading,setisLoading] =useState(true)
  const [query,setQuery] =useState("")
  useEffect(()=>{
    const fetchItems =async ()=>{
     const result= 
     await axios.get
     (`https://www.breakingbadapi.com/api/characters?name=${query}`)
     setItems(result.data)
     setisLoading(false)
    // console.log(result.data);
    }
    fetchItems()
  },[query])
  
  return (
    <div className="App">
    <Header/>
    <Search getQuery={(q)=>setQuery(q)}/>
    <CharacterGrid  isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
