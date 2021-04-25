import React from "react";

type typeButton = {
    description :string;
    onClick : React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function Button(props:typeButton){
    return <button onClick={props.onClick}>{props.description}</button>
}