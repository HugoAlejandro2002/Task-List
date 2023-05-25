import "./App.css";
import { IconButton } from "./components/IconButton";
import AddImg from "./assets/add.svg"

function App() {
  return (
    <>
      <div className="absolute right-3 bottom-3 w-10 h-10">
        <IconButton src={AddImg} onClick={()=>{console.log("Add Tarea")}}/>
      </div>
    </>
  );
}

export default App;
