import { useState } from "react";

function App() {
    const EMPTY = "";
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => setToDo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === EMPTY) return;
        setToDos((cur) => [toDo, ...cur]);
        setToDo(EMPTY);
    };
    return (
        <div>
            <h1>ToDos({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={toDo}
                    onChange={onChange}
                    placeholder="Write ToDo"
                />
                <button>add ToDo</button>
            </form>
            <hr />
            <ul>
                {toDos.map((element, idx) => (
                    <li key={idx}>{element}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
