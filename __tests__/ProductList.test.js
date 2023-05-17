import React from "react";
import { render } from "@testing-library/react";
import { useFilterContext } from "../context/filter_context";
import ProductList from "../components/ProductList";
import GridView from "../components/GridView";
import ListView from "../components/ListView";

// Mock the useFilterContext hook
jest.mock("../context/filter_context", () => ({
  useFilterContext: jest.fn(),
}));

describe("ProductList component", () => {
  it("should render GridView when grid_view is true", () => {
    // Arrange: Mock the useFilterContext hook to return the required values
    useFilterContext.mockReturnValue({ filter_products: [], grid_view: true });

    // Act: Render the component
    const { getByTestId } = render(<ProductList />);

    // Assert: Check if GridView component is rendered
    expect(getByTestId("grid-view")).toBeInTheDocument();
  });

  it("should render ListView when grid_view is false", () => {
    // Arrange: Mock the useFilterContext hook to return the required values
    useFilterContext.mockReturnValue({ filter_products: [], grid_view: false });

    // Act: Render the component
    const { getByTestId } = render(<ProductList />);

    // Assert: Check if ListView component is rendered
    expect(getByTestId("list-view")).toBeInTheDocument();
  });
});
