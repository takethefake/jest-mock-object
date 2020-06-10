import * as React from "react";
import config from "./config";

export default function App() {
  return (
    <div className="App">
      {config.greet ? <h1>Hello user</h1> : <h1>Bye user</h1>}
    </div>
  );
}
