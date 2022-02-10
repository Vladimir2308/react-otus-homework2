import React from 'react';
import './item.css';

interface ComponentProps {
  onclickItemToField: (order_num: number) => void;
  order_num: number;
  display_num: number | null;
}
//
// export default function Item(props: ComponentProps): JSX.Element {
//   return (
//     <div
//       className="Item"
//       id={'' + props.order_num}
//       onClick={() => props.onclickItemToField(props.order_num)}
//       style={{
//         backgroundColor: props.display_num === 1 ? 'red' : 'blue',
//       }}
//     >
//       {props.display_num}
//     </div>
//   );
// }

const Item = React.memo((props: ComponentProps) => (
  <div
    className="Item"
    id={'' + props.order_num}
    // onClick={() => props.onclickItemToField(props.order_num)}
    style={{
      backgroundColor: props.display_num === 1 ? 'red' : 'blue',
    }}
  >
    {/*{props.display_num}*/}
  </div>
));

export default Item;
