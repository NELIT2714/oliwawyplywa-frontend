<script>
	export let data;
	let product = data.product;
</script>

{#if product}
	<h1 class="text-2xl font-bold mb-4">{product.name}</h1>
	<img src={product.image} alt={product.name} class="w-full max-w-md rounded mb-4" />
	<p class="mb-4">{product.description}</p>
	<p class="text-lg font-semibold mb-4">{product.price.toFixed(2)} zł</p>
{:else}
	<p>Produkt nie znaleziony</p>
{/if}
