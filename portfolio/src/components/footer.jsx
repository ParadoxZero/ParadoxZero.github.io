import React from "react";

export function Footer(props) 
{
    return (
        <div id="footer">
            <span>
                {props.content}
            </span>
            <span>
            Background vector created by rawpixel.com
            </span>
        </div>
    );
}