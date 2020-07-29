# kinetis-server

Kinetis is a mobile app that was born to allow physicians to create a library of workouts and suggest it to their patients.
As it is, the app allows only a user to create an account and store/edit/remove workouts in a public library. 
You will find here the backend part of the project.
####The implementation is not over, many features and services should be added before any publication (services, tests, CI....).
 
This project has been developed to discover *react-native* and improve my skills in *typescript*. 
 
*kinetis_server* is linked with *kinetis-app* both are stored on my github : 
1. https://github.com/pierre-dub/kinetis-app
2. https://github.com/pierre-dub/kinetis-server

####See a preview video (state of the art) of the app here: https://www.youtube.com/watch?v=LOlKVDVUtZE


### Quick start : 
1. Install *node.js* : https://nodejs.org/en/
2. Download dependencies : `npm install`

### Launch Server for development purpose: 
    npm run dev

### For information : 
##### The server is deployed on *heroku*
##### Notes for myself:  
    git push heroku master 
    heroku open
    heroku logs --tail
##### The server implementation is deployed automatically when the branch master evolved, see repository : https://github.com/pierre-dub/kinetis-server

