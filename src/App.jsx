import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './components/Card'
import './App.css'


function App() {
  
  const [userName, setUserName] = useState("");
  const [userAnimal, setAnimal] = useState("");

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeAnimal = (e) => setAnimal(e.target.value);

  const onSubmitForm = (e) =>{
    e.preventDefault();
    const isUserNameValid = validateUserName(userName);
    const isAnimalValid = validateAnimal(userAnimal);
    if(!isUserNameValid){
      return(
      alert("The field name must have at least 3 characters")
      )
    }
    if(!isAnimalValid){
      alert("The field animal must have at least 6 characters")
    }
  };

  const validateUserName = (userName) =>{
    const withoutSpaces = userName.trim();
    if(withoutSpaces.length>2){
      return true;
    } else {
      return false;
    }
  }
  const validateAnimal = (userAnimal)=>{
    const withoutSpaces = userAnimal.trim();
    if(withoutSpaces.length>5){
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="App">
      <h2>Elige un animal</h2>

      <form onSubmit={onSubmitForm}>
        <div>
        <input 
          type="name"
          placeholder="Name"
          value={userName}
          onChange={onChangeUserName}/>
        </div>

        <div>
        <input 
          type="animal"
          placeholder="Animal"
          value={userAnimal}
          onChange={onChangeAnimal}/> 
        </div>
        <button type="submit">Enviar</button>
        
        <Card name={userName} animal={userAnimal}></Card>
        
      </form>   
    </div>
  )
}

export default App
