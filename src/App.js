import React,{useState} from 'react';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const data=[
  {id:'e1',title:'Car Insurance',amount:297.67 ,date:new Date(2020,1,1)},
  {id:'e2',title:'Copy',amount:200.00 ,date:new Date(2022,1,2)},
  {id:'e3',title:'TV',amount:150.78 ,date:new Date(2020,1,3)},
  {id:'e4',title:'Desk',amount:290.6 ,date:new Date(2022,1,4)}
];

function App() {
  const [expenses,setExpenses]=useState(data);
  const addExpenseHandler = (expense) =>{
    setExpenses( (prevExpense) => {
    return [expense, ...prevExpense]; 
     });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense expense={expenses}></Expense>
    </div>
  );
}

export default App;
