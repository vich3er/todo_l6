import {FC, useState} from "react";


interface TodoFormProp {
    addTask: (task: string) => void;
}
 export const yellowBtn = "bg-amber-300 rounded-2xl p-1 px-2"

const TodoForm: FC<TodoFormProp> = ({addTask}) => {

    const [text, setText] = useState<string>('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        addTask(text);
        setText('');
    };


    return (
        <form  className={'flex gap-4 w-[700px]'} onSubmit={handleSubmit}>
            <input className={'  outline-amber-300 outline-2 rounded-2xl p-1 px-2 w-[100%] '}  placeholder={'Напишіть завдання'} type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button className={yellowBtn} type={'submit'}>Додати</button>
        </form>
    );
};

export default TodoForm;