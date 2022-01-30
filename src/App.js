import './App.css';
import data from './Data';
import Singlequestion from './Singlequestion';
import { useState } from 'react';
function App() {
  const [questions] = useState(data);
  //console.log(questions);
  return (<div className='bg pb-5'><br/>
    <div className='container bg-info rounded' >
      <div className='row'>
        <div className='col-md-3'>
          <h1 className='App rounded'>Question and Answer</h1>
        </div>
        <div className='col-md-7'>
          {
            questions.map((question) => {
              return (
                <Singlequestion key={question.id}{...question} />
              )
            })
          }
        </div>
      </div>
    </div></div>
  );
}

export default App;
