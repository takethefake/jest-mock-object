import * as React from "react";
import { useConfig } from "./config";

export default function App() {
  const config = useConfig();
  console.log("config", config);
  return (
    <div className="App">
      {config.greet ? <h1>Hello user</h1> : <h1>Bye user</h1>}
    </div>
  );
}
