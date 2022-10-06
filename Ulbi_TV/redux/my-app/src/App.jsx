import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchUsers } from './store/userReducer';
import { addCashAction, getCashAction, asyncIncrementCreator, asyncDecrementCreator } from './store/cashReducer';
import { fetchCustomers } from './asyncActions/customers';
import './styles/App.css';

function App() {
  // чтобы изменить состояние, нужет dispatch
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cashReducer.cash)
  const customers = useSelector(state => state.customerReducer.customers)
  console.log(cash)


  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }
  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }


  const addCustomer = (name) => {
    if (!name) {
      return
    }
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer) => {
    console.log(customer)
    dispatch(removeCustomerAction(customer.id))
  }
  return (
    <div className={'app'}>
      <div style={{ frontSize:"3rem", marginBottom: '10' }}>Баланс: {cash}</div>
      <div style={{ display:"flex" }}>

        <button onClick={() => dispatch(asyncIncrementCreator())}>ИНКРЕМЕНТ++</button>
        <button onClick={() => dispatch(asyncDecrementCreator())}>ДИКРЕМЕНТ--</button>
        <button onClick={() => {dispatch(fetchUsers())}}>ПОЛУЧИТЬ ЮЗЕРОВ SAGA</button>

        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получать клиентов из базы</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer => 
            <div onClick={() => removeCustomer(customer)} style={{fontSize:"2rem", border:"1px solid black", padding:"10px", margin:"5"}}>{customer.name}</div>
          )}
        </div> 
        : 
        <div>
          Клиенты отсутствуют
        </div>}
    </div>
  );
}

export default App;
