import React from 'react';
import './Header.css';
import { createTheme, ThemeProvider, TextField, MenuItem } from '@material-ui/core';
import category from '../../data/category';

const Header = () => {
    const darkTheme = createTheme({
        palette: {
          type: 'dark',
          primary: {
              main: '#fff',
          }
        },
      });

    return (
        <div className="header">
            <span className="title">Word Hunt</span>
            <div className="input">
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" label="Standard" />
                    <TextField
          id="standard-select-currency"
          select
          label="Select"
          helperText="Please select your language" 
        >
            {category.map((option) => (
                <MenuItem key={option.label} value={option.value}>
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
