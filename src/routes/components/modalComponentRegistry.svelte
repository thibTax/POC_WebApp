<!-- Modal.svelte -->

<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { Stepper, Step } from '@skeletonlabs/skeleton';
    import PageOne from './pageOne.svelte';
	import PageTwo from './pageTwo.svelte';
    import { getFirestore, collection, addDoc } from 'firebase/firestore';
    import { auth, firestore } from '../../firebase';


    let nameAgence = 'edzdv';
    let numberClient = '2921';
    let yearSub ='2932';
    let contrtact ='tout risque'
    let kilometrage = '3949';
    let color = 'dzazdazdza';
    let year ='2012';
    let model ='jden';
    let brand ='Citroen';
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
                    // nameAgence,
                    // numberClient:numberClient,
                    // yearSub:yearSub,
                    // contrtact:contrtact,
                    // kilometrage:kilometrage,
                    // color:color,
                    // year:year,
                    // model,
                    // brand:brand,
                     img:img
                });
                console.log("Document written with ID: ", docRef.id);
                window.location.replace('/');
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
    console.log(receivedData)
    addProduct()
    closeModal()
    
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
  </script>
  
  {#if isOpen}
    <div class="bg-slate-800/80 fixed min-h-full z-30 inset-0 ">
        <div class="bg-slate-200/90 min-h-max m-4 rounded-lg p-2 md:w-96 md:mx-auto ">
            <Stepper on:complete={onCompleteHandler} >
                <Step >
                    <svelte:fragment slot="navigation"><button class="btn " on:click={closeModal}> <i class="fa-solid fa-arrow-left"></i> <span class="font-semibold">Back </span></button></svelte:fragment>
                    <svelte:fragment slot="header">Informations véhicule</svelte:fragment>
                    <PageOne sendDataToParent={handleDataFromChild1} />
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

  