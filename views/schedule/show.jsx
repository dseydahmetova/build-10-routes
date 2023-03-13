import React from "react";

export default function Show(props) {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/css/main.css" />
            <div className="container">
                <h1>{props.day.day}</h1>
                {props.day.subjects.map(subject => 
                    <li> {subject}</li>
                )}
                <div className="btn-group">
                    <a href="/schedules" className="btn">Back</a>
                </div>
            </div>
        </>
    )
}