import {useEffect, useState} from "react"
import GifCard from "./components/GifCard";
import GifSearch from "./components/GifSearch";
import './App.css';

function App() {

  const [gif, setGif]=useState(null);
  const apiKey = "8AwgGIr2itCdp31jqie7p6cyXE39VLIn"

  const getGif = async (gifSearch)=>{
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gifSearch}&limit=25&offset=0&rating=g&lang=en`
    )
    const data = await response.json();
    const displayData = (data.data[0].images.downsized_large.url)

    setGif(displayData)

    
    // console.log("gif", gif)
  }
console.log("gif", gif)
  // useEffect(()=>{
  //   getGif("default");
  // }, [])

  return (
    <div className="App">
      What are you looking for?
    <GifSearch gifSearch={getGif}/>
    <GifCard gif={gif}/>
    </div>
  );
}

export default App;