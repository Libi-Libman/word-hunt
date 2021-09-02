import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import {Container} from '@material-ui/core';
import Header from './components/Header/Header';

function App() {

  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState("en")

  const dictionaryApi = async() => {
    try {
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello');

      setMeanings(data.data);

  }catch (err) {
    console.log(err);
  }
};

console.log(meanings);

useEffect(() => {
  dictionaryApi()
}, [])
  return (
    <div className="App"
    style={{height: '100vh', backgroundColor: '#666', color: '#fff'}}>
      <Container maxWidth="md"
      style={{display:'flex', flexDirection:'column', height:'100vh'}}> 
        <Header category={category} setCategory={setCategory}/> 
      </Container>
    </div>
  );
};
export default App;
