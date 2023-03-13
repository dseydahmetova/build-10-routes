import React from "react";

export default function Index(props) {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/css/main.css" />
            <div className="container">
                <h1>Schedule</h1>
                {props.schedule.map(item =>
                    <ul>
                        <a href={`/schedules/${item.id}`}> 
                        <li key={item.id}>{item.day}</li></a>
                    </ul>
                )}
                <div className="btn-group">
                    <a href="/home" className="btn">Home</a>
                </div>
            </div>
        </>
    )
}