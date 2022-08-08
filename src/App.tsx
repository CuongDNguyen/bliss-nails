import './App.css';
import PaymentHeader from './components/PaymentHeader';
import SearchByOrderId from './components/SearchByOrderId';
import PaymentTable from './components/PaymentTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewTransactionPage from './components/NewTransactionPage';
import HomePage from './components/HomePage';
import { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>

          <PaymentHeader />

          <Routes>
            <Route path="/find" element={
              <Fragment>
                <SearchByOrderId />
                <PaymentTable />
              </Fragment>
            } />

            <Route path="/find/:orderId" element={
              <Fragment>
                <SearchByOrderId />
                <PaymentTable />
              </Fragment>
            } />

            <Route path="/new" element={<NewTransactionPage />} />

            <Route path="/" element={<HomePage />} />

            <Route path="*" element={<h1>Sorry that page does not exist.</h1>} />
          </Routes>

        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
