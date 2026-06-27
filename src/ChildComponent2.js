import React from 'react';

function ChildComponent2({ onSelectOption }) {
  return (
    <div style={{ border: '1px solid olive', padding: '10px', margin: '10px' }}>
      <h3>Child Component 2</h3>
      <button onClick={() => onSelectOption('Option 2')}>
        Option 2
      </button>
    </div>
  );
}

export default ChildComponent2;
