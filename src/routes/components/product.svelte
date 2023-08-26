<script>

 	// Importez les bibliothèques Firebase et Firestore
	import { getFirestore, collection, getDocs } from 'firebase/firestore';
	import { getStorage, ref, getDownloadURL } from 'firebase/storage';
	import { onMount } from 'svelte';
	import { auth, storage } from '../../firebase'; 

	
      
    
		
	  /**
	 * @type {{ kilometrage: any; year: any; img: any; brand: any; model: any; }}
	 */
	   export let product;
	   /**
	 * @type {string}
	 */
	   let imageUrl
	   async function fetchProducts() {
	 
	   
      const imageRef = ref(storage, 'images/' + product.img);
      imageUrl = await getDownloadURL(imageRef);
	   }

	   onMount(() => {
    fetchProducts();
  }); 
     

	
</script>

<li class=" grid grid-cols-2  bg-slate-100 drop-shadow-xl rounded-md w-80  h-48 border">
    <h1 class="text-center my-auto text-sm px-2 py-1" >{product.kilometrage}km - <span class="text-xs">({product.year})</span></h1>
    <div class="h-full overflow-hidden"><img src={imageUrl} alt="car" class=" rounded-tr-lg w-full h-28 object-cover"></div>
	
    
    <h1 class="text-xl max-h-14  text-slate-300 font-semibold text-center col-span-2 px-2 py-1 rounded-b-lg rounded-br-lg bg-secondary-600 truncate">{product.brand} - <span class=" truncate text-sm from-neutral-600">{product.model}</span></h1>
</li>