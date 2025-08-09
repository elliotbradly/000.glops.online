// ClockReadDisplay.tsx
"use client"; // If using Next.js App Router and this component has client-side interactions

import React, { useState } from 'react';
import { Button, Text, Box, Loader, Alert } from '@mantine/core';
import * as ActClk from "../../../001.time/03.clock.unit/clock.action"; // Adjust path as needed

const ClockReadDisplay = () => {
    const [data, setData] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasFetched, setHasFetched] = useState(false); // New state to track if fetch has been initiated

    const handleFetchData = async () => {
        setIsLoading(true);
        setError(null);
        setData(null);
        setHasFetched(true); // Set to true immediately on click

        try {
            if (typeof window !== 'undefined' && typeof window['TIME'] === 'function') {
                const bit = await window['TIME'](ActClk.READ_CLOCK, { idx: 'clk00' });
                setData(bit);
            } else {
                throw new Error("window['TIME'] function is not available.");
            }
        } catch (e: any) {
            setError(e.message || "An error occurred while fetching data.");
            console.error("Error fetching clock data:", e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box style={{ width: '100%' }}>
            {!hasFetched && ( // Only render the button if fetch has not been initiated
                <Button fullWidth variant="outline" color="black" onClick={handleFetchData} disabled={isLoading}>
                    {isLoading ? <Loader size="xs" /> : 'FETCH AND DISPLAY CLOCK READ'}
                </Button>
            )}

            {isLoading && hasFetched && ( // Show loader only after click and while loading
                <Box mt="md" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Loader />
                </Box>
            )}

            {error && hasFetched && ( // Show error only after fetch attempt
                <Alert title="Error" color="red" mt="md">
                    {error}
                </Alert>
            )}

            <Text c="dark" size="md" style={{ lineHeight: 1.6 }}>
                Read Clock
            </Text>

            {data && hasFetched && ( // Show data only after successful fetch attempt

                <Text c='green' size="md" style={{ lineHeight: 1.6 }}>
                    {JSON.stringify(data)}
                </Text>

            )}

            {/* Optional: Message if nothing is fetched yet and button is gone (e.g., initial state of a component designed to fetch once) */}
            {/* This might not be needed if the button click is the only way to get here */}
            {/* {!isLoading && !data && !error && hasFetched && (
        <Text mt="md" c="dimmed">Fetch initiated. No data or error to display yet.</Text>
      )} */}
        </Box>
    );
};

export default ClockReadDisplay;