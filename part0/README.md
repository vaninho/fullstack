Browser->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
Server->>Browser: Response, redirect /notes
Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
Server->>Browser: HTML code
Browser->>Server: HTTP GET main.css
Server->>Browser: main.css
Browser->>Server: HTTP GET installHooks.js
Server->>Browser: installHooks.js
Browser->>Server: HTTP GET main.js
Server->>Browser: main.js
Note right of Browser: Browser execute javascript and requests the data.
Browser->>Server: HTTP GET data.json
Server->>Browser: Data in json format
Browser->>Server: HTTP GET favicon.ico
Server->>Browser: favicon.ico
Note right of Browser: Browser shows the /notes page with new entry.
