import axios, { AxiosPromise } from "axios"

export interface Payment {
    id: number,
    country: string,
    currency: string,
    date: string,
    orderId: string,
    taxCode: number,
    taxRate: number,
    type: string,
    amount: number
}

export const getAllCountries = async () => {
    const countryRequest : AxiosPromise<string[]> = axios({
        url: "http://localhost:8080/api/country",
        method: "GET",
        headers: {"Accept" : "application/json"}
    })

    const response = await countryRequest;

    return response;
}

export const getAllPayments = async () => {
    return axios({
        url: "http://localhost:8080/api/payment",
        method: "GET",
        headers: {"Accept" : "application/json"}
    })
}

export const getAllPaymentsForCountry = async (country: string) => {
    return axios({
        url: `http://localhost:8080/api/payment?country=${country}`,
        method: "GET",
        headers: {"Accept" : "application/json"}
    })
}

export const addNewPayment = (payment: Payment) => {
    return axios({
        url: `http://localhost:8080/api/payment`,
        method: "POST",
        headers: {"Accept": "application/json", "Content-Type" : "application/json"},
        data: payment
    })
}