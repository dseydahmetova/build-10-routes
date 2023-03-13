import React from "react";

function Index() {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/css/main.css" />
            <div className="container">
                <h1>About Page</h1>
                <div className="home-btn">
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut et dicta deleniti necessitatibus magni, consequatur iste inventore labore nihil illum ipsum dolor enim pariatur. Eius mollitia est excepturi ipsam rerum. 
                <a href="/about/more"> <span>Read more...</span></a>
                </p>
                </div>
                <div className="btn-group">
                    <a href="/home" className="btn">Back</a>
                    <a href="/contact" className="btn">Next</a>
                </div>
            </div>
        </>
    )
}

export default Index
