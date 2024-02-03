import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <h2>{props.title}</h2>
      <div className="expense_item_description">
        <div className="expense-item_price">Rs. {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
