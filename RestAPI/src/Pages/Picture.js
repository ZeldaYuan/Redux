import React,{useState,useEffect} from 'react';
import ReactPaginate from "react-paginate";
import { useSelector } from 'react-redux';
import axios from 'axios';
/*Pass search result object as pictures*/
export default function Picture( {pictures} ) {
  const [currentItems,setCurrentItems] = useState([]);
  const [pageCount,setPageCount] = useState(0);
  const [itemOffset,setItemOffset] = useState(0);
  const [loading,setLoading] = useState(false);
  //const [currentItem,setCurrentItem] = useState([]);
  const state = useSelector((state)=>state);
  const itemPerPage = 10;

/*Pass search result pictures object be used as pictures.data.hits*/
  useEffect(()=>{
    const endOffset = itemOffset + itemPerPage;
    setCurrentItems(pictures.data.hits.slice(itemOffset,endOffset));
    setPageCount(Math.ceil(pictures.data.total / itemPerPage));
  },[itemOffset,itemPerPage,pictures]);

 /*Pass total picture number to be count as pictures.data.total*/
  const handlePageClick = (event)=>{
    if (! state.loading){
      setLoading(true);
    const newOffset = (event.selected* itemPerPage)% pictures.data.total;
    setItemOffset(newOffset);
    setLoading(false)
  }
}
//Send current picture to mockapi collection
const sendImageToCollection = (currentPicture) =>{
  axios.post(`https://63ba0e3156043ab3c794e612.mockapi.io/c1`,{
    currentPicture
});
}

 if (Object.keys(pictures.data).length && pictures.data.total){
  return(
    <>
   <div className="pictures-container">
   {currentItems.map(picture=>{
    return(
        <a key={picture.id} href={picture.previewURL} className="picture">
        <div className="image-wrapper">
          <img className="image" src={picture.previewURL}
          alt={`${picture.user} img`} />
          <button type="button" class="button" onClick={()=>sendImageToCollection(picture)}
          >Add</button>
        </div>
        </a>
     )
     })
    }
   </div>
   <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={3}
    pageCount={pageCount}
    previousLabel="< previous"
    renderOnZeroPageCount={null}
    containerClassName="pagination"
    pageLinkClassName='page-num'
    previousLinkClassName="page-num"
    nextLinkClassName="page-num"
    activeLinkClassName="active"
    />
    </>
  )
 }
}
