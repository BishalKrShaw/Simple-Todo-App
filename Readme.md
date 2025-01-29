# Simple Todo Webapp

### NOTE
<p>The error ReferenceError: process is not defined occurs because Vite does not expose process.env directly like Create React App (CRA) does. Instead, environment variables in Vite should be prefixed with VITE_.</p>

```Javascript
// In Vite use below:
VITE_APP_URI=http://localhost:5000/

// In CRA use below:
REACT_APP_URI=http://localhost:5000/

// In order to import environment variable in VITE use this instead of "process.env"
let url = import.meta.env.VITE_APP_URI;

```