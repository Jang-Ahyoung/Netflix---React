import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
// 파이어베이스에 로그인 하는 열쇠입니다.

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// firestore는 우리가 실세 사용할 데이터 베이스 입니다. - 실시간 데이터베이스로

const auth = firebase.auth(); // firbase를 이용하여 인증을 진행합니다.
//사용자 로그인 연동할 수 있는 인증 파트

export { auth };
export default db;