import React,{ useState } from 'react';
import './Expense.css';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
function Expense(props)
{   
    const [filteredYear,setFilteredYear]=useState('2018');
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
    const filteredExpenses =props.expense.filter(expense => 
      { return expense.date.getFullYear().toString()===filteredYear; });

    
    return ( <Card className="expenses">
    <ExpenseFilter selected={filteredYear}  onChangeFilter={filterChangeHandler}></ExpenseFilter>
    <ExpenseChart expenses={filteredExpenses}/>
    <ExpenseList expense={filteredExpenses}></ExpenseList>
    </Card>);  
}
export default Expense;