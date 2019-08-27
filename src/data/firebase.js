import * as firebase from "firebase/app";

var config = {
    apiKey: "AIzaSyCfVJyrvHvPKTLimegJawUzGOUA2z8i67Y",
    authDomain: "raction-5c3c6.firebaseapp.com",
    databaseURL: "https://raction-5c3c6.firebaseio.com/",
    storageBucket: "raction-5c3c6.appspot.com"
};

export default firebase.initializeApp(config);