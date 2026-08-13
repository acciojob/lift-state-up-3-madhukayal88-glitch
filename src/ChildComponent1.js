import React from 'react';

const ChildComponent1 = ({ setSelectedOption }) => {
  return (
    <div className="child-component-1">
      <h2>Child Component 1</h2>
      <button onClick={() => setSelectedOption('Option A')}>
        Option A
      </button>
    </div>
  );
};

export default ChildComponent1;
