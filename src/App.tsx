import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaymentHeader from './components/PaymentHeader';
import SearchByOrderId from './components/SearchByOrderId';
import PaymentTable from './components/PaymentTable';

function App() {
  return (
    <div className="App">
      <PaymentHeader />
      <SearchByOrderId />
      <PaymentTable />
    </div>
  );
}

export default App;
