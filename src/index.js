import React from 'react';
import './index.css';
import ReactDOM  from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './Components/Counter';
import Counter2 from './Components/Counter2';





ReactDOM.render(<Counter2/>, document.getElementById('korzen'))



ReactDOM.render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>,
  document.getElementById('korzen2')
)
