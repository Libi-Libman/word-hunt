import React from 'react';
import './Header.css';
import { createTheme, ThemeProvider, TextField, MenuItem } from '@material-ui/core';

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
            <MenuItem>
            English
            </MenuItem>
        </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
