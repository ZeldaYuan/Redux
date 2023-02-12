import axios from 'axios';

var API_KEY = '14204379-7d3ac6eed48661065b4c023bb';
const SEARCH_URL = (searchtitle)=>"https://pixabay.com/api/?key="+API_KEY+"&q=" + searchtitle;
const COLLECTS_URL = '/api/collects';
const COLLECT_URL = (imdbID) => '/api/collects/' + imdbID;

 const apiClient = {
   query(searchtitle) {
    searchtitle = encodeURIComponent(searchtitle);
      if (searchtitle.trim().length === 0){
      // let searchtitle='';
       let res={};
       return res   //Still not clean display
      }else
      {
      const res = axios.get(SEARCH_URL(searchtitle));
      console.log(res);
      return res
     }
  },

  saveCollect(movie) {
    return axios.post(COLLECTS_URL, movie);
  },

  getAllCollects() {
    return axios.get(COLLECTS_URL);
  },

  deleteCollect(imdbID) {
    return axios.delete(COLLECT_URL(imdbID));
  },
}

window.apiClient = apiClient;
window.axios = axios;

export default apiClient;
