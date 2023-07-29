<script>
// @ts-nocheck

    import Product from './components/product.svelte'
    import Features from './components/features.svelte';

    const car ={
        marque:'citroen',
        modele:'C3 Picasso',
        date: 2012,
        kilometrage:208970
    };

    let cars = [
        { marque:'Citroen',
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
</script>

<div class="bg-white">
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
   
         <button class="hidden md:block bg-slate-100 drop-shadow-xl rounded-md w-24  h-24 "><i class="fa-solid fa-circle-plus fa-2xl "></i></button>
       </ul>
    <button class="fixed right-8 bottom-8 md:hidden"><i class="fa-solid fa-circle-plus fa-2xl"></i></button>
</div>

<style>
    .inner::-webkit-scrollbar {
        display: none;
      }
      .inner {
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
      }
</style>