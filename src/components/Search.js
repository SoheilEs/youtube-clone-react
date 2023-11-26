import React, { useEffect, useState } from 'react';
import { Box, Typography} from '@mui/material'

import Videos from './Videos';
import { fetchFromApi } from '../utils/fetchFrom';
import { useParams } from 'react-router-dom';
const Search = () => {

    const [videos, setVideos] = useState([])
    const{ searchTerm } = useParams()
    console.log(searchTerm)
    useEffect(()=>{
        fetchFromApi(`search?part=snippet&q=${searchTerm}`)
        .then(data => setVideos(data.items))
        .catch(err => console.log(err))
    },[searchTerm])
    return (
        <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
            <Typography variant='h4' fontWeight='blod' mb={2} sx={{color:'white'}}> 
             Search Results:<span style={{color:"#F31503"}}>{searchTerm}</span>
            </Typography>
            <Videos videos={videos} />
        </Box>
    );
};

export default Search;