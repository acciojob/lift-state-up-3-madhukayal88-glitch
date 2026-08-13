import React from 'react';

const ChildComponent2 = ({ setSelectedOption }) => {
  return (
    <div className="child-component-2">
      <h2>Child Component 2</h2>
      <button onClick={() => setSelectedOption('Option B')}>
        Option B
      </button>
    </div>
  );
};

export default ChildComponent2;
