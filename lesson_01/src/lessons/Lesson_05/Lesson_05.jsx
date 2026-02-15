import { useState } from "react";
import { v4 } from "uuid";

import Button from "../../components/Button/Button";

import "./styles.css";

function Lesson_05() {
  const [order, setOrder] = useState([]); 

  const addMenuElement = (menuEl) => {
    setOrder((prevValue) => {
      return [...prevValue, menuEl];
    });
  };
  const finalOrder = order.map((orderEl) => {
    return <li key={v4()} className="order_item">{orderEl}</li>;
  });
const buttonNames = [
  "Burger", 
  "Fries", 
  "Cola", 
  "Salad", 
  "Ketchup", 
  "Ice-Cream"];

  return (
    <div className="lesson_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">
          {buttonNames.map((buttonName) => {
            return (
              <Button
                key={v4()}
                name={buttonName}
                onClick={() => addMenuElement(buttonName)}
              />
            );
          })}
        </div>
      </div>

      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">{finalOrder}</ol>
      </div>
    </div>
  );
}

export default Lesson_05;
