import Form from './components/Form';
import './App.scss';

function App() {
  return (
    <div className="App">
     <div className='container'>
      <div className='header'>
      <h1>
        Learn to code by watching others
      </h1>
      <p>
      See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
      but understanding how developers think is invaluable. 
      </p>
      <div className='form-container'>
      <div className='box'>
        Try it free 7 days then $20/mo. thereafter
      </div>
      <Form />
      </div>
      </div>
     </div>
    </div>
  );
}

export default App;
