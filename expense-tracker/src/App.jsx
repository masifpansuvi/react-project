import React from 'react'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Expense from './components/Expense'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './Context/GlobalContext'

function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
