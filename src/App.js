import { useState } from 'react';
import './App.css';
import Displaywatch from './Components/Displaywatch';
import Stopwatch from './Components/Stopwatch';

function App() {
  const [time, setTime] = useState({})

  return (
    <div className='mainDiv'>
        Stopwatch
        <div className='subDiv'>
            <div className='stopWatch'>
                <Stopwatch />
                <Displaywatch />
            </div>
        </div>
    </div>
  );
}

export default App;
