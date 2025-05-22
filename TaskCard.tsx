type Props = {
  content: string;
};

const TaskCard = ({ content }: Props) => {
  return (
    <div className="bg-blue-100 hover:bg-blue-200 text-blue-900 px-4 py-2 rounded-md shadow">
      {content}
    </div>
  );
};

export default TaskCard;
