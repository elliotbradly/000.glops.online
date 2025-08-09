import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Divider, ScrollArea, Center, Button } from '@mantine/core';
import { Title, Text, Stack, Container, Group, Transition } from '@mantine/core';

import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings, IconHourglassLow } from '@tabler/icons-react';

import { TaskCard } from './TaskCard';

import { Affix, Space, Grid } from '@mantine/core';

import * as Increment from '../../000.control/val/increment'

import Slider from './Slider'
const { useRef } = React;

import * as ActBab from '../../111.solid/01.babylon.unit/babylon.action'
import * as ActCtl from '../../000.control/00.control.unit/control.action'
import * as ActFoc from "../../002.space/02.focus.unit/focus.action"

var flag = false;

let bit

export default function Component() {

    const [opened, setOpened] = useState(false);
    const [count, setCount] = useState(false);

    const [form, setForm] = useState('-----------------------------------------------------------');

    const [colorListSize, setColorListSize] = useState(0);

    const [second, setSecond] = useState();
    const [minute, setMinute] = useState();
    const [hour, setHour] = useState();

    const [data, setData] = useState('');

    const [fadeIn, setFadein] = useState('invisible');

    const [activeSegment, setActiveSegment] = useState('sec');

    var secondsAction = async () => {
        await window['CONTROL'](ActCtl.INCREMENT_CONTROL, { src: Increment.SECONDS })
        await window['CONTROL'](ActCtl.ACCESS_CONTROL, { val: 1 })

        setTimeout(secondsRelease, 333)
    }

    var secondsRelease = async () => {
        await window['CONTROL'](ActCtl.INCREMENT_CONTROL, { src: Increment.DEFAULT })
        await window['CONTROL'](ActCtl.ACCESS_CONTROL, { val: 0 })
        await window['CONTROL'](ActCtl.UPDATE_CONTROL, { val: 1 })
    }


    var minutesAction = async () => {
        await window['CONTROL'](ActCtl.INCREMENT_CONTROL, { src: Increment.MINUTES })
        await window['CONTROL'](ActCtl.ACCESS_CONTROL, { val: 1 })

        setTimeout(minutesRelease, 333)
    }

    var minutesRelease = async () => {
        await window['CONTROL'](ActCtl.INCREMENT_CONTROL, { src: Increment.DEFAULT })
        await window['CONTROL'](ActCtl.ACCESS_CONTROL, { val: 0 })
        await window['CONTROL'](ActCtl.UPDATE_CONTROL, { val: 1 })
    }

    var hoursAction = async () => {
        await window['CONTROL'](ActCtl.INCREMENT_CONTROL, { src: Increment.HOURS })
        await window['CONTROL'](ActCtl.ACCESS_CONTROL, { val: 1 })

        setTimeout(hoursRelease, 333)
    }

    var hoursRelease = async () => {
        await window['CONTROL'](ActCtl.INCREMENT_CONTROL, { src: Increment.DEFAULT })
        await window['CONTROL'](ActCtl.ACCESS_CONTROL, { val: 0 })
        await window['CONTROL'](ActCtl.UPDATE_CONTROL, { val: 1 })
    }

    var daysAction = async () => {
        await window['CONTROL'](ActCtl.INCREMENT_CONTROL, { src: Increment.DAYS })
        await window['CONTROL'](ActCtl.ACCESS_CONTROL, { val: 1 })

        setTimeout(daysRelease, 333)
    }

    var daysRelease = async () => {
        await window['CONTROL'](ActCtl.INCREMENT_CONTROL, { src: Increment.DEFAULT })
        await window['CONTROL'](ActCtl.ACCESS_CONTROL, { val: 0 })
        await window['CONTROL'](ActCtl.UPDATE_CONTROL, { val: 1 })
    }

    var spinRight = () => window['SPACE'](ActFoc.SPIN_RIGHT_FOCUS, { idx: 'foc00' })
    var spinLeft = () => window['SPACE'](ActFoc.SPIN_LEFT_FOCUS, { idx: 'foc00' })
    var forward = () => window['SPACE'](ActFoc.FORWARD_FOCUS, { idx: 'foc00' })
    var backward = () => window['SPACE'](ActFoc.BACKWARD_FOCUS, { idx: 'foc00' })

    useEffect(() => {

        var animate = async () => {
            var bit = await window['CONTROL'](ActCtl.UPDATE_CONTROL, {})

            var now = bit.ctlBit.dat.now;
            var clrLstSize = bit.ctlBit.dat.colorListSize

            setForm(now.frm)
            setSecond(now.sec)
            setMinute(now.min)
            setHour(now.hrs)
            setColorListSize(clrLstSize)

            //requestAnimationFrame(animate);
        }

        setFadein('fade-in')

        //window.location.href = "test/pixel"
        var intervalId = setInterval(animate, 42)

        //requestAnimationFrame(animate);

        return () => {
            clearInterval(intervalId);
        };



    }, [])



    var testPage = async () => {
        window.location.href = './test'
    }


    return (

        <div >

            <Container className={fadeIn} size="sm" p={0} style={{ backgroundColor: '#ffff00', minHeight: '100vh', color: '#000' }}>

                <Space h="md" />

                <Grid>
                    <Grid.Col span={1}>
                    </Grid.Col>
                    <Grid.Col span={8}>

                        <Title size="xs">
                            {form}
                        </Title>

                    </Grid.Col>
                    <Grid.Col span={2}>

                        <Title size="xs">
                            Colors {colorListSize}
                        </Title>

                    </Grid.Col>

                </Grid>

                <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #00ff00' }}>

                    <Box style={{
                        width: '960px',
                        height: '112px',
                        position: 'relative',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        overflow: "hidden"
                    }}>

                        <div id='surface00' />

                    </Box>
                </Box>

                <Tabs defaultValue="clock" color="green">

                    <Tabs.Panel value="gallery">

                        <Box p={5} h={130}>

                            <Stack gap="xs">

                                <Button size='xs' radius="xl" color='green' fullWidth onClick={forward} >
                                    Forward
                                </Button>

                                <Grid>
                                    <Grid.Col span={5}>
                                        <Button color='green' fullWidth size='xs' radius="xl" onClick={spinLeft} >
                                            Spin Left
                                        </Button>
                                    </Grid.Col>
                                    <Grid.Col span={2}>
                                        <Button size='xs' radius="xl" color='green' fullWidth onClick={backward} >
                                            Backward
                                        </Button>
                                    </Grid.Col>
                                    <Grid.Col span={5}>
                                        <Button size='xs' radius="xl" color='green' fullWidth onClick={spinRight} >
                                            Turn Right
                                        </Button>
                                    </Grid.Col>
                                </Grid>


                                <Grid >
                                    <Grid.Col span={3}>
                                        <Button color='yellow' fullWidth size='xs' onMouseDown={secondsAction} onMouseUp={secondsRelease} >
                                            Apply Pigment
                                        </Button>
                                    </Grid.Col>

                                    <Grid.Col span={3}>
                                        <Button size='xs' color='yellow' fullWidth onMouseDown={minutesAction} onMouseUp={minutesRelease} >
                                            Ponder
                                        </Button>
                                    </Grid.Col>

                                    <Grid.Col span={3}>
                                        <Button size='xs' color='yellow' fullWidth onMouseDown={hoursAction} onMouseUp={hoursRelease} >
                                            Suffer
                                        </Button>
                                    </Grid.Col>

                                    <Grid.Col span={3}>
                                        <Button size='xs' color='yellow' fullWidth onMouseDown={hoursAction} onMouseUp={hoursRelease} >
                                            Display Painting
                                        </Button>
                                    </Grid.Col>

                                </Grid>

                            </Stack>

                        </Box>

                    </Tabs.Panel>

                    <Tabs.Panel value="clock">

                        <Box p={50} h={130}>

                            <Stack gap="xs" >

                                <Grid>
                                    <Grid.Col span={3}>
                                        <Button size='xs' color='green' fullWidth onClick={daysAction}  >
                                            Days
                                        </Button>
                                    </Grid.Col>
                                    <Grid.Col span={3}>
                                        <Button size='xs' color='green' fullWidth onClick={hoursAction}  >
                                            Hours
                                        </Button>
                                    </Grid.Col>
                                    <Grid.Col span={3}>
                                        <Button size='xs' color='green' fullWidth onClick={minutesAction} >
                                            Minutes
                                        </Button>
                                    </Grid.Col>
                                    <Grid.Col span={3}>

                                        <Button color='green' fullWidth size='xs' onClick={secondsAction} >
                                            Seconds
                                        </Button>
                                    </Grid.Col>
                                </Grid>


                            </Stack>

                        </Box>

                    </Tabs.Panel>

                    <Tabs.Panel value="settings">

                        <Box p={12} h={130}>
                        </Box>

                    </Tabs.Panel>

                    <Divider color='green' />


                    <Tabs.List>

                        <Tabs.Tab value="clock" leftSection={<IconHourglassLow size={12} />}>
                            Clock
                        </Tabs.Tab>

                        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
                            Play
                        </Tabs.Tab>

                        <Tabs.Tab value="settings" leftSection={<IconSettings size={12} />}>
                            Settings
                        </Tabs.Tab>
                    </Tabs.List>

                </Tabs>

                <Stack gap="xs">
                    <Divider color='green' />
                    <TaskCard />
                    <Space h="md" />
                    <TaskCard />
                    <Space h="md" />
                    <TaskCard />
                    <Space h="md" />
                    <TaskCard />
                </Stack>

            </Container>

            <Affix position={{ bottom: 20, right: 20 }}>
                <Text size='xs'>Version 0.0.2</Text>
            </Affix>

        </div>


    );





}