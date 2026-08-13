import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>Selected Option: {selectedOption}</p>
      
      <ChildComponent1 setSelectedOption={setSelectedOption} />
      <ChildComponent2 setSelectedOption={setSelectedOption} />
    </div>
  );
};

export default App;
