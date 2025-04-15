import {FC} from "react";
import {Task} from "../models/Task.ts";



interface TodoItemProps {
    deleteTask: (id:number)=> void;
    toggleTask: (id:number)=> void;
    task: Task;

}

const TodoItem:FC<TodoItemProps> = ({deleteTask, task, toggleTask}) => {
// const completed = "bg-"
//     const uncompleted =
//     const redBtn =!task.completed? "bg-red-600 rounded-2xl p-1 px-2": "bg-red-100 rounded-2xl p-1 px-2 text-black"
    const redBtn =  "bg-red-600 rounded-2xl p-1 px-2"
const yellowBtn = !task.completed?"bg-amber-300 rounded-2xl p-1 px-2": "bg-amber-100 rounded-2xl p-1 px-2 "
    const divBg = !task.completed?" bg-gray-800": " bg-gray-300"
    return (
        <div className={'w-[700px] p-1   flex items-center justify-between rounded-2xl text-white' + divBg }>
            <p className="px-1 w-[400px] break-words whitespace-pre-wrap">
                {task.task}
            </p>

            <div className={'flex gap-4'}>
               <button className={redBtn}  onClick={()=>deleteTask(task.id)}>Видалити</button>
               <button  className={ yellowBtn } onClick={()=>toggleTask(task.id)} >{!task.completed?"Зробити": "Відновити"}</button>
           </div>
        </div>
    );
};

export default TodoItem;