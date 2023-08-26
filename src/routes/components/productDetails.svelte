<!-- Modal.svelte -->

<script>
// @ts-nocheck

    import { createEventDispatcher, onMount } from 'svelte';
    import { Stepper, Step } from '@skeletonlabs/skeleton';
    import PageOne from './pageOne.svelte';
	import PageTwo from './pageTwo.svelte';
    // @ts-ignore
    import { getFirestore, collection, addDoc, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
    import { auth, firestore, storage  } from '../../firebase';
	// @ts-ignore
	import Product from './product.svelte';
	import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


    // @ts-ignore
    let nameAgence = '';
    // @ts-ignore
    let numberClient = '';
    // @ts-ignore
    let yearSub ='';
    // @ts-ignore
    let contrtact =''
    // @ts-ignore
    let kilometrage = '';
    // @ts-ignore
    let color = '';
    // @ts-ignore
    let year ='';
    // @ts-ignore
    let model='';
    // @ts-ignore
    let brand='';
    let img = './car2.jpg'
    let receivedData1 = {};
    let receivedData2 = {};
    let receivedData= {};

    // Utilisateur est authentifié ?
    /**
	 * @type {string | null}
	 */
    let currentUserId = null;
        // Écouteur pour les changements d'état d'authentification
        // @ts-ignore
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                currentUserId = user.uid; // Récupère l'ID utilisateur
            } else {
                currentUserId = null;
            }
            
        });
      
   

    const dispatch = createEventDispatcher();
  
    export let isOpen = false;

    async function addProduct() {
    
         // Enregistrez les informations supplémentaires de l'utilisateur dans Firestore
            try {
                const docRef = await addDoc(collection(firestore, "products"), {
                    currentUserId:currentUserId,
                    ...receivedData,
                     img:img
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

   export function closeModal() {
      dispatch('close');
    }

    onMount(() => {
    // Ajoutez un gestionnaire d'événement clavier pour la touche "Esc"
    /**
		 * @param {{ key: string; }} event
		 */
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function onCompleteHandler () {
    receivedData = Object.assign({}, receivedData1, receivedData2);
    addProduct()
    closeModal()
    window.location.replace('/');
  }

  /**
	 * @type {{ name: string; } | null}
	 */
  let selectedImageFile = null;

//   async function updateImg(img){
//         const imageRef = ref(storage, 'images/' + product.img);
//         try {
//             imageUrl = await getDownloadURL(imageRef);
//             console.log('img mis à jour avec succès');
          
//         } catch (error) {
//             console.error('Erreur lors de la mise à jour de l\'image', error);
//         }
//     }
  
  /**
	 * @param {{ target: { files: any[]; }; }} event
	 */
  function handleFileChange(event) {
    selectedImageFile = event.target.files[0];
    product.img = selectedImageFile.name
    console.log(product.img)
    //updateImg(product.img)
    uploadImage()
  }
  async function uploadImage() {
    if (selectedImageFile) {
      const storageRef = ref(storage, 'images/' + selectedImageFile.name);
      // @ts-ignore
      await uploadBytes(storageRef, selectedImageFile);
      console.log('Image uploaded successfully');
    } else {
      console.error('No image selected');
    }
  }

  /**
	 * @param {string} data
	 */
  function handleDataFromChild1(data) {
    receivedData1 = data;
  }
  /**
	 * @param {{}} data
	 */
  function handleDataFromChild2(data) {
    receivedData2 = data;
  }

  /**
	 * @type {any}
	 */
   export let onClose;
   /**
	 * @type {any}
	 */
    export let product;
    
   // @ts-ignore
   let productId = null;

    /**
	 * @param {string} productId
	 */
    async function deleteProduct(productId) {
        const productRef = doc(firestore, 'products', productId);

        try {
            await deleteDoc(productRef);
            console.log('Produit supprimé avec succès');
            window.location.replace('/');
        } catch (error) {
            console.error('Erreur lors de la suppression du produit', error);
        }
    }

    /**
	 * @param {string} productId
	 * @param {{}} newData
	 */

     let imageUrl
 

function handleClick() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = handleFileChange;
  input.click();
}
    async function updateProduct(productId, newData) {
        const productRef = doc(firestore, 'products', productId);
        
        try {
            await updateDoc(productRef, newData);
            console.log('Produit mis à jour avec succès');
            window.location.replace('/');
        } catch (error) {
            console.error('Erreur lors de la mise à jour du produit', error);
        }
    }

    

</script>

<div class="bg-slate-800/80 fixed md:min-h-full z-30 inset-0">
    <div class="bg-slate-200/90 min-h-max md:my-4 rounded-lg p-2 md:max-w-2xl md:mx-auto pb-8">
        <div class="flex justify-between p-2 items-center">
            <div>
                <button class="" on:click={onClose}><i class="fa-solid fa-circle-arrow-left fa-xl"></i></button>
                <h1 class="ml-2 inline md:text-lg text-sm">Marque - modèle</h1>
            </div>
            <section class="grid grid-cols-2 gap-2">
                <button class="bg-primary-500 text-primary-100 md:rounded-lg md:p-2 rounded-full px-2 py-1 " on:click={()=>updateProduct(product.name, product)}><span class="hidden md:inline">Modifier</span>  <i class="fa-regular fa-pen-to-square"></i></button>
                <button class="bg-error-500 text-error-100 md:rounded-lg md:p-2 rounded-full px-2 py-1" on:click={() => deleteProduct(product.name)}> <span class="hidden md:inline">Supprimer</span>  <i class="fa-solid fa-trash"></i></button>
            </section>
        </div>
        <div class="p-2 mt-10 grid grid-cols-3 gap-2 ">
            
            <div class="relative md:h-40 md:w-40 rounded-md row-span-2">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div  on:click={handleClick}  class=" custom-file-button absolute bg-slate-800/50 hover:bg-slate-800/70 rounded-md   text-slate-100 w-full h-full flex justify-center items-center">
                    <i class="fa-regular fa-image fa-2xl"></i>
                </div>
                <img src="./car2.jpg" alt="car" class="object-cover h-full rounded-md">
            </div>
            <h1 class="col-span-2 text-xl font-semibold">Information véhicule</h1>
            <label class="label">
                <span class="text-xs">Marque</span> 
                <input type="text" placeholder="Marque" class="input border-none bg-slate-200 rounded-md" bind:value={product.brand}>
            </label>
            <label class="label">
                <span class="text-xs">Modèle</span> 
                <input type="text" placeholder="Modèle" class="input border-none bg-slate-200 rounded-md" bind:value={product.model}>
            </label>
            <label class="label">
                <span class="text-xs">Année</span> 
                <input type="text" placeholder="Année" class="input border-none bg-slate-200 rounded-md" bind:value={product.year}>
            </label>
            <label class="label">
                <span class="text-xs">Kilométrage</span> 
                <input type="text" placeholder="Kilométrage" class="input border-none bg-slate-200 rounded-md" bind:value={product.kilometrage}>
            </label>
            <label class="label">
                <span class="text-xs">Couleur</span> 
                <input type="text" placeholder="Couleur" class="input border-none bg-slate-200 rounded-md" bind:value={product.color}>
            </label>
        </div>  
        <div class="p-2 mt-10 grid grid-cols-3 gap-2 ">
            <h1 class="col-span-3 text-xl font-semibold">Information Assurance</h1>
            <label class="label">
                <span class="text-xs">Nom assurance</span> 
                <input type="text" placeholder="Nom assurance" class="input border-none bg-slate-200 rounded-md" bind:value={product.nameAgence}>
            </label>
            <label class="label col-span-2">
                <span class="text-xs">Type de contrat</span> 
                <input type="text" placeholder="Type de contrat" class="input border-none bg-slate-200 rounded-md" bind:value={product.contract}>
            </label>
            <label class="label">
                <span class="text-xs">Numéro client</span> 
                <input type="text" placeholder="Numéro client" class="input border-none bg-slate-200 rounded-md" bind:value={product.numberClient}>
            </label>
            <label class="label">
                <span class="text-xs">Année contrat</span> 
                <input type="text" placeholder="Année contrat" class="input border-none bg-slate-200 rounded-md" bind:value={product.yearSub}>
            </label>
            <label class="label">
                <span class="text-xs">Autre</span> 
                <input type="text" placeholder="Autre" class="input border-none bg-slate-200 rounded-md">
            </label>
        </div>         
    </div>
</div>

  
  {#if isOpen}
    <div class="bg-slate-800/80 fixed min-h-full z-30 inset-0 ">
        
        <div class="bg-slate-200/90 min-h-max m-4 rounded-lg p-2 md:w-96 md:mx-auto ">
            
            <Stepper on:complete={onCompleteHandler} on:back={closeModal}>
                
                <Step>
                    <PageOne sendDataToParent={handleDataFromChild1} />
                    <svelte:fragment slot="header">
                        Informations véhicules
                    </svelte:fragment>
                    
                </Step>
                <Step stepTerm='Étape'>
                    <svelte:fragment slot="header">Informations assurance</svelte:fragment>
                    <PageTwo sendDataToParent={handleDataFromChild2} />
                </Step>
                <!-- ... -->
            </Stepper> 
        </div>      
    </div>
  {/if}

  <style>
</style>

  