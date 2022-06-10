import React from 'react';
import { createRoot } from 'react-dom/client';

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude:</div>;
  }
}

export default App;

createRoot(document.querySelector('#root')).render(<App />);
