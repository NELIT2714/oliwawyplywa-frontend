<script>
	import { cart } from '$lib/stores/cart';
	// import { goto } from '$app/navigation';
	//
	// produkt pobrany z load
	export let data;
	const { product } = data;

	function addToCart() {
		if (product) {
			cart.add({ ...product });
			alert(`${product.name} dodano do koszyka!`);
			// goto('/cart'); // Redirect to cart page
		}
	}
</script>

{#if product}
	<section class="max-w-4xl mx-auto p-6">
		<div class="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
			<img src={product.image} alt={product.name} class="w-full md:w-1/2 h-64 object-cover rounded-lg" />

			<div class="flex-1 flex flex-col justify-between">
				<div>
					<h1 class="text-3xl font-bold text-blue-900 mb-4">{product.name}</h1>
					<p class="text-xl font-semibold text-blue-800 mb-6">Cena: {product.price} zł</p>
					<p class="text-blue-800 font-semibold mb-6">Opis produktu: </p>
						{product.description}
				</div>

				<a
					href="/cart"
					class="bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 w-full md:w-auto inline-block text-center"
					aria-label="Dodaj produkt do koszyka"
				>
					Dodaj do koszyka
				</a>
			</div>
		</div>
	</section>
{:else}
	<p class="text-center text-red-600 mt-20">Produkt nie znaleziony</p>
{/if}
