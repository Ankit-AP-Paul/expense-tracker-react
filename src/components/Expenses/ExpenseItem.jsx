import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <div className="expense_item_description">
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
