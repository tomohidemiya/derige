import React from "react";
import { useAtom } from "jotai";
import { healthCheckResult } from "modules/api";
import "./App.css";
import Header from "components/common/header";

function App() {
  const [healthUrl] = useAtom(healthCheckResult);
  const handleOnClick = () => {
    alert(healthUrl.status === 200);
  };
  return (
    <div className="App">
      <Header />
      <button onClick={handleOnClick}>うんこ</button>
    </div>
  );
}

export default App;
