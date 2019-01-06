import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAc-hQRTToaUMBkdVIgEgBjkvm6MwSYUHU",
  authDomain: "vueblog-8e83d.firebaseapp.com",
  databaseURL: "https://vueblog-8e83d.firebaseio.com",
  projectId: "vueblog-8e83d",
  storageBucket: "vueblog-8e83d.appspot.com",
  messagingSenderId: "207263064732"
};
  let app = Firebase.initializeApp(config);
  export const db = app.database();
  export const postsRef = db.ref('posts');
