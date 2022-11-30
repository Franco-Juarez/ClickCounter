import React from "react"; 

function Btn( {text, ifClickBtn, clickFunction} ) {
    return (
        <button
        className={ ifClickBtn ? "clickBtn" : "resetBtn" }
        onClick={clickFunction}>
        {text}
        </button>
    )
}

export default Btn;