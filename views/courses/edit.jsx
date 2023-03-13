import { text } from "express";
import React from "react";

function Edit(props) {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/css/main.css" />
            <div className="container">
                <h1> Edit Course </h1>
                <form action="/courses"  className="login">
                    <label>name:
                        <input type="text" name="name" value={props.course.name}/>
                    </label>
                    <label>duration:
                        <input type="text" name="last_name" value={props.course.duration}/>
                    </label>
                    
                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Edit