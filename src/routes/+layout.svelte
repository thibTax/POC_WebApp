<script>
	// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';


// import and securise auth
import {onMount} from 'svelte'
import {auth} from '../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore';
// import {authStore} from '../store/store'

const nonAuthRoutes = ['/',"/login","/register"] // ajouter les routes innaccessible avec une virgule

// onMount(()=>{
// 	console.log("Mounting")
// 	const unsubscribe = auth.onAuthStateChanged(async (user)=>{
// 		const currentPath =window.location.pathname;

// 		if(!user && !nonAuthRoutes.includes(currentPath)){
// 			window.location.href = "/";
// 			return;
// 		}

// 		if (user && currentPath === '/'){
// 			window.location.href = '/home';
// 			return;
// 		}

// 		if(!user){
// 			return;
// 		}

// 		// @ts-ignore
// 		const docRef = doc(db, "utilisateurs", user.uid)
// 		const docSnap = await getDoc(docRef)
// 		/**
// 		 * @type {import("@firebase/firestore").DocumentData}
// 		 */
// 		let dataToSetToStore;

// 		if(!docSnap.exists()){
// 			// @ts-ignore
// 			const userRef = doc(db, 'utilisateurs', user.uid);
// 			dataToSetToStore = {// @ts-ignore
// 				email: user.email}
				
// 			await setDoc(
// 				userRef, dataToSetToStore,{ merge:true}
				
// 			);
// 		} else{
// 			const userData = docSnap.data()
// 			dataToSetToStore =userData
// 		}

// 		// authStore.update((e) =>{
// 		// 	return{
// 		// 		// @ts-ignore
// 		// 		...curr,
// 		// 		user,
// 		// 		data: dataToSetToStore,
// 		// 		loading :false
// 		// 	}
// 		// })
// 	})
// })


</script>

<slot />


						