import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingCart from './shoppingCart';

describe("App Component", () => {
    it("renders correct counter", () => {
        const { container } = render (<ShoppingCart />); 
        expect(container).toMatchSnapshot();
    });

    it("renders 10 after each item is increased by one", () => {
        render(<ShoppingCart />); 
        const button = screen.getAllByRole("button");

        for (let i of button) {
            userEvent.click(i);
        }

        expect(screen.getByTestId('x').textContent).toMatch(/Items In Cart: 10/i)
    })
})