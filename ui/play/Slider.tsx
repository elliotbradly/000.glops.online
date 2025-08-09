import { IconGripHorizontal } from '@tabler/icons-react';
import { Slider } from '@mantine/core';
import classes from './SliderWhite.module.css';
import React, { useState } from 'react'; // Import useState

interface SliderWhiteProps {
    value: number;
    onChange: (newValue: number) => void;
    // You can include other SliderProps here if you want to pass them through
    // For example: label?: SliderProps['label'];
  }

export default function SliderWhite( { value, onChange } ) : SliderWhiteProps {
 
 
  return (
    <Slider
      classNames={classes}
      thumbChildren={<IconGripHorizontal size={20} stroke={1.5} />}
      // defaultValue={40} // defaultValue is for uncontrolled components. Use 'value' for controlled.
      value={value}         // Control the slider's value with the state variable
      onChange={onChange}    // Update the state when the slider value changes
      // Or use a custom handler: onChange={handleChange}
      label={null} // Mantine's Slider `label` prop can be a function (value) => React.ReactNode or null
                   // If you want to display the current value, you can do: label={(val) => val}
                   // Or keep it null if no label is desired.
    />
    // Optional: Display the current value for debugging or UI purposes
    // <div style={{ marginTop: 10 }}>Current Value: {value}</div>
  );
}