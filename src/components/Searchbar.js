import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchOutlined} from '@mui/icons-material'
import {Paper,IconButton} from '@mui/material'
const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()
    const handelSubmit = (e)=>{
        e.preventDefault()
        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setSearchTerm("")
        }
    }
    return (
        <Paper 
        component="form"
        onSubmit={handelSubmit}
        sx={{
            borderRadius:20,
            border:'1px solid #e3e3e3',
            pl:2,
            boxShadow:'none',
            mr:{sm:5}
            }}
        >
            <input className='search-bar' 
            placeholder='Search...'
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
             />
             <IconButton sx={{p:'10px',color:'red'}} type='submit'><SearchOutlined/></IconButton>
        </Paper>
    );
};

export default Searchbar;