<script>
// @ts-nocheck

    import Product from './components/product.svelte'
    import Features from './components/features.svelte';
    import ModalComponentRegistry from './components/modalComponentRegistry.svelte';
    import { Modal, modalStore } from '@skeletonlabs/skeleton';
    import { auth } from '../firebase.js';
    import { onMount } from 'svelte';
    import { LightSwitch } from '@skeletonlabs/skeleton';

    let showModal = false;

    function openModal() {
    showModal = true;
    }

    function closeModal() {
    showModal = false;
    }

    let user=null;

    const car ={
        marque:'citroen',
        modele:'C3 Picasso',
        date: 2012,
        kilometrage:208970
    };

    let cars = [
        { marque:'Citroeen',
        modele:'C3 Picasso',
        date: 2012,
        kilometrage:26940, 
        img:'C3P.png'},
        { marque:'Bugati',
        modele:'Chiron',
        date: 2018,
        kilometrage:208970,
        img:'car2.jpg'},
        { marque:'Porsch',
        modele:'carrera 9',
        date: 2023,
        kilometrage:20870,
        img:'car3.jpg'},
    ]
    let features = [
        { name:'Entretiens', 
        img:'nettoyage.png'},
        { name:'Réparation', 
        img:'reparation.png'},
        { name:'Assurance', 
        img:'assurance.png'},
        { name:'Vente', 
        img:'vente.png'},
        { name:'Forum', 
        img:'discuter.png'},
    ]
    
    onMount(() => {
    // Add the observer to listen for changes in the authentication state
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      user = userAuth; // Update the user variable when the authentication state changes
    });

    // Return a cleanup function to remove the observer when the component is unmounted
    return unsubscribe;
  });
    async function checkAuth() {
    const user = auth.currentUser;
    if (!user) {
      // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
      window.location.replace('/login');
    }
  }

  // Utilisez onMount pour appeler la fonction de vérification d'authentification lors du montage du composant
  onMount(checkAuth);

  async function signOut() {
    try {
      // Mettez en place la déconnexion ici
      await auth.signOut();
      window.location.replace('/login');
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
    }
  }

</script>

<div class="bg-white relative">
    <h1 class="text-2xl m-2 md:font-semibold md:text-4xl md:mb-6">Carbone</h1>
    <ul class="flex gap-4 m-2 overflow-x-auto inner">
        {#each features as { name, img }, i}
            <Features {...{name,img}}/>
        {/each} 
    </ul>
    
    <ul class="mx-2 my-8  flex flex-wrap gap-8 items-center"> 
        
        {#each cars as { marque, modele, date, kilometrage, img }, i}
            <Product {...{marque,modele,date,kilometrage, img}}/>
        {/each}        
   
         <button on:click={openModal}  class="hidden md:block bg-slate-100 drop-shadow-xl rounded-md w-24  h-24 "><i class="fa-solid fa-circle-plus fa-2xl "><i></button>
       </ul>
    <button on:click={openModal} class="fixed right-8 bottom-8 md:hidden"><i class="fa-solid fa-circle-plus fa-2xl"></i></button>
<ModalComponentRegistry
    isOpen={showModal}
    title="My Custom Modal"
    let:content
  >
    <p>This is the content of the modal.</p>
    <button on:click={closeModal}>Close</button>
  </ModalComponentRegistry>
  
</div><button on:click={closeModal}>X</button>
<button on:click={signOut}>deconnexion</button>
<LightSwitch />


<style>
    .inner::-webkit-scrollbar {
        display: none;
      }
      .inner {
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
      }
</style>