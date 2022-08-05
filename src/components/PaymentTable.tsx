import PaymentRow from "./PaymentRow";
import './PaymentTable.css';
import {getAllCountries} from '../data/restFunctions'
const PaymentTable = () => {

    getAllCountries();

    return <table className="payment-table">
        <thead className="payment-table-head">
        <th>id</th>
        <th>date</th>
        <th>country</th>
        <th>currency</th>
        <th>amount</th>
        </thead>
        <tbody>
        <PaymentRow id={1} date="2017-01-31" country="USA" currency="USD" amount={100} />

        </tbody>

    </table> 
}

export default PaymentTable;