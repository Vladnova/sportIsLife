import { GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import { auth } from "../../firebase";
const provider = new GoogleAuthProvider();

const SingIn = document.getElementById("sign-in");
const SignOut = document.getElementById("sign-out");
const User = document.getElementById("user")
export const googleSignin = async ()=>{
  
    await signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user.uid)
        //   navigate("/home");
        
        localStorage.user= user.email
        User.innerHTML = user.email;
        SignOut.classList.remove("display-none")
        SingIn.classList.add("display-none")
        
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email)
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential)
        // ...
    });
    
}
export const logOut = async()=>{
    await signOut(auth).then(() => {
        User.innerHTML =  "";
        console.log ("Sign-out successful.")
    }).catch((error) => {
        console.log(error.message)// An error happened.
    });
    SignOut.classList.add("display-none")
    SingIn.classList.remove("display-none")
}
SingIn.addEventListener("click", googleSignin);
SignOut.addEventListener("click", logOut);