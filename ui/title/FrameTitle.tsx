import React from 'react';
import { Box} from '@mantine/core';

import { useState, useEffect } from 'react';

import Title from './Title'

const buttonStyles = {
    root: {
        width: '100%',
        height: '50px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '20px',
        fontWeight: 700,
        borderRadius: 0,
        border: 'none',
        marginBottom: '8px',
        transition: 'background-color 0.2s',
    },
};

function GameMenu() {
    const menuItems = ['CONTROLS', 'GAMEPAD', 'GRAPHICS', 'AUDIO', 'BACK'];

    const [flickerOpacity, setFlickerOpacity] = useState(1);


    // Film flicker effect
    useEffect(() => {
        const flickerInterval = setInterval(() => {
            const randomOpacity = Math.random() * 0.1 + 0.9; // Between 0.9 and 1.0
            setFlickerOpacity(randomOpacity);
        }, 100);

        return () => clearInterval(flickerInterval);
    }, []);

    return (
        <Box
            style={{
                width: '1280px',
                height: '720px',
                overflow: 'hidden',
                backgroundImage: 'url(./img/017.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: flickerOpacity
            }}

        >

            <Title/>


        </Box>
    );
}

export default function AmericanFugitiveMenu() {
    return (
        <div>
            <GameMenu />
        </div>
    );
}

