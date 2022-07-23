
## Description
Developed Spotify-Spoof web application using the create-react-app.The app comsumes data from the [Spotify API](https://developer.spotify.com/) and tries to mimic the UI and front-end behaviours of the official [Spotify web player](https://open.spotify.com/).

Non authenticated users cannot control the player and redirected to login page. They need to first Login their account.The authorization process requires valid client ID.
Once the authorization is granted, the authorization server issues an access token, which is used to make API calls on behalf the user or application. Access token is then being stored in local storage so that we can use it for further api calls.

## PREREQUISITES:
- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>
- Spotify for Developers <a href='https://developer.spotify.com/'>HERE</a>

## Tech/Framework Used
* react
* react-dom
* react-router-dom
* axios
* Bootstrap
* react-icons
* redux
* react-redux
* redux-thunk

### Run Locally

Clone the repository to a directory of your choosing

```git
git clone https://github.com/Nitesh-Singh-5/spotify-spoof
```
Navigate into spotify-spoof

```sh
$ cd spotify-spoof 
```

Install the necessary packages

```sh
$ npm install 
```

make sure to change these things in your [src/spotify.js](https://github.com/Nitesh-Singh-5/spotify-spoof/blob/master/src/spotify.js)

```sh
clientId = <Your Spotify client id>
redirectUri = http://localhost:3000/
```

To start up the app locally
```sh
$ npm start
```

