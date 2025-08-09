import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import '@mantine/core/styles.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, MantineProvider } from '@mantine/core';

import { RouteTree } from "../router/RouteTree"

import { RouterProvider, createRouter } from '@tanstack/react-router'


import ControlBlock from '../base/control/block'
import TimeBlock from '../base/time/block'
import SpaceBlock from '../base/space/block'
import SowerBlock from '../base/sower/block'

import EarthBlock from '../base/earth/block'

import SolidBlock from '../base/solid/block'
import ShadeBlock from '../base/shade/block'



// Create a brutalist theme
const brutalistTheme = createTheme({
  imageRendering: 'pixelated',
  fontFamily: 'Courier New, monospace',
  headings: { fontFamily: 'Courier New, monospace' },
  colorScheme: 'dark',
  white: '#FFFF00'

})



const queryClient = new QueryClient();

const routeTree = RouteTree()
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <ControlBlock />
    <TimeBlock />
    <SpaceBlock />
    <SowerBlock />
    <EarthBlock />
    <ShadeBlock />
    <SolidBlock />

    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={brutalistTheme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
