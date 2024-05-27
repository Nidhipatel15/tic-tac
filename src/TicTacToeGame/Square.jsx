import React from "react";

const Square = (props)=>{
    return (
        <div 
            onClick={props.onClick}
        style={{border:"1px solid", 
        hight:"100px",
        width:"60%",
        display:"flex",
        justifyContent:'center',
        alignItems:"center"
    }}
        className="square">
            <h5>{props.value}</h5>
        </div>
    );
};
export default Square