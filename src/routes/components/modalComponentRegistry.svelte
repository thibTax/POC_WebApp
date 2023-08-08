<!-- Modal.svelte -->

<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { Stepper, Step } from '@skeletonlabs/skeleton';
    import PageOne from './pageOne.svelte';
	import PageTwo from './pageTwo.svelte';
  
    const dispatch = createEventDispatcher();
  
    export let isOpen = false;
   
  
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
    console.log('ok')
    closeModal()
  }
  </script>
  
  {#if isOpen}
    <div class="bg-slate-800/80 absolute min-h-full z-30 inset-0 ">
        <div class="bg-slate-200/90 min-h-max m-4 rounded-lg p-2 md:w-96 md:mx-auto ">
            <Stepper on:complete={onCompleteHandler}>
                <Step>
                    <svelte:fragment slot="header">Informations véhicule</svelte:fragment>
                    <PageOne />
                </Step>
                <Step>
                    <svelte:fragment slot="header">Informations assurance</svelte:fragment>
                    <PageTwo />
                </Step>
                <!-- ... -->
            </Stepper> 
        </div>      
    </div>
  {/if}

  