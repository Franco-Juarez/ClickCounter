import React from "react";

function Counter( {clicksNum} ) {
    return (
        <p className="counter">
            {clicksNum}
        </p>
    );
}

export default Counter;