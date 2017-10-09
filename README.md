# OnGeoLandingPage
This is the landing page for MSU Geography http://professional.ongeo.msu.edu

# Requirements
* NodeJS >= version 6
* Webpack version 2, installed globally
* node-sass version ^4.5.3, installed globally 

#data

* The path: "/src/data/languages.json" contains the translated text from english and chinese. 
* Updates to this file need to be compiled with webpack
* When updating this file, be aware that the /public/index.html contains the english text already so it will need to be updated there as well
* otherwise you will only see the changes when you switch back to english