import './SearchByOrderId.css'

const SearchByOrderId = () => {
    return <div className="search-order-id-div">
        <label className="search-order-id-label" htmlFor="orderId">Order Id:</label> 
        <input id="orderId" type="text"/> 
        <button>Search</button>
    </div>
}

export default SearchByOrderId;