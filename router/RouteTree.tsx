import IndexPage from '../page/000.index/page';
import TitlePage from '../page/001.title/page';
import ScenePage from '../page/002.scene/page';
import StationPage from '../page/005.station/page';

import TestPage from '../page/003.test/000.index/page';
import TestSolidPage from '../page/003.test/009.solid-test/page';
import TestEarthPage from '../page/003.test/008.earth-test/page';
import TestControlPage from '../page/003.test/007.control-test/page';
import TestSpacePage from '../page/003.test/005.space-test/page';
import TestTimePage from '../page/003.test/006.time-test/page';

import PlayPage from '../page/004.play/page';

import {
    Link,
    Outlet,
    RouterProvider,
    createRootRoute,
    createRoute,
    createRouter,
} from '@tanstack/react-router'

import React from "react";

import NavBar from "./NavBar"


const rootRoute = createRootRoute({
    component: () => (
        <>

            <div >

                <NavBar />

                <div style={{ position: 'absolute', left: 0, right: 0, marginInline: 'auto', width: 'fit-content' }} >
                    <Outlet />
                </div>

            </div>

        </>
    ),
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: function Index() {
        return (
            <IndexPage />
        );
    },
});

const titleRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/title",
    component: function Test() {
        return (
            <TitlePage />
        );
    },
});

const sceneRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/scene",
    component: function Lora() {
        return (
            <ScenePage />
        );
    },
});

const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/test",
    component: function Lora() {
        return (
            <TestPage />
        );
    },
});




const testEarthRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/test/earth",
    component: function Lora() {
        return (
            <TestEarthPage />
        );
    },
});


const testControlRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/test/control",
    component: function Lora() {
        return (
            <TestControlPage />
        );
    },
});

const testSpaceRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/test/space",
    component: function Lora() {
        return (
            <TestSpacePage />
        );
    },
});

const testTimeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/test/time",
    component: function Lora() {
        return (
            <TestTimePage />
        );
    },
});


const testSolidRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/test/solid",
    component: function Lora() {
        return (
            <TestSolidPage />
        );
    },
});



const playRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/play",
    component: function Lora() {
        return (
            <PlayPage />
        );
    },
});


const stationRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/station",
    component: function Lora() {
        return (
            <StationPage />
        );
    },
});




export var RouteTree = () => {

    var item = rootRoute.addChildren([
        indexRoute,
        titleRoute,
        sceneRoute,
        testRoute,
        testSolidRoute,
        testEarthRoute,
        testControlRoute,
        testSpaceRoute,
        testTimeRoute,
        playRoute,
        stationRoute,

    ]);

    return item

}

