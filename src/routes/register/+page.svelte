<script>
// @ts-nocheck

    import { createUserWithEmailAndPassword} from "firebase/auth";
    import { auth, firestore } from '../../firebase.js';
    import { collection, addDoc } from "firebase/firestore"; 
    import { navigate } from 'svelte-routing';
    //import {readASingleDocument} from '../../functions/auth'

  

    let email = 'thibaultaxil@gmail.com';
    let password = 'dzazdazdza';
    let displayName ='d';
    let error = null;

    async function signUp() {
        try {
            
            const userCredential = await createUserWithEmailAndPassword(auth,email, password);
           

            // Récupérez l'ID d'utilisateur unique créé par Firebase
            const userId = userCredential.user.uid;

            // Enregistrez les informations supplémentaires de l'utilisateur dans Firestore
            try {
                const docRef = await addDoc(collection(firestore, "users"), {
                    first: displayName,
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
             //navigate('/');
             window.location.replace('/');



            // await firestore.collection('utilisateurs').doc(userId).set({
            //     prenom:prenom
            // //   displayName: 'Nom d\'utilisateur',
            // //   photoURL: 'url-de-la-photo',
            // //   // Autres informations d'utilisateur
            // });

            // L'utilisateur est maintenant inscrit avec succès et ses informations sont enregistrées dans Firestore
        } catch (error) {
            console.error('Erreur lors de l\'inscription', error);
            // Stocker le message d'erreur pour l'afficher à l'utilisateur
            const errorMessage = error.message;
        }
    }




//   onMount(async () => {
//     // Exemple de lecture de données à partir de Firestore
//     try {
//       const querySnapshot = await app.collection('utilisateurs').get();
//       dataFromFirestore = querySnapshot.docs.map((/** @type {{ data: () => any; }} */ doc) => doc.data());
//     } catch (error) {
//       console.error('Erreur lors de la récupération des données Firestore', error);
//     }
//   });
        
</script>



<div class="flex flex-col justify-center md:grid md:grid-cols-2 bg-slate-800 md:h-screen ">
    <img src="bienvenue.png" alt="welcome" class="m-auto h-60 md:h-auto">
    <form class=" bg-white flex flex-col align-items-center justify-center md:gap-2"> 
        <div class="flex flex-col md:gap-8 gap-4 border border-primary-500 rounded-lg p-4 md:p-10 mx-auto mt-8 md:mt-0">
            <label class="label md:w-96">
                <span class="text-xs text-primary-500">Nom</span>
                <input type="text" class="input rounded-lg bg-slate-50" title="lastname" placeholder="Nom" />
            </label>
            <label class="label md:w-96">
                <span class="text-xs text-primary-500">Prénom</span>
                <input bind:value={displayName} class="input rounded-lg  bg-slate-50" title="name" type="text" placeholder="Prénom" />
            </label>
            <label class="label md:w-96">
                <span class="text-xs text-primary-500">Email</span>
                <input type="email" bind:value={email} class="input rounded-lg  bg-slate-50" title="email" placeholder="Email" />
            </label>
            <label class="label md:w-96">
                <span class="text-xs text-primary-500">Mot de passe</span>
                <input type="password" bind:value={password} class="input rounded-lg  bg-slate-50" title="password"  placeholder="Mot de passe" />
            </label>
            <label class="label md:w-96">
                <span class="text-xs text-primary-500">Mot de passe</span>
                <input class="input rounded-lg  bg-slate-50" title="password" type="text" placeholder="Mot de passe" />
            </label>
            <div class=" flex justify-between md:w-96">
                <button type="button" class="text-error-500 bg-error-200 hover:text-error-200 hover:bg-error-500 h-10 rounded-lg w-2/5">Annuler</button>
                <button on:click={signUp} type="submit" class="text-secondary-500 bg-secondary-200 h-10 rounded-lg w-2/5 hover:text-secondary-200 hover:bg-secondary-500">Enregistrer</button>
            </div>
        </div>       
        <h1 class="text-sm mx-auto mb-8 md:mb-0">Vous avez déjà un compte : <span><a class="text-secondary-500 font-semibold" href="./login">Login</a></span></h1>
    </form>
</div>