import React from "react";


export default function Button({ children, className, onClick }) {

    return (
        <button
            type="button"
            style={{ marginRight: "10px" }}
            className={className}
            onClick={onClick}>
            {children}
        </button>
    )
}

