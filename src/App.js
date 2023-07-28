import React, { useState } from 'react'
import Temp from './components/Temp'
import { Tempclass } from './components/Tempclass';

function App() {
  let [isFuncComponent, setIsFuncComponent] = useState(true);

  const changeComponent = () => {
    setIsFuncComponent(!isFuncComponent);
  };

  return (
    <div>
      <div >
        <div>
        <center>
                <button type="button" class="btn btn-secondary" onClick={changeComponent}>Switch Component</button>
            </center>
          {isFuncComponent ? (
            <Temp />
          ) : (
            <Tempclass />
          )}
         
        </div>
      </div>

    </div>

  );
}

export default App;
