import './App.css';
import images from './images'
import React from 'react';
import { useState } from 'react';


function App() {

  const [Items,SetItems] = useState(images)

  const AllItems = ()=>{
    SetItems(images)
  }

  const AllMobiles = ()=>{
    const items = images.filter((eachItem)=>{
      return eachItem.id === "mobile"
    })
    SetItems(items)
  }

  const AllLaptops= ()=>{
    const items = images.filter((eachItem)=>{
      return eachItem.id === "laptop"
    })
    SetItems(items)
  }

  const AllWatches = ()=>{
    const items = images.filter((eachItem)=>{
      return eachItem.id === "watch"
    })
    SetItems(items)
  }

  const AllSpeakers = ()=>{
    const items = images.filter((eachItem)=>{
      return eachItem.id === "speaker"
    })
    SetItems(items)
  }




  return (
    <div className="App">
      <h2>Filter items Project</h2>
      <ul>
        <button className='search-btn' onClick={AllItems}>All</button>
        <button className='search-btn' onClick={AllMobiles}>Mobiles</button>
        <button className='search-btn' onClick={AllWatches}>Watches</button>
        <button className='search-btn' onClick={AllLaptops}>Laptops</button>
        <button className='search-btn' onClick={AllSpeakers}>Speckers</button>
      </ul>
      <hr/>
      <div className='images'>
        {
          Items.map((eachItem,index)=>{
            const {id,url,title,price} = eachItem
            return(
              <div className='images-container' key={index}>
                <img src={url} alt={id} />
                <h2>{title}</h2>
                <h4>Price - Rs {price}/-</h4>
                <button>Add Cart</button>
                <button>Buy Now</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
