import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/about-us" element={<h1>Hello</h1>} />
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<h1>NOT FOUND</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
