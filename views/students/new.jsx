import { text } from "express";
import React from "react";

function New() {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/css/main.css" />
            <div className="container">
                <h1> Add New Student</h1>
                <form action="/students" method="POST" className="login">
                    <label>First name:
                        <input type="text" name="name" />
                    </label>
                    <label>Last name:
                        <input type="text" name="last_name" />
                    </label>
                    <label>Cell:
                        <input type="text" name="cell" />
                    </label>
                    <button className="btn" type="submit">Add</button>
                </form>
            </div>
        </>
    )
}

export default New