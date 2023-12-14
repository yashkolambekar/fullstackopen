```mermaid
sequenceDiagram
    participant browser
    participant server

    browser>>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server>>browser: HTML 
    deactivate server

    browser>>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server>>browser: CSS
    deactivate server

    browser>>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server>>browser: Javascript
    deactivate server

    Note right of browser: Javascript file makes a GET request to the server

    browser>>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server>>browser: JSON
    deactivate server

    Note right of browser: Json data is processed and reflected in the HTML file by Javscript 

```