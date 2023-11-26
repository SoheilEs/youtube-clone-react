import React from 'react'
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Feed from './components/Feed.js';
import Video from './components/Video.js';
import Search from './components/Search.js';
import Channel from './components/Channel.js';
import Navbar from './components/Navbar.js'
function App() {
  return (
    <Box sx={{'backgroundColor':'#000'}} >
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/video/:id' element={<Video />} />
        <Route path='/channel/:id' element={<Channel />} />
        <Route path='/search/:searchTerm' element={<Search />} />
      </Routes>
    </Box>
  );
}

export default App;
