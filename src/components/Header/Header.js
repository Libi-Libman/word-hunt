import React from 'react';
import './Header.css';
import { createTheme, ThemeProvider, TextField, MenuItem } from '@material-ui/core';
import categories from '../../data/category';

const Header = ({category,setCategory,word,setWord}) => {
    const darkTheme = createTheme({
        palette: {
          type: 'dark',
          primary: {
              main: '#fff',
          }
        },
      });

      const handleChange = (language) => {
        setCategory(language);
        setWord("");
      }
    return (
        <div className="header">
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        className="search"
                        label="standard"
                        value={word}
                        onChange={(event) => setWord(event.target.value)}

                    />
                    <TextField
                        className="select"
                        select
                        label="Select"
                        value={category}
                        onChange={(event) => handleChange(event.target.value)}
                        helperText="Please select your language" 
                        >
                        {categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>
                                    {option.value}
                                </MenuItem>
                        ))}

                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
