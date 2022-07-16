import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
function NewExpense(props)
{
    const [isEditing,setIsEditing]=useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    const editingHandler = () => {
        setIsEditing(true);
    }
    const stopeditingHandler = () => {
        setIsEditing(false);
    }
   return <div className="new-expense">
       {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopeditingHandler}></ExpenseForm>}
   </div>;
}

export default NewExpense;