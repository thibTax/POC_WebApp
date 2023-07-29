<div class="features_box">
    <slot />
</div>

<script>
	/**
	 * @type {string}
	 */
	 export let name;
	

     /**
	 * @type {any}
	 */
      export let img;
</script>

<li class="flex flex-col justify-center items-center gap-1 text-slate-500 lg:mb-10">
    <div class=" bg-gradient-to-br variant-gradient-primary-secondary rounded-full p-1 w-16 gap-2"><img class="bg-white p-2 rounded-full" src="{img}" alt="" ></div>
    <h2 class="text-xs">{name}</h2>
</li>