import { useState, useEffect } from "react";

function Hello() {
    useEffect(() => {
        console.log("created!");
        return () => console.log("destroyed!");
    }, []);
    return <h1>HelloWorld!</h1>;
}

/**
 *  clear up function 
    component가 없어지거나 사라질 때 따로 뭔가를 실행시키는 함수
    해당 함수를 통해 언제 create 되고  destroyed 되는지 확인할 수 있음.
 */

function App() {
    const [show, setShow] = useState(0);
    const onClick = () => setShow((cur) => !cur);
    return (
        <div>
            {show ? <Hello /> : null}
            <button onClick={onClick}>{show ? "disappear" : "show"}</button>
        </div>
    );
}

export default App;
