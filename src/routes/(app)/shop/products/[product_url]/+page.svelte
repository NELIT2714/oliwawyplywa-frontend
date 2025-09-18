<script>
	import { page } from '$app/stores';

	// pobranie ID produktu z URL
	let productId;
	$: productId = $page.url.pathname.split('/').pop();

	// (na razie proste wyszukanie w mockowanych danych)
	let products = [
		{ id: 101, name: "Extra Virgin 250ml", price: 29.99, image: "/images/extra.jpg", description: "Oliwa najwyższej jakości." },
		{ id: 102, name: "Extra Virgin 500ml", price: 49.99, image: "/images/extra.jpg", description: "Butelka 500ml idealna do kuchni." },
		// ...reszta
	];

	let product = products.find(p => p.id == productId);
</script>

{#if product}
	<section class="max-w-3xl mx-auto p-6">
		<img src={product.image} alt={product.name} class="w-full h-80 object-cover rounded-lg mb-6" />
		<h1 class="text-3xl font-bold text-blue-900">{product.name}</h1>
		<p class="text-xl text-blue-700 font-semibold mb-4">{product.price} zł</p>
		<p class="text-gray-700">{product.description}</p>
	</section>
{:else}
	<p class="text-center text-red-600">Nie znaleziono produktu</p>
{/if}
