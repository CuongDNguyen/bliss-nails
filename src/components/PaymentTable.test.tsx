import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PaymentTable from "./PaymentTable";

jest.mock("../data/restFunctions", () => {

    return {
        getAllCountries: () => {
            return Promise.resolve({
                status: 200,
                data: ["a", "b", "c"]
            })
        }
    }
})

test("countries are loaded when component is rendered", async () => {
    render(
        <BrowserRouter>
            <PaymentTable />
        </BrowserRouter>
    );

    //role comes from aria in HTML, design for accessibility
    jest.setTimeout(2000);
    const options = await screen.findAllByRole("option");
    expect(options).toHaveLength(4);
})

test("The word orderId appears on screen", () => {

    render(
        <BrowserRouter>
            <PaymentTable />
        </BrowserRouter>
    );
    const paymentEntry = screen.queryByText("orderId");
    expect(paymentEntry).toBeInTheDocument();
})