import React, { useState } from "react";
import {
  AcademicCapIcon,
  CheckCircleIcon,
  ClipboardCheckIcon,
  ClipboardListIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDrakAndDropMutation } from "../../src/generated/graphql";
interface DndProspectivsetudentProps {
  waiting: any;
  Write: any;
  Interview: any;
  Uniform: any;
  Done: any;
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const DndProspectivsetudent: React.FC<DndProspectivsetudentProps> = ({
  waiting,
  Write,
  Interview,
  Uniform,
  Done,
}) => {
  const columnsFromBackend = {
    ["-"]: {
      name: "Waiting",
      icon: ExclamationCircleIcon,
      items: waiting ? waiting : [],
    },
    ["Writing Test"]: {
      name: "Writing Test",
      icon: ClipboardListIcon,
      items: Write ? Write : [],
    },
    ["Interview"]: {
      name: "Interview",
      icon: ClipboardCheckIcon,
      items: Interview ? Interview : [],
    },
    ["Uniform"]: {
      name: "Uniform",
      icon: AcademicCapIcon,
      items: Uniform ? Uniform : [],
    },
    ["Done"]: {
      name: "Done",
      icon: CheckCircleIcon,
      items: Done ? Done : [],
    },
  };

  const [, DndMutation] = useDrakAndDropMutation();
  const onDragEnd = async (result: any, columns: any, setColumns: any) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      const RestDnd = await DndMutation({
        id: result.draggableId,
        further_process: destination.droppableId,
      });
      if (RestDnd?.data?.ProspectiveStudentsProsessDrakAndDrop) {
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems,
          },
        });
      }
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div className="grid grid-flow-col">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column]) => (
          <div key={columnId}>
            <div className="p-2 justify-center bg-blue-800 text-white font-serif text-lg m-3 flex">
              {column.name} <column.icon className="h-7 ml-3" />
            </div>
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={classNames("relative mx-4 m-3")}
                >
                  {column?.items?.map((item: any, index: any) => (
                    <Draggable
                      key={item.prospective_students_id}
                      draggableId={item.prospective_students_id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white shadow-md p-5 m-3 border-b-4 border-blue-900 rounded-lg "
                        >
                          <div className="relative flex items-center justify-between text-sm mb-1">
                            <div className="right-0 flex items-left text-md text-center text-indigo-700 ">
                              {item.reg_code}
                            </div>
                            <div className="right-0 flex items-right text-blue-700">
                              {item.phone_number}
                            </div>
                          </div>
                          <div className="text-xl ">
                            {item.full_name}
                            <div className="relative flex items-center justify-between text-sm mt-1">
                              <div className="right-0 flex items-left">
                                {item.school_origin}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
};
export default DndProspectivsetudent;
