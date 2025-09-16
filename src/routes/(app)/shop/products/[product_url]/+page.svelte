<script>
	export let data;

	// dane z +page.server.js
	const { product, product_url } = data;
</script>

<section class="max-w-4xl mx-auto p-6">
	<div class="bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-6">

		<!-- Zdjęcie produktu -->
		<img src={product.image} alt={product.name} class="w-full md:w-1/2 h-64 object-cover rounded-xl" />

		<!-- Informacje o produkcie -->
		<div class="flex flex-col justify-between p-4">
			<div>
				<h1 class="text-3xl font-bold mb-2">{product.name}</h1>
				<span class="text-gray-600 mb-4">{product.volume}</span>
				<p class="text-gray-700 mb-4">{product.description}</p>
			</div>

			<div class="flex flex-col md:flex-row md:items-center gap-4 mt-4">
				<span class="text-2xl font-semibold text-indigo-700">{product.price}</span>
				<button class="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
					Dodaj do koszyka
				</button>
			</div>
		</div>
	</div>

	<!-- Dodatkowa informacja o URL (opcjonalnie) -->
	<p class="mt-4 text-sm text-gray-500">URL produktu: {product_url}</p>
</section>
