import React, { useEffect, useState } from "react";
import {fetchColors} from '../helpers/fetchColors' 

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(()=>{

    const boop = async () => {
      const res = await fetchColors()
      setColorList(res)
    }

    boop()

  },[])

  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
