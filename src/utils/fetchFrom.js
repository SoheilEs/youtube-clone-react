import axios from "axios";



const options = {

    params: {
      maxResults: '50',
      order: 'date'
    },
    headers: {
        'X-RapidAPI-Key': '6b2b902311msh38b72d561883d3ap13d158jsn7829f3319540',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
  };


export const fetchFromApi = async (url) =>{
   
  const res =   await axios.get(`https://youtube-v31.p.rapidapi.com/${url}`,options)
  return res.data
}