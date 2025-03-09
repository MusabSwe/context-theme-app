import React, { useState } from 'react';
import FunctionContextComponent from './components/FunctionContextComponent';
import ClassContextComponent from './components/ClassContextComponent';

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState();

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
