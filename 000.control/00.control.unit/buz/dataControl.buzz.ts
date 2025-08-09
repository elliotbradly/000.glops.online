
import * as ActClr from "../../act/color.action";
import { ControlModel } from "../control.model";
import ControlBit from "../fce/control.bit";
import State from "../../99.core/state";

var bit, val, idx, dex, lst, dat, src;

export const dataControl = (cpy: ControlModel, bal: ControlBit, ste: State) => {

  

  var colorList

  fetch('./data/color/000.color.name.json') // Example API endpoint
    .then(response => {
      if (!response.ok) { // Check if the response status is within the 200-299 range
        throw new Error(`HTTP error! Status: ${response.status}`); // Throw an error for bad responses
      }
      return response.json(); // Parse the JSON data from the response
    })
    .then(async (data) => {
      colorList = data;


      bit = await window['SOWER'](ActClr.OPEN_COLOR, { lst: colorList })
      cpy.colorListSize = bit.clrBit.val


      bit = await window['SOWER'](ActClr.BASKET_COLOR, {})

      bal.slv({ ctlBit: { idx: "data-control", val: cpy.colorListSize } });

    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error); // Handle errors
    });


  return cpy;
};
