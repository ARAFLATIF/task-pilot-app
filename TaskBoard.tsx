import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import Column from './Column';
import { useState } from 'react';

const initialData = {
  'To Do': ['Design UI', 'Write Docs'],
  'In Progress': ['Build Components'],
  'Done': ['Setup Project'],
};

const TaskBoard = () => {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;
    const task = columns[sourceCol][source.index];

    if (sourceCol === destCol) {
      const updated = [...columns[sourceCol]];
      updated.splice(source.index, 1);
      updated.splice(destination.index, 0, task);
      setColumns({ ...columns, [sourceCol]: updated });
    } else {
      const srcTasks = [...columns[sourceCol]];
      const destTasks = [...columns[destCol]];
      srcTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, task);
      setColumns({ ...columns, [sourceCol]: srcTasks, [destCol]: destTasks });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {Object.entries(columns).map(([colName, tasks]) => (
          <Droppable droppableId={colName} key={colName}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-white shadow-md rounded-md p-4 w-72"
              >
                <h2 className="text-xl font-semibold text-center mb-3">{colName}</h2>
                <Column tasks={tasks} colId={colName} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
