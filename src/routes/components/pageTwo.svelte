<script>
    // @ts-nocheck
    
       
        import { auth, firestore } from '../../firebase.js';
        import { collection, addDoc } from "firebase/firestore"; 
        import { navigate } from 'svelte-routing';
        //import {readASingleDocument} from '../../functions/auth'
    
      
    
        let nameAgence = '';
        let numberClient = '';
        let yearSub ='';
        let contract ='';
        //let error = null;
        
        
        //========= props child to parent ==========
        export let sendDataToParent;
        let dataToSend = {nameAgence,numberClient,yearSub,contract};

        function sendData() {
            sendDataToParent(dataToSend);
        }
        //============= end props ===================


        // export async function addProduct() {
        //     try {
                
                
    
        //         // Enregistrez les informations supplémentaires de l'utilisateur dans Firestore
        //         try {
        //             const docRef = await addDoc(collection(firestore, "users"), {
        //                 first: displayName,
        //             });
        //             console.log("Document written with ID: ", docRef.id);
        //         } catch (e) {
        //             console.error("Error adding document: ", e);
        //         }
        //          //navigate('/');
        //          window.location.replace('/');
    
    
    
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
            <div class="flex flex-col gap-4 py-2 mx-8">
                <label class="label ">
                    <span class="text-xs text-secondary-500">Nom agence</span>
                    <input bind:value={dataToSend.nameAgence} type="text" class="input rounded-lg bg-slate-50" title="nameAgence" placeholder="Nom agence" />
                </label>
                <label class="label ">
                    <span class="text-xs text-secondary-500">Numéro client</span>
                    <input bind:value={dataToSend.numberClient} class="input rounded-lg  bg-slate-50" title="numberClient" type="text" placeholder="Numéro client" />
                </label>
                <label class="label ">
                    <span class="text-xs text-secondary-500">Année souscription</span>
                    <input type="text" bind:value={dataToSend.yearSub} class="input rounded-lg  bg-slate-50" title="yearSub" placeholder="Année souscription" />
                </label>
               
                <label class="label ">
                    <span class="text-xs text-secondary-500">Type contrat</span>
                    <input bind:value={dataToSend.contract} class="input rounded-lg  bg-slate-50" title="contract" type="text" placeholder="Type contrat" />
                </label>
                <button on:click={sendData} class="w-full bg-secondary-500 rounded-md p-2 mt-4 text-white">Enregistrer</button>
            </div>       
        </form >
