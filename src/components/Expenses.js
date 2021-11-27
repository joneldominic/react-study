import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

import "./Expenses.css";

function Expenses(props) {
  const items = props.items;

  return (
    <Card className="expenses">
      {items.map((expense, i) => {
        return (
          <ExpenseItem
            title={items[i].title}
            amount={items[i].amount}
            date={items[i].date}
          />
        );
      })} 
    </Card>
  );
}

export default Expenses;
