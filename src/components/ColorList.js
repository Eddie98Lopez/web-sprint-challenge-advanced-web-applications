import React, { useState } from "react";
//import axios from "axios";
import Color from './Color'
import EditMenu from './EditMenu'
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors = [], updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [colorID,setColorID] = useState(null)

  const colorParam = (id) => {
    setColorID(id)
    console.log(colorID)
  }

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/colors/${colorID}`, colorToEdit)
      .then(res=>{
        console.log(res)
        axiosWithAuth().get('/colors')
          .then(res => {
            updateColors(res.data)
            setEditing(false)
          })
          .catch(err=> console.log(err))

        
      })
      .catch(err => console.log(err))

  };

  const deleteColor = color => {

    axiosWithAuth()
      .delete(`/colors/${color.id}`)
      .then(res => {
        updateColors(colors.filter(item => item !== color ))
        setEditing(false)
        
      })
      .catch(err => console.log(err))


  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => <Color key={color.id} editing={editing} idParam={colorParam} color={color} editColor={editColor} deleteColor={deleteColor}/>)}
      </ul>
      
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.