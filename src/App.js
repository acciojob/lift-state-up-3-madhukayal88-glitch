import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

function App() {
  // Initialize state named selectedOption
  const [selectedOption, setSelectedOption] = useState('');

  // Handler function to update state based on child interaction
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>Selected Option: {selectedOption}</p>
      
      {/* Passing the handler function down as a prop */}
      <ChildComponent1 onSelectOption={handleOptionChange} />
      <ChildComponent2 onSelectOption={handleOptionChange} />
    </div>
  );
}

export default App;
