import { GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import { auth } from "../../firebase";

const provider = new GoogleAuthProvider();

const SingIn = document.getElementById("sign-in");
const SignOut = document.getElementById("sign-out");
const User = document.getElementById("user")
User.innerHTML = localStorage.getItem("user");
if (localStorage.getItem("user")){

        SignOut.classList.remove("display-none")
        SingIn.classList.add("display-none")
    }
    // let user;
    export const googleSignin = async ()=>{

        await signInWithPopup(auth, provider)
        .then((result) => {

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;


            localStorage.user= user.email;
            User.innerHTML = user.email;
            SignOut.classList.remove("display-none")
            SingIn.classList.add("display-none")

        }).catch((error) => {
            // Handle Errors here.

            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;

            const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
        });

    }
    export const logOut = async()=>{
        await signOut(auth).then(() => {
            User.innerHTML =  "";
            localStorage.removeItem("user")
            console.log ("Sign-out successful.")
        }).catch((error) => {
            console.log(error.message)// An error happened.
        });
        SignOut.classList.add("display-none")
        SingIn.classList.remove("display-none")
    }

    SingIn.addEventListener("click", googleSignin);
    SignOut.addEventListener("click", logOut);
