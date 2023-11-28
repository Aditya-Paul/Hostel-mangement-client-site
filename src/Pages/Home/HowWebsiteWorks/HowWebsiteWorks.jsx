import React from 'react';

const HowWebsiteWorks = () => {
    return (
        <div className='bg-pink-100'>
            <div className="collapse bg-pink-200">
                <input type="radio" name="my-accordion-1" checked="checked" />
                <div className="collapse-title text-xl font-medium text-center">
                How a Website Works 
                </div>
            </div>
            <div className="collapse bg-pink-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                User Sends a Request
                </div>
                <div className="collapse-content">
                    <p>When a user enters a web address (URL) into their browser or clicks on a link, a request is sent to the server hosting the website. This request is typically made using the HTTP (Hypertext Transfer Protocol) or its secure variant, HTTPS.</p>
                </div>
            </div>
            <div className="collapse bg-pink-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                Server Processes the Request
                </div>
                <div className="collapse-content">
                    <p>The web server receives the request and processes it. The server may need to fetch data from a database, execute server-side code, or perform other tasks to generate the content requested by the user.</p>
                </div>
            </div>
            <div className="collapse bg-pink-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                Server Sends a Response
                </div>
                <div className="collapse-content">
                    <p>After processing the request, the server sends a response back to the user's browser. This response includes the HTML, CSS, JavaScript, and other assets needed to render the web page. The response is often structured in accordance with the client-server architecture.</p>
                </div>
            </div>
            <div className="collapse bg-pink-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                Browser Renders the Page
                </div>
                <div className="collapse-content">
                    <p>The user's browser receives the response and interprets the HTML, CSS, and JavaScript to render the web page. HTML provides the structure, CSS styles the page, and JavaScript adds interactivity and dynamic behavior. The browser may need to make additional requests for images, stylesheets, scripts, or other resources referenced in the initial HTML.</p>
                </div>
            </div>
            <div className="collapse bg-pink-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                User Interacts with the Page
                </div>
                <div className="collapse-content">
                    <p>The user can now interact with the fully rendered web page. This interaction may involve clicking links, submitting forms, or engaging with dynamic elements created using JavaScript. Subsequent interactions trigger new requests to the server, and the process repeats.</p>
                </div>
            </div>
        </div>
    );
};

export default HowWebsiteWorks;