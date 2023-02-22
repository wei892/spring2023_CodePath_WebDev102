

import './App.css';
import './compnonets/calender.jsx';
import Calendar from './compnonets/calender';

const App = () => {

  return (
    <div className="App">
      <h1> 
        TimeTable For Class
      </h1>
      <h2>
        Weekly Schedule
      </h2>
      <Calendar/>
      
    </div>
  )
}

export default App


