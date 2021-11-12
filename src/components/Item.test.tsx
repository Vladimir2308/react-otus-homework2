import React from "react";
import { render, screen } from "@testing-library/react";

import Item from "./Item";

describe("Item test cases", () => {
  it("Item render correctly", () => {
    const onReset = jest.fn();
    let order_num = 999;
    let display_num = 888;
    let onclickItemToField = () => {};
    const { container } = render(
      <Item
        onclickItemToField={onclickItemToField}
        order_num={order_num}
        display_num={display_num}
      />
    );
    const cell = container.firstChild;
    expect(cell).not.toBeNull();
    if (!cell) return;
    expect(cell.textContent === "888");
    const element = screen.getByText(display_num);
    expect(Number(element.id) === order_num);
  });
});
