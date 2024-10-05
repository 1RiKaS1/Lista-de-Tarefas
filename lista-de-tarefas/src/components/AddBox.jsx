import React from 'react';
//Biblioteca
import AddCircleIcon from '@mui/icons-material/AddCircle';
//Css
import "../css/AddBox.css"

export default function AddBox({ openModal }){
    return(
        <div className="addBox_background" onClick={openModal}>
            	<button><AddCircleIcon>add_circle</AddCircleIcon></button>
        </div>
    )
}