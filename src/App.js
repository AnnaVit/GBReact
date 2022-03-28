import logo from './logo.svg';
import './App.css';
import {Message} from "./components/Message/Message";

const name = 'Alex';


function App() {
    const foo = () => {
        alert('Hello');
    }
    return (
        <div className="App">
            <Message name={name} num={123+2} doSmth={foo}/>
        </div>
    );
}

export default App;

