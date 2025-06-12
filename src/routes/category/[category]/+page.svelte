
<script>
	import Menu from '$lib/components/shop/Menu.svelte'; // Zmień ścieżkę jeśli inna
	export let data;
	import { cart } from '$lib/stores/cart';



	let added = {};

	function addToCart(product) {
		cart.update(items => {
			const existing = items.find(item => item.id === product.id);
			if (existing) {
				return items.map(item =>
					item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
				);
			}
			return [...items, { ...product, quantity: 1 }];
		});
		added[product.id] = true;
		setTimeout(() => (added[product.id] = false), 3000);
	}
</script>
<Menu />

<h1 class="text-2xl font-bold mt-6 mb-4">Kategoria: {data.category.toUpperCase()}</h1>

{#if data.products.length > 0}
	<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
		{#each data.products as product}
			<div class="bg-white border rounded-xl shadow p-4 flex flex-col">
				<img
					src={product.image}
					alt={product.name}
					class="w-full h-40 object-cover rounded mb-2"
				/>
				<h2 class="text-lg font-semibold mb-1">{product.name}</h2>
				<p class="text-sm text-gray-600 flex-1">{product.description}</p>
				<p class="text-sm text-gray-600 flex-1">{product.price}</p>
				<button
					on:click={() => addToCart(product)}
					class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
				>
					{#if added[product.id]}
						✔ Dodano do koszyka
					{:else}
						Dodaj do koszyka
					{/if}
				</button>
			</div>
		{/each}
	</div>
{:else}
	<p>Brak produktów w tej kategorii.</p>
{/if}
