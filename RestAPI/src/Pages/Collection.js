import React,{useState,useEffect} from 'react';
import axios from 'axios';
//import Picture from './Picture';

const Collection =() => {
  const [pictureData,setPictureData] = useState([]);
  useEffect(()=>{
    axios.get(`https://63ba0e3156043ab3c794e612.mockapi.io/c1`)
      .then((getAllCollections)=>{
        setPictureData(getAllCollections.data)
      //  console.log(pictureData);
      })
    },[])

//Get all collection pictures from mockapi
  const getAllCollections = ()=>{
    axios.get(`https://63ba0e3156043ab3c794e612.mockapi.io/c1`)
      .then((getAllCollections)=>{
        setPictureData(getAllCollections.data);
      })
  }

  const deletePicture = (id) =>{
    axios.delete(`https://63ba0e3156043ab3c794e612.mockapi.io/c1/${id}`)
      .then(res=>{
        console.log("deleted successfully!")
        getAllCollections();
      })
      }
//Get the collection image from mockapi and remove duplicate items
  const collectionImage = pictureData.reduce((finalArray,current)=>{
    let obj = finalArray.find((item)=>item.currentPicture.id===current.currentPicture.id);
    if(obj){
      return finalArray
    }else {
      return finalArray.concat([current]);
    }
  },[]);
  console.log("collectionImage",collectionImage) //display final collectionImage
  return(
    <>
   <div className="pictures-container">
   {collectionImage.map(image=>{
    return(
        <a key={image.currentPicture.id} href={image.currentPicture.previewURL} className="picture">
        <div className="image-wrapperc">
          <img className="imagec" src={image.currentPicture.previewURL}
          alt={`${image.currentPicture.user} img`} />
          <button type="button" class="buttond" onClick={()=>deletePicture(image.id)}
          >Delete</button>
        </div>
        </a>
     )
     })
    }
   </div>
   </>
)}

export default Collection;
