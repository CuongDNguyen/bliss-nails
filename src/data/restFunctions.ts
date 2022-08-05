import axios, { AxiosPromise } from "axios"

export interface Payment {
    id: number,
    country: string,
    currency: string,
    date: string,
    orderId: string,
    taxCode: number,
    taxRate: number,
    type: string
}

export const getAllCountries = async () => {
    const countryRequest : AxiosPromise<string[]> = axios({
        url: "http://localhost:8080/api/country",
        method: "GET",
        headers: {"Accept" : "application/json"}
    })

    const response = await countryRequest;
    console.log(response.data); 
    return response.data;
}