import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyDLV0TAtbVenLKKMsZmSsBoRLUVo75g2I0",
    authDomain: "game-frikis-db.firebaseapp.com",
    projectId: "game-frikis-db",
    storageBucket: "game-frikis-db.appspot.com",
    messagingSenderId: "946268207178",
    appId: "1:946268207178:web:5a71211c60f5e11a2bceb3",
    measurementId: "G-QK9GBQXRGZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (user,additionalData) => {
    if (!user) return;
    const userRef = await firestore.doc("Users/" + user.uid);
    const snapshot = await userRef.get();

    if(!(await snapshot).exists){
        const {email,displayName} = user;
        const createdOn = new Date();
        try{
            await userRef.set({
                email,displayName,createdOn,...additionalData       
            });
        }catch (error){
            console.log("error while storing data ",error);
        }

    }
    return userRef;
}