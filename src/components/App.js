import React from 'react';

const App = () => {
  // Define the array of relatives
  const relatives = [
    'Gajala',
    'Padmanabha Simha',
    'Padmasri',
    'McDonald Murthy'
  ];

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key="relativeList">
        {/* Map through the relatives array and generate list items */}
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;

