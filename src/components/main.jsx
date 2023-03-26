import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import '../assets/css/main.css'
import Img1 from '../assets/img/img1.png'
import Ballcanvas from './canvas/balls'



export const Main = () => {
    return (
        <div id='main'>
            <Stack direction={'row'} sx={{ display: "flex", justifyContent: "space-between" }} >
                <div id='mainbox'>
                    <h2 id='h2'>Hi i'm</h2>
                    <h1 id='h1'>Hari guptha</h1>
                    <h3 id='h3'>mern-stack developer, ux/ui designer,digital artist</h3>
                </div>
                <img id='img' src={Img1} alt="char" />
            </Stack>
            <Ballcanvas />
        </div>
    )
}
