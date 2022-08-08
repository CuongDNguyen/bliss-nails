const PaymentRow = (props: PaymentRowProps) => {
    return <tr>
        <td>{props.id}</td>
        <td>{props.orderId}</td>
        <td>{props.date}</td>
        <td>{props.country}</td>
        <td>{props.currency}</td>
        <td>{props.amount}</td>
        </tr>
}

type PaymentRowProps = {
    id: number,
    orderId: string,
    date: string,
    country: string,
    currency: string,
    amount: number
}

export default PaymentRow;