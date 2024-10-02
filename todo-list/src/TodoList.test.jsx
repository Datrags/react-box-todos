import React from "react";
import { render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom"
import TodoList from "./TodoList";

it("should render without crashing", () => {
    render(<TodoList></TodoList>);
});

it("should match snapshot", () => {
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
});
it("should add a todo", () => {
    const todoList = render(<TodoList/>);
    fireEvent.click(todoList.getByText("Submit"));
    let remBtn = todoList.getByText("x");
    expect(remBtn).toBeInTheDocument();
})

it("should have a working delete feature", () => {
    const todoList = render(<TodoList/>);
    fireEvent.click(todoList.getByText("Submit"));
    let remBtn = todoList.getByText("x");
    expect(remBtn).toBeInTheDocument();
    fireEvent.click(remBtn)
    expect(remBtn).not.toBeInTheDocument();
})