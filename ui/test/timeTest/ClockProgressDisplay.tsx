// ClockReadDisplay.tsx
"use client"; // If using Next.js App Router and this component has client-side interactions

import React, { useState } from 'react';
import { Button, Text, Box, Loader, Alert } from '@mantine/core';
import * as ActPrg from "../../../001.time/01.progress.unit/progress.action"; // Adjust path as needed

const ClockReadDisplay = () => {
    const [data, setData] = useState<any | null>(null); // Changed type to 'any' for direct data
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    // const [hasFetched, setHasFetched] = useState(false); // No longer strictly needed if button always shows

    const handleFetchData = async () => {
        setIsLoading(true);
        setError(null);
        setData(null); // Clear previous data on new fetch attempt
        // setHasFetched(true); // If you still want to track first fetch for other logic

        try {
            if (typeof window !== 'undefined' && typeof window['TIME'] === 'function') {
                const bit = await window['TIME'](ActPrg.UPDATE_PROGRESS, { idx: 'increment0', src:'clock0' });
                setData(bit); // Store the raw bit data
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
            <Button 
              fullWidth 
              variant="outline" 
              color="black" 
              onClick={handleFetchData} 
              disabled={isLoading}
              mb="md" // Add margin below button for spacing
            >
                {isLoading ? <Loader size="xs" /> : 'PROGRESS CLOCK'}
            </Button>
            
            {isLoading && ( // Show loader while loading, irrespective of hasFetched
                <Box mt="md" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Loader />
                </Box>
            )}

            {error && ( // Show error if an error occurred
                <Alert title="Error" color="red" mt="md">
                    {error}
                </Alert>
            )}

            {data && !isLoading && !error && ( // Show data only if not loading and no error
                <Text c='green' size="md" style={{ lineHeight: 1.6, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                    {JSON.stringify(data)} {/* Stringify with pretty print */}
                </Text>
            )}

        </Box>
    );
};

export default ClockReadDisplay;