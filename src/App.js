import React from 'react';
import AncestryList from './ancestry_list/ancestry_list';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <p>
            0.- Create a character concept
          </p>
          <p>
            1.- Select an ancestry.
          </p>
          <AncestryList/>
          <p>
            2.- Pick a background.
          </p>
          <p>
            3.- Choose a class.
          </p>
          <p>
            4.- Determine ability scores.
          </p>
          <p>
            5.- Record class details.
          </p>
          <p>
            6.- Buy Equipment.
          </p>
          <p>
            7.- Calculate Modifiers.
          </p>
          <p>
            8.- Finishing details: Deity, Age, Gender and pronouns, Class DC, Hero Points, Armor Class, Bulk
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
