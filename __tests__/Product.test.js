import React from "react";
import { shallow } from "enzyme";
import Product from "./Product";

describe("Product component", () => {
  const product = {
    id: 1,
    name: "Test Product",
    image: "test-image.jpg",
    price: 10.99,
    category: "Test Category",
  };

  it("renders without crashing", () => {
    shallow(<Product {...product} />);
  });

  it("displays the product name correctly", () => {
    const wrapper = shallow(<Product {...product} />);
    const productName = wrapper.find("h3").text();

    expect(productName).toBe(product.name);
  });

  it("displays the product price correctly", () => {
    const wrapper = shallow(<Product {...product} />);
    const productPrice = wrapper.find(".card-data--price").text();

    expect(productPrice).toBe(product.price.toString());
  });
});
