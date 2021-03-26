import React from "react";
import { act, render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";


import {fetchColors as mockFetch} from '../helpers/fetchColors' 
jest.mock('../helpers/fetchColors')



let colors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  }]



test("Renders BubblePage without errors", () => {
  // Finish this test
  
  act(()=>{
    mockFetch.mockResolvedValueOnce(colors)
    render(<BubblePage/>)
   })
 
});




test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test

  act(()=>{
    mockFetch.mockResolvedValueOnce(colors)
    render(<BubblePage/>)
   })

  


  



});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading