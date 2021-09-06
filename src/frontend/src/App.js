import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button } from '@material-ui/core';


function App() {
  const [data, setData] = React.useState(null);


    const sayHello = () => {
        console.log("hello");
    }

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              <p>{!data ? "Loading..." : data}</p>
              <Button color="primary" onClick={sayHello()} >Hello World</Button>;
      </header>
    </div>
  );
}


export default App;