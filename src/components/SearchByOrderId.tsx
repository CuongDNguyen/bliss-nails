import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import './SearchByOrderId.css'

const SearchByOrderId = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const doSearch = () => {
        console.log(searchTerm)
        navigate(`/find/${searchTerm}`)

    }

    const {orderId} = useParams<string>();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.currentTarget.value);
    }

    useEffect(() => {
        if (orderId != null) {
            setSearchTerm(orderId);
        }
    })

    return (
        <div className="search-order-id-div">
            <label className="search-order-id-label" htmlFor="orderId">Order Id:</label>
            <input onChange={handleChange} value={searchTerm} id="orderId" type="text" />
            <button onClick={doSearch}>Search</button>
        </div>
    );
}

export default SearchByOrderId;