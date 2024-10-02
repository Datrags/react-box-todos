import React from "react";
import { render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom"
import BoxList from "./BoxList";

it("should render without crashing", () => {
    render(<BoxList></BoxList>);
});

it("should match snapshot", () => {
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("should add a new box", () => {
    const boxList = render(<BoxList/>);
    fireEvent.click(boxList.getByText("Create New Box"));
    let remBtn = boxList.getByText("X");
    expect(remBtn).toBeInTheDocument();
})

it("should have a working delete feature", () => {
    const boxList = render(<BoxList/>);
    fireEvent.click(boxList.getByText("Create New Box"));
    let remBtn = boxList.getByText("X");
    expect(remBtn).toBeInTheDocument();
    fireEvent.click(remBtn)
    expect(remBtn).not.toBeInTheDocument();
})