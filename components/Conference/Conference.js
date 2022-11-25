import Option from "../Option/Option";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SelectedDetails from "../SelectedDetails/SelectedDetails";

const Conference = ({ data }) => {
  const [items, setItems] = useState(Object.keys(data));
  const [selected, setSelected] = useState(items[0]);
  const [selectedDetails, setSelectedDetails] = useState([]);

  useEffect(() => {
    setSelectedDetails(data[selected]);
  }, [selected]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
  };

  return (
    <>
      <h2 className="font-bold text-4xl mb-4 mt-16">Conference info </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        <div className="col-span-1">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <div
                  className="flex flex-col gap-4"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {items.map((item, index) => (
                    <Draggable
                      key={index}
                      draggableId={"item" + index} // This must be a unique string
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Option
                            name={item}
                            selected={selected}
                            setSelected={setSelected}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="md:col-span-2 bg-gray-100 rounded-lg p-2 md:p-10 flex flex-col gap-4 md:max-h-screen overflow-y-scroll">
          {selectedDetails.map((item, index) => (
            <SelectedDetails
              key={index}
              name={item?.name || item?.location?.name}
              about={item?.about || item?.location?.about}
              firstName={item?.firstName}
              lastName={item?.lastName}
              image={item?.image?.url}
              day={item?.day}
              company={item?.company || item?.location?.city}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Conference;
