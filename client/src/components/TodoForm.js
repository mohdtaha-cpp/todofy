import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";


/**
 * The component adds the tasks entered by the users into
 * the ToDo, which are stored and shown in the UI.
 * 
 * @returns {JSX.Element} The ToDo form for adding the tasks
 */
const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className="form mt-12">
            <div class="mb-2">
                <label for="email" class="block mb-2 text-sm md:text-xl font-medium text-gray-900">Enter the task</label>
                <div className="flex items-center justify-center gap-5">
                    <input placeholder="E.g. Market at 6PM"
                        className="input"
                        onChange={onInputChange}
                        value={text} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    <button type="button" onClick={onFormSubmit} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">ADD</button>
                </div>
            </div>
        </form>
    )
}

export default TodoForm;
