import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function ClickCounter() {
  const [clickNo, setClickNo] = useState(0);

  function onCountIncreaseClick() {
    setClickNo(clickNo + 1);
  }

  function onCountDecreaseClick() {
    setClickNo(clickNo - 1);
  }

  return (
    <>
      <div>ClickCounter</div>
      <div>click no.{clickNo} times</div>
      <Button variant="secondary" onClick={onCountDecreaseClick}>-1</Button>
      <Button variant="primary" onClick={onCountIncreaseClick}>+1</Button>
      <button type="button" class="btn btn-success" onClick={onCountIncreaseClick}>+1</button>
      <button type="button" class="btn btn-danger" onClick={onCountDecreaseClick}>-1</button>
    </>
  );
}
