import React, { useReducer } from 'react';
import './form.scss';


const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
      case "TOGGLE CONSENT":
        return{
          ...state, 
          hasConsented: !state.hasConsented,
        };
        default: return state;
  }
};


const initialFormState = {
  firstName:"",
  lastName:"",
  email: "",
  password: "",
  hasConsented: false
};


const Form = () => {

 const [formState, dispatch] = useReducer(formReducer, initialFormState);

 const handleTextChange = e => {
  dispatch({
    type: "HANDLE INPUT TEXT",
    field: e.target.name,
    payload: e.target.value
  })
 }

 const onSubmit = e => {
  e.preventDefault();
  if (this.state.initialFormState === "") {
    alert("??");
  } else {
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  }
};


  return (
    <>
    <div className='__form'>
        <form 
        className='__form-elements'
        onSubmit={onSubmit}
        >
            <input 
            type='text' 
            placeholder='First Name'
            name='firstName'
            value={formState.firstName}
            onChange={(e) => handleTextChange(e)}
            />
            <input 
            type='text' 
            placeholder='Last Name'
            name='lastName'
            value={formState.lastName}
            onChange={(e) => handleTextChange(e)}
            />
            <input 
            type='email'
            placeholder='E-mail'
            name='email'
            value={formState.email}
            onChange={(e) => handleTextChange(e)}
            />
            <input 
            type='password' 
            placeholder='Password' 
            name='password'
            value={formState.password}
            onChange={(e) => handleTextChange(e)}
            />
            <button>Claim your free trial</button>
        </form>
    </div>
    </>
    
  )
}

export default Form;