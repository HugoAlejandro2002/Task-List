import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form } from "./components/Form/Form";

function App() {
    const [count, setCount] = useState(0);

    return (
        <main className="container mx-auto bg-slate-400 grid gap-2 p-3">
            <Form />
        </main>
    );
}

export default App;
