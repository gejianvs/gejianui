// examples/ButtonExample.js
import React from "react";
import ReactDOM from "react-dom/client";
// import Button from "../components/Button";
// import Table from "../components/Table";
import { Table, Button } from "../../main";

const ButtonExample = () => {
  return (
    <div>
      <h2>Button Component Example</h2>
      <Button
        title="我是测试按钮41"
        onClick={() => {
          console.log("按钮被点击了");
        }}
      />
      <Table />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ButtonExample />
  </React.StrictMode>
);
