import React from "react";
import "./App.css";

const reactStyles = {
  position: "relative",
  left: '20px',
  width: '60%',
  height: '60%'
};

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App" style={reactStyles}>
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;