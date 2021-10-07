import React, { Component } from 'react';
import 'tachyons';
import BackgroundParticles from './components/BackgroundParticles/BackgroundParticles';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';


const cleanState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  }
}

class App extends Component {
  constructor() {
    super();
    this.server = 'http://localhost:3010';
    this.state = cleanState;
  }

  predictFaces = () => {
    fetch(this.server + '/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.imageUrl
      })
    })
   .then(response => response.json())
   .then(response => {
        if(response) {
          this.updateImageCount();
          this.displayFaces(this.calculateFaceLocation(response));
        }
      })
      .catch(err => console.log(err));
  }

  // TODO: Draw boxes on all faces, not only the first one
  // NOTE: Will probably require changes to the state structure
  displayFaces = (box) => {
    this.setState({box: box}, this.logToConsole);
  }

  calculateFaceLocation = (data) => {
    const faceData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: Math.round(faceData.left_col * width),
      topRow: Math.round(faceData.top_row * height),
      rightCol: width - Math.round(faceData.right_col * width),
      bottomRow: height - Math.round(faceData.bottom_row * height),
    }
  }

  updateImageCount = () => {
    fetch(this.server + '/image', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id,
      })
    })
      .then(response => response.json())
      .then(count => this.setState(Object.assign(this.state.user, { entries: count }))
      )
  }

  loadUser = (user) => {
    const { email, id, joined, name, entries } = user;
    this.setState({user:
      {
        email: email,
        id: id,
        joined: joined,
        name: name,
        entries: entries,
      }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input}, this.predictFaces);
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    if(route !== 'home') {
      this.setState(cleanState)
    }
  }

  render() {
    return(
      <div className="App pa4">
        <BackgroundParticles />
        { this.state.route === 'home'
          ? <div>
            <Navigation onRouteChange={this.onRouteChange}/>
            <Rank
              user={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition
              imageUrl={this.state.imageUrl}
              box={this.state.box} />
            {
              // TODO: Make a proper Footer component with appropiate links to Github, as this is a showcase project
            }
            <div className='mt3 pb3 tc'>Logo made by <a href="https://www.freepik.com" title="freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="flaticon">www.flaticon.com</a></div>
          </div>
          : ( this.state.route === 'signin'
            ? <SignIn server={this.server}
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}/>
              : <Register server={this.server}
                onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    )
  }
}

export default App;
