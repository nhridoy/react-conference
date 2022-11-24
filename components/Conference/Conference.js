import Option from "../Option/Option";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { useState } from "react";
import { arrayMoveImmutable } from "array-move";

const SortableItem = SortableElement(({ value }) => <Option name={value} />);

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul className=" flex flex-col gap-4">
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

const Conference = () => {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems((items) => arrayMoveImmutable(items, oldIndex, newIndex));
  };

  return (
    <>
      <h2 className="font-bold text-4xl mb-4 mt-16">Conference info</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        <div className="col-span-1">
          <SortableList items={items} onSortEnd={onSortEnd} />
        </div>
        <div className="md:col-span-2"></div>
      </div>
    </>
  );
};

export default Conference;
