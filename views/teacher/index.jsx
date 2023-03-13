import React from "react";

export default function Index(props){
    return(
        <>
        <link rel="stylesheet" type="text/css" href="/css/main.css" />
        <div className="container">
            <h1>Teachers List</h1>
            {props.teachers.map(teacher =>
                <ul>
                    <a href={`/teachers/${teacher.id}`}> 
                    <li key={teacher.id}>{teacher.name}{' '}{teacher.last_name}</li></a>
                </ul>
            )}
            <div className="btn-group">
                <a href="/home" className="btn">Home</a>
            </div>
        </div>
    </>
    )
}