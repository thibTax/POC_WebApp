<script>
    // @ts-nocheck
    
        import { createUserWithEmailAndPassword} from "firebase/auth";
        import { auth, firestore } from '../../firebase.js';
        import { collection, addDoc } from "firebase/firestore"; 
        import { navigate } from 'svelte-routing';
        //import {readASingleDocument} from '../../functions/auth'
    
      
        let currentUserId ='';
        let kilometrage = '';
        let color = '';
        let year ='';
        let model ='';
        let brand ='';
        let error = null;
         //========= props child to parent ==========
         export let sendDataToParent;
        let dataToSend = {brand,model,year,color,kilometrage};

        function sendData() {
            sendDataToParent(dataToSend);
        }
        //============= end props ===================

    
        // export async function addProduct() {
            
        //     // Récupérez l'ID d'utilisateur unique
        //     const unsubscribe =  auth.onAuthStateChanged((user) => {
        //     if (user) {
        //         // Utilisateur connecté, faites quelque chose
        //         currentUserId=user.uid
        //         loadProducts()
        //     } else {
        //         // Aucun utilisateur connecté, faites quelque chose
        //         //window.location.replace('/login');
        //         console.log('Aucun utilisateur connecté');
        //     }
        //     return () => {
        //         unsubscribe(); // Nettoie l'écouteur lorsque le composant est détruit
        //     }})
            
        //     try {
        //         // Enregistrez les informations supplémentaires de l'utilisateur dans Firestore
        //         try {
        //             const docRef = await addDoc(collection(firestore, "products"), {
        //                 currentUserId,
        //                 brand,
        //                 model,
        //                 year,
        //                 color,
        //                 kilometrage
        //             });
        //             console.log("Document written with ID: ", docRef.id);
        //         } catch (e) {
        //             console.error("Error adding document: ", e);
        //         }
        //          //navigate('/');
        //          //window.location.replace('/');
    
    
    
        //         // await firestore.collection('utilisateurs').doc(userId).set({
        //         //     prenom:prenom
        //         // //   displayName: 'Nom d\'utilisateur',
        //         // //   photoURL: 'url-de-la-photo',
        //         // //   // Autres informations d'utilisateur
        //         // });
    
        //         // L'utilisateur est maintenant inscrit avec succès et ses informations sont enregistrées dans Firestore
        //     } catch (error) {
        //         console.error('Erreur lors de l\'inscription', error);
        //         // Stocker le message d'erreur pour l'afficher à l'utilisateur
        //         const errorMessage = error.message;
        //     }
        // }          
    </script>  

        <form class="flex flex-col align-items-center justify-center "> 
            <div class="flex flex-col gap-4 py-2 mx-8 ">
                <label class="label ">
                    <span class="text-xs text-secondary-500">Marque</span>
                    <input bind:value={dataToSend.brand} type="text" class="input rounded-lg bg-slate-50" title="brand" placeholder="Marque" />
                </label>
                <label class="label ">
                    <span class="text-xs text-secondary-500">Modèle</span>
                    <input bind:value={dataToSend.model} class="input rounded-lg  bg-slate-50" title="model" type="text" placeholder="Modèle" />
                </label>
                <label class="label ">
                    <span class="text-xs text-secondary-500">Année</span>
                    <input type="text" bind:value={dataToSend.year} class="input rounded-lg  bg-slate-50" title="year" placeholder="Année" />
                </label>
                <label class="label ">
                    <span class="text-xs text-secondary-500">Couleur</span>
                    <input type="text" bind:value={dataToSend.color} class="input rounded-lg  bg-slate-50" title="color"  placeholder="Couleur" />
                </label>
                <label class="label ">
                    <span class="text-xs text-secondary-500">kilometrage</span>
                    <input bind:value={dataToSend.kilometrage} class="input rounded-lg  bg-slate-50" title="kilometrage" type="text" placeholder="Kilométrage" />
                </label>
                <button on:click={sendData} class="w-full bg-secondary-500 rounded-md p-2 mt-4 text-white">Enregistrer</button>

            </div>       
        </form>
