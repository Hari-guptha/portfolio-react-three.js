import { Box, Stack } from '@mui/system'
import React from 'react'
import '../assets/css/main.css'
import '../assets/css/button.css'
import '../assets/css/mouseanimation.css'
import Img1 from '../assets/img/img1.png'
import Img2 from '../assets/img/samp3.png'
import Tilt from 'react-tilt';




export const Main = () => {
    return (
        <div id='main'>
            <Stack direction={'row'} sx={{ display: "flex", justifyContent: "space-between" }} >
                <div id='mainbox'>
                    <div id='Tilt' >
                        <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                            <Box sx={{ display: "flex" }}>
                                <h2 id='h2'>Hi i'm </h2>
                                <img id='sampimg1' src={Img2} alt="char" />
                            </Box>
                        </Tilt>
                    </div>

                    <h1 id='h1'>Hari guptha</h1>
                    <h3 id='h3'>mern-stack developer, ux/ui designer,digital artist</h3>
                    <div style={{ display: "flex", justifyContent: "center", justifyItems: "center", paddingTop: "10%" }}>
                        <button class="glow-on-hover" type="button">download my cv</button>
                    </div>
                </div>
                <img id='img' src={Img1} alt="char" />

            </Stack>
            <br/>
            <br/>
            <br/>
            <div class="mouse-container" id='mouse'>
                <a href="#about">
                    <div class="mouse">
                        <div class="mouse-wheel"></div>
                    </div>
                </a>
            </div>
            <img id='img2' src={Img1} alt="char" />
        </div>
    )
}
