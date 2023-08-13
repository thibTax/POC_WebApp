<script>
	/**
	 * @type {string}
	 */
	 export let brand;
	/**
	 * @type {string}
	 */
	 export let model;
	/**
	 * @type {number}
	 */
	 export let year;
	/**
	 * @type {number}
	 */
	 export let kilometrage;
	 /**
	 * @type {any}
	 */
	  export let img;

     

	
</script>

<li class="grid grid-cols-2  bg-slate-100 drop-shadow-xl rounded-md w-full max-w-sm h-48">
    <h1 class="text-center my-auto text-sm px-2 py-1">{kilometrage}km - <span class="text-xs">({year})</span></h1>
    <img src={img} alt="car" class=" rounded-tr-lg">
    
    <h1 class="text-xl max-h-14 b-0 text-slate-300 font-semibold text-center col-span-2 px-2 py-1 rounded-b-lg bg-secondary-600">{brand} - <span class="text-sm from-neutral-600">{model}</span></h1>
</li>