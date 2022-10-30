import './App.css';
import CustomHookComponent from './CustomHookComponent';
import UseContextComponent from './UseContextComponent';
import UseEffectComponent from './UseEffectComponent';
import UseReducerComponent from './UseReducerComponent';
import UseRefComponent from './UseRefComponent';
import UseStateComponent from './UseStateComponent';

function App() {
  return (
    <div className='App'>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>Custom Hook Component</h1>
      <CustomHookComponent />
    </div>
  );
}

export default App;
