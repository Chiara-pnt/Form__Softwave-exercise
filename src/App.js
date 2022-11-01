import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Trial from './components/Trial/Trial'; 
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='form-container'>
      <Header className='header' />
      <div className='trial-form'>
      <Trial />
      <Form className='form'/>
      </div>
      
      </div>
    </div>
  );
}

export default App;
