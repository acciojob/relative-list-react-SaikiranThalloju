import React from 'react'

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key={relatives}>
                   <li key={relativeListItem1}>Gajala</li>
                   <li key={relativeListItem2}>Padmanabha Simha</li>
                   <li key={relativeListItem3}>Padmasri</li>
                   <li key={relativeListItem4}>mc donald murthy</li>
               </ol>
    </div>
  )
}

export default App
