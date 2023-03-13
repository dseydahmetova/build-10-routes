import { text } from "express";
import React from "react";

function Edit(props) {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/css/main.css" />
            <div className="container">
                <h1> Edit Student </h1>
                <form action="/students"  className="login">
                    <label>First name:
                        <input type="text" name="name" value={props.student.name}/>
                    </label>
                    <label>Last name:
                        <input type="text" name="last_name" value={props.student.last_name}/>
                    </label>
                    <label>Cell:
                        <input type="text" name="cell" value={props.student.cell}/>
                    </label>
                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Edit