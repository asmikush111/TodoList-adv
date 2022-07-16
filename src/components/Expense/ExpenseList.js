import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
function ExpenseList(props)
{
    if (props.expense.length===0) return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    return <ul className='expenses-list'>
      {props.expense.map( (expenses) => (
        <ExpenseItem 
        key={expenses.id}
        title={expenses.title} 
        amount={expenses.amount} 
        date={expenses.date}>
        </ExpenseItem>
        ))
    }
    </ul>;

}

export default ExpenseList;