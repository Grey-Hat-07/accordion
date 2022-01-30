import React,{ useState} from 'react';
import './App.css';
import { Minus, Plus } from './Icons';
export default function Singlequestion(props) {
  const [showanswer, setshowanswer] = useState(false);
  return <div>
    <div className="card mt-3 mb-2 cardh" >
      <div className="card-header ">
       {
          showanswer ? <button className='floatright btn' onClick={() => setshowanswer(false)} ><Minus /></button> : 
          <button  className='floatright btn' onClick={() => setshowanswer(true)} ><Plus /></button>
       }
       <h3>{props.title}</h3>
       
      </div>
      <div className="card-body bg-secondary py-0">
          {
            showanswer ? <p>{props.answer}</p> : null
          }
      </div>
    </div>


  </div>;
}
