// import {db} from '../firebase'
// import { getFirestore, collection, getDoc , doc, setDoc } from "firebase/firestore";


// const user = doc(db,'car-bones/utilisateurs')
// async function writedb(){
//     const docData={
//         id:1,
//         email:'test@test.fr',
//         password:'1234'
//     };
//     try {
//         await setDoc(user, docData);
//         console.log("data written in db")
//     } catch (error) {
//         console.log('error writteer')
        
//     }
// }


// export async function readASingleDocument(){
//   const mySnapshot = await getDoc(user);
//   console.log(mySnapshot.data())
// }