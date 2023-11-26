import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchFromApi} from '../utils/fetchFrom'
import ChannelCard from './ChannelCard';
import Videos from './Videos';
const Channel = () => {
    const [channelDetail, setChannelDetail] = useState(null)
    const [ videos, setVideos] = useState([])
    const id = useParams().id
    useEffect(()=>{
        fetchFromApi(`channels?part=snippet&id=${id}`)
        .then(data => setChannelDetail(data?.items[0]))
        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
        .then(data => setVideos(data?.items))
    },[id])
    return (
        <Box minHeight="95vh">
            <Box>
                <div  style={{
                    background: "linear-gradient(13deg, rgba(34,179,179,1) 0%, rgba(63,203,186,1) 50%, rgba(86,120,184,1) 100%)",
                    zIndex:10,
                    height:'300px'
                }}/>
                <ChannelCard  channelDetail={channelDetail} marginTop="-110px"/>
            </Box>
            <Box display="flex" p="2">
                <Box sx={{
                    mr:{sm:'100px'}
                }} />
                    <Videos videos={videos} />

            </Box>
        </Box>
    );
};

export default Channel;