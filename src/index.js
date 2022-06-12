import React from 'react';
import { createRoot } from 'react-dom/client';

import SeasonDisplay from './components/SeasonDisplay';
import LoadingSpinner from './components/LoadingSpinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage} </div>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <LoadingSpinner message={'Looking for your location...'} />;
  }

  render() {
    return <div className={'border red'}>{this.renderContent()}</div>;
  }
}

export default App;

createRoot(document.querySelector('#root')).render(<App />);
