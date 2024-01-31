import './App.css';
import Recipe from './components/Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';

const App = () => {
  const APP_ID = 'a4d38d9a';
  const APP_KEY = '981191b12b8aca5635bf390414b489e6';
  const [search,setSearch] = useState('');
  const [query,setQuery] =  useState('paneer');
  const [dishes,setDishes] = useState([]);


  useEffect(()=>{
    async function getData(){
      const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const response = await res.json()
      setDishes(response.hits)
    }
    getData()
  },[query])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');


  }      
  return<>
  <form onSubmit={onSubmitHandler}>
    <div className='main-header'>
    <div className="header">Recipe Book</div>
    <div className='input'>
    <input type="text" onChange={ e => setSearch(e.target.value)}/>
    </div>
    <div className='button'>
    <button varient='primary' size='lg'>Search</button>
    </div>
    </div>
  </form>
  <div className="recipe">
  {dishes.map((item,idx) => <Recipe recipelist={item} key={idx}/>)}
  </div>
  </>
}


export default App;
