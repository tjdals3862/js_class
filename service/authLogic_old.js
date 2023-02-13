import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
class AuthLogic {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }
  login(providerName) {
    console.log("providerName : " + providerName);
    const authProvider = this.getProvider(providerName);
    console.log("authProvider : " + authProvider);
    console.log("this.firebaseAuth : " + this.firebaseAuth);
    //return signInWithPopup(this.firebaseAuth, authProvider);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  logout() {
    this.firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    this.firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthLogic;

/* 
  외부 스크립트 사용 방법
  1. commonjs - 디폴트(생략되어 있음 - package.json -> npm init -y)
    const http= requires('http')
  
  2. module
    import { ,,,} from './XXX.js'
  
  리액트 수업 공통 사항

  authLogic.js - 리액트 수업 응용

  export - 여러개 가능 {}

  export default - 하나만 가능

  호이스팅 대상
  
*/
