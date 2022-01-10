import { useState, useEffect } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState("");
    const onClick = () => setCounter((cur) => cur + 1);
    const onChange = (event) => setText(event.target.value);
    console.log("Always Renderd");
    useEffect(() => {
        console.log("only once");
    }, []);
    useEffect(() => {
        console.log("only counter");
    }, [counter]);
    useEffect(() => {
        console.log("only text");
    }, [text]);
    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <p>{counter}</p>
            <button onClick={onClick}>add Count</button>
        </div>
    );
}

export default App;
