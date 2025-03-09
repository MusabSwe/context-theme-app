import React from 'react';
import FunctionContextComponent from './components/FunctionContextComponent';
import { ThemeProvider } from './store/ThemeContext';


function App() {

  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
