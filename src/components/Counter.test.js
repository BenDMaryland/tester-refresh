import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {

    it("counter displays correct initial count", () => {
        render(<Counter initialCount={4} />);
        const countValue = screen.getByTestId("count").textContent;
        expect(countValue).toEqual('4')
    });

    it("Count should increment by one if the incremenet button is pushed", () => {
        render(<Counter initialCount={4} />);
        const incrementBttn = screen.getByRole("button", { name: "Increment" })
        fireEvent.click(incrementBttn)
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(5)

    })

    it("Count should be reset to original value", () => {
        render(<Counter initialCount={4} />);
        const resetButton = screen.getByRole("button", { name: "Reset" })
        const incrementBttn = screen.getByRole("button", { name: "Increment" })

        fireEvent.click(incrementBttn)
        const countValue1 = Number(screen.getByTestId("count").textContent);
        expect(countValue1).toEqual(5)

        fireEvent.click(resetButton)
        const countValue2 = Number(screen.getByTestId("count").textContent);
        expect(countValue2).toEqual(4)



    })

})


