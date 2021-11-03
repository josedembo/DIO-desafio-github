import React from "react";

const Item = (props) => {

    return (
        <>
            <a href="/" className={props.className}>
                {props.children}
            </a>
        </>
    );
}

export default Item;