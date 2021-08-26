import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])

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
    <div className="App">dictionary
    </div>
  );
};
export default App;
