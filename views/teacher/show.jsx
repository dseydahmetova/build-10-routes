import React from "react";

export default function Show(props){
    return(
        <>
        <link rel="stylesheet" type="text/css" href="/css/main.css" />
        <div className="container">
            <h1>{props.teacher.name}{' '}{props.teacher.last_name}</h1>
            {props.teacher.subject.map(subject =>
                <ul>
                    <li key={props.teacher.id}>{subject}</li>
                </ul>
            )}
            <div className="btn-group">
                <a href="/teachers" className="btn">Back</a>
            </div>
        </div>
    </>
    )
}