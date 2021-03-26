import React from 'react';


const Color = ({color, editing, editColor, deleteColor,idParam}) => {
    const handleClick = (e) => {
        e.stopPropagation();
        deleteColor(color);
    }

    const colorClick = (e) => {
        e.stopPropagation();
        editColor(color)
        idParam(color.id)
        

    }

    return(<li data-testid="color" onClick={colorClick}>
        <span>
            <span className="delete" onClick={handleClick}>x</span> {` ${color.color}`}
        </span>
        
        <div 
            className="color-box"
            style={{ backgroundColor: color.code.hex }}
        />
    </li>);
}

export default Color;