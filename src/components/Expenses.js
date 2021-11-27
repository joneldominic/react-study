import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expenses;

  return (
    <div>
      {expenses.map((expense, i) => {
        return (
          <ExpenseItem
            title={expenses[i].title}
            amount={expenses[i].amount}
            date={expenses[i].date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
