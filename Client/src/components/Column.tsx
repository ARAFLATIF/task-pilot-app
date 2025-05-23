import TaskCard from './TaskCard';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
  tasks: any[];
  colId: string;
};

const Column = ({ tasks, colId }: Props) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Draggable draggableId={task._id} index={index} key={task._id}>
          {(provided) => (
            <div
              className="mb-3"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TaskCard content={task.content} />
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default Column;
