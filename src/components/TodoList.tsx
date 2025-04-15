import {FC} from "react";

import TodoItem from "./TodoItem.tsx";
import {Task} from "../models/Task.ts";




interface TodoListProps {
    deleteTask: (id: number)=> void;
    toggleTask: (id:number)=> void;
    tasks: Task[]
}

const TodoList:FC<TodoListProps> = ({deleteTask,  toggleTask, tasks}) => {



    return (
        <div className={ "h-[500px] overflow-y-auto  flex flex-col gap-4"}>
            {
                tasks.length>0?

                 tasks.map((task, i)=> <TodoItem key={i} deleteTask={deleteTask} toggleTask={toggleTask} task={task} />)
           :
                "Завдання відсутні"
            }
            
            </div>
    );
};

export default TodoList;