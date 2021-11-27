import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense, i) => {
        return (
          <ExpenseItem
            title={props.items[i].title}
            amount={props.items[i].amount}
            date={props.items[i].date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
