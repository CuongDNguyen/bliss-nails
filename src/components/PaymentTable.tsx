import PaymentRow from "./PaymentRow";
import './PaymentTable.css';
import { getAllCountries, getAllPayments, getAllPaymentsForCountry, Payment } from '../data/restFunctions'
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PaymentsStoreType, replaceCountries } from "../store/store";
import { createModuleResolutionCache } from "typescript";

const PaymentTable = () => {

    const [loading, setLoading] = useState(true);
    const [payments, setPayments] = useState<Payment[]>([]);
    const [countries, setCountries] = useState<string[]>([]);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const country = searchParams.get("country");
    const [selectedCountry, setSelectedCountry] = useState(country || "");

    const countriesFromRedux : string[] = useSelector<PaymentsStoreType, string[]>(state => state.countries)

    const loadDataForCountry = (country: string) => {

        const paymentsPromise = getAllPaymentsForCountry(country);
        paymentsPromise.then(result => {
            setPayments(result.data);
            setLoading(false);
        })
    }

    useEffect(() => {
        if (countriesFromRedux.length > 0) {
            console.log("Using redux countries", countriesFromRedux);
            setCountries(countriesFromRedux);
            setLoading(false);
        } else {
            console.log("Using countries from server")
            const countryPromise = getAllCountries();
            countryPromise.then(result => {
                setCountries(result.data);
                dispatch(replaceCountries(result.data))
                setLoading(false);
            })
        }
    }, [])

    useEffect( () => {
        if (country != null) {
            loadDataForCountry(country);
        }
    }, [])

    const changeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
        const countryIndex = event.currentTarget.selectedIndex;
        const country = countries[countryIndex - 1];
        setSelectedCountry(country);

        // change url to match country selected to save during refresh
        // useHistory in versions < 6 react-router-dom
        // navigate(`/find?country=${country}`);
        setSearchParams({"country" : country})

        const paymentsPromise = getAllPaymentsForCountry(country);
        paymentsPromise.then(result => {
            setPayments(result.data);
            setLoading(false);
        })

    };

    return (
        <Fragment>
           {
               !loading && <select value={selectedCountry} onChange={changeCountry}>
               <option>---select---</option>
               {
                   countries.map(country => <option key={country} value={country}>{country}</option>)
               }
           </select>
           } 
            <table className="payment-table">
                <thead className="payment-table-head">
                    <tr>
                        <th>id</th>
                        <th>orderId</th>
                        <th>date</th>
                        <th>country</th>
                        <th>currency</th>
                        <th>amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payments.map(payment =>
                            <PaymentRow key={payment.id} id={payment.id} orderId={payment.orderId} date={payment.date} country={payment.country}
                                currency={payment.currency} amount={payment.amount} />
                        )
                    }
                </tbody>
            </table>
            {
                loading && <p>Please wait... loading</p>
            }
        </Fragment>
    )
}

export default PaymentTable;