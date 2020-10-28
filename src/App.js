import React from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation.js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';
import Logo from './Components/Logo/Logo';
import Url from './Components/Url/Url'
import Rank from './Components/Rank/Rank'
import Particles from 'react-particles-js';



const app = new Clarifai.App({
 apiKey: '5961e5754fb443c5b97ff1b8b3cc9e1d'
});


const particleOptions = {
    particles: {
        number: {
          value: 3000,
          density: {
            enable:true,
            value_area: 1000
          }
        }
    },
    "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageURL: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  generateFacePosition = (data) => {
    const position = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(position);
  }

  onSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input
      )
      .then(response => {
        this.generateFacePosition(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Particles 
          className='particles' 
          params={{particleOptions}} 
        />
        <Navigation />
        <Logo />
        <Rank />
        <Url 
          onInputChange = {this.onInputChange} 
          onSubmit = {this.onSubmit}
        />
        <FaceRecognition 
          imageURL = {this.state.imageURL}
        />
      </div>
    );
  }
}

export default App;
