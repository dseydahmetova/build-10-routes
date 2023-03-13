import React from "react";

export default function Show(props) {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/css/main.css" />
            <div className="container">
                <h1>Course Details</h1>
                <ul>
                    <li>{props.course.name}</li>
                    <li>Duration: {props.course.duration}</li>
                </ul>
                <div className="btn-group">
                    <a href={`/courses/${props.course.id}/edit`} className="btn">Edit info</a>
                    <a href="/home" className="btn">Home</a>
                </div>
            </div>
        </>
    )
}