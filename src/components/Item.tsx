import React, { FC } from "react";
import "./item.css";

interface Props {
  onclickItemToField: any;
  order_num: number;
  display_num: number | null;
}

export default function Item(props: Props) {
  return (
    <div
      className="Item"
      id={"" + props.order_num}
      onClick={(e) => props.onclickItemToField(props.order_num)}
    >
      {props.display_num}
    </div>
  );
}
