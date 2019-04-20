import app from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCzXvpLLjHdA-f4XChaK4sKtR97JmMzooE",
  authDomain: "aygo-webs.firebaseapp.com",
  databaseURL: "https://aygo-webs.firebaseio.com",
  projectId: "aygo-webs",
  storageBucket: 'aygo-webs.appspot.com',
  messagingSenderId: 246163370684,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.database();
  }

  inbox = userId => this.db.ref(`inbox/${userId}`);
}

export default Firebase;