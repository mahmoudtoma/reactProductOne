import React, { useState } from 'react';
import Title from './components/Title';
import Box from './components/Box';
import Button from './components/Button';
import { person } from './data';

function App() {
  const [personData, setPersonData] = useState(person)
  const onDeleteData=()=> {
    setPersonData([])
  }

  const onViewData = ()=> {
    setPersonData(person)
  }
  return (
    <div className='font color-body'>
      <div className='container'>

        <Title person={personData} />
        <Box person={personData}/>
        <Button deleteData={onDeleteData} viewData={onViewData} />

      </div>
    </div>
  );
}

export default App;
