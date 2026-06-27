import React from 'react';

function ChildComponent1({ onSelectOption }) {
  return (
    <div style={{ border: '1px solid brown', padding: '10px', margin: '10px' }}>
      <h3>Child Component 1</h3>
      <button onClick={() => onSelectOption('Option 1')}>
        Option 1
      </button>
    </div>
  );
}

export default ChildComponent1;
