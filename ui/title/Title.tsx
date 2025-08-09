'use client'
import { redirect } from '@tanstack/react-router'
import React from 'react'
import { useState, useEffect } from 'react';
import {
    Box,
    Title,
    Text,
    Button,
    Stack,
    Space,
    //createStyles, 
    MantineProvider,
    MantineThemeOverride,
    Overlay,
    Affix
} from '@mantine/core';

import { Link } from '@tanstack/react-router'


//import { IconSkull } from '@tabler/icons-react';
//<IconSkull size={16} />
// Custom theme for Swamp Water (1941) aesthetic
const theme: MantineThemeOverride = {

};

//const useStyles = createStyles((theme) => ());

export default function Component() {
    //const { classes, cx } = useStyles();
    const [activeOption, setActiveOption] = useState('GAME');
    const [flickerOpacity, setFlickerOpacity] = useState(1);

    var act00 = () => {
        document.location.href = '/scene'
    }

    var act01 = () => {
        document.location.href = '/test'
    }

    var actionThree = () => {

        document.location.href = '/camera'


    }



    // Film flicker effect
    useEffect(() => {
        const flickerInterval = setInterval(() => {
            const randomOpacity = Math.random() * 0.1 + 0.9; // Between 0.9 and 1.0
            setFlickerOpacity(randomOpacity);
        }, 100);

        return () => clearInterval(flickerInterval);
    }, []);

    return (
        <Box className={'wrapper'} style={{ opacity: flickerOpacity }}>
            <div className={'swampFog'} />
            <div className={'fogPatches'} />

            <Box style={{ paddingLeft: '94px', }} className={'titleContainer'}>
                <Title className={'title'} order={1} size={126}>
                    GLOPS.LIVE
                </Title>
                <Text style={{ paddingLeft: '10px' }} className={'subtitle'} size="xs">
                    v0.0.0
                </Text>
            </Box>





            <Stack className={'menuContainer'} style={{ paddingTop: '400px', paddingLeft: '400px' }} justify="flex-end">

                <Button
                    key='0'
                    className={'menuButton'}
                    onClick={act00}
                    size="lg"
                    fullWidth
                    style={{ height: '33px', width: '1000px' }}
                >
                    PLAY
                </Button>



                <Button
                    key='0'
                    className={'menuButton'}
                    size="lg"
                    fullWidth
                    style={{ height: '33px', width: '1000px' }}
                    onClick={act01}
                >
                    TEST

                </Button>



            </Stack>



        </Box>

    );
}