import TaskCard from './TaskCard';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
  tasks: string[];
  colId: string;
};

const Column = ({ tasks, colId }: Props) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Draggable draggableId={task} index={index} key={task}>
          {(provided) => (
            <div
              className="mb-3"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TaskCard content={task} />
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default Column;
