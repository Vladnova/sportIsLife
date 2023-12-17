// import { FieldPath, doc, updateDoc } from "firebase/firestore";
import { collection, doc, setDoc, deleteDoc, getDocs } from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from '../../../firebase';

export const updateFirestore = async(card) =>{
    const user = auth.currentUser;
        if (user) {
            const docData = card;
            try{
 setDoc(doc(db, user.email, card._id), docData);
  console.log("done")
  
            } catch (er){
console.log(er.message)
            }
        }
        if(!user){
        return;
      }  
    };

export const deleteFavorites = async(id)=> {
    const user = auth.currentUser;
        if (user) {
           
            try{
             deleteDoc(doc(db, user.email, id));
  console.log("delete")
            } catch (er){
console.log(er.message)
            }
        }
        if(!user){
        return;
      }  
    };



 export const listOfFavorites= async()=>{
    const user = auth.currentUser;
    const favorites = []
    console.log(user.email)
                const querySnapshot = await getDocs(collection(db, user.email));
                // const querySnapshot = getDocs(collection(db, user.email));
                // console.log(querySnapshot)
                querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  favorites.push(doc.data())
                });
 localStorage.setItem("favotitesCurentUser", JSON.stringify(favorites))
    };
 

   
 