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
    
        export async function addProduct() {
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
    </script>  

        <form class="flex flex-col align-items-center justify-center "> 
            <div class="flex flex-col gap-4 py-2 px-4  mx-auto ">
                <label class="label ">
                    <span class="text-xs text-secondary-500">Marque</span>
                    <input type="text" class="input rounded-lg bg-slate-50" title="lastname" placeholder="Nom" />
                </label>
                <label class="label ">
                    <span class="text-xs text-secondary-500">Modèle</span>
                    <input bind:value={displayName} class="input rounded-lg  bg-slate-50" title="name" type="text" placeholder="Prénom" />
                </label>
                <label class="label ">
                    <span class="text-xs text-secondary-500">Année</span>
                    <input type="email" bind:value={email} class="input rounded-lg  bg-slate-50" title="email" placeholder="Email" />
                </label>
                <label class="label ">
                    <span class="text-xs text-secondary-500">Couleur</span>
                    <input type="password" bind:value={password} class="input rounded-lg  bg-slate-50" title="password"  placeholder="Mot de passe" />
                </label>
                <label class="label ">
                    <span class="text-xs text-secondary-500">kilometrage</span>
                    <input class="input rounded-lg  bg-slate-50" title="password" type="text" placeholder="Mot de passe" />
                </label>
            </div>       
        </form>
