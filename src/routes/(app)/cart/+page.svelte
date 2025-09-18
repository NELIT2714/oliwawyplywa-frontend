<script>
	// przykładowe dane koszyka
	let cart = [
		{ id: 101, name: "Extra Virgin 250ml", price: 29.99, quantity: 1, image: "/images/extra.jpg" },
		{ id: 202, name: "Premium Czosnkowa", price: 72.99, quantity: 2, image: "/images/smakowa.jpg" }
	];

	// zmiana ilości
	function updateQuantity(item, delta) {
		item.quantity += delta;
		if (item.quantity < 1) item.quantity = 1;
	}

	// usuwanie produktu z koszyka
	function removeItem(id) {
		cart = cart.filter(item => item.id !== id);
	}

	// suma całkowita
	$: total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
</script>

<section class="max-w-5xl mx-auto p-6">
	<h1 class="text-3xl font-bold text-blue-900 mb-8 text-center">Twój koszyk</h1>

	{#if cart.length > 0}
		<div class="flex flex-col gap-6">
			{#each cart as item}
				<div class="flex flex-col md:flex-row items-center md:items-start border rounded-lg p-4 bg-white shadow-md gap-4">
					<img src={item.image} alt={item.name} class="w-32 h-32 object-cover rounded-lg" />
					<div class="flex-1">
						<h2 class="text-xl font-semibold text-blue-900">{item.name}</h2>
						<p class="text-gray-700 mb-2">Cena: {item.price} zł</p>

						<div class="flex items-center gap-2 mb-2">
							<button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300" on:click={() => updateQuantity(item, -1)}>-</button>
							<span class="px-2">{item.quantity}</span>
							<button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300" on:click={() => updateQuantity(item, 1)}>+</button>
						</div>

						<p class="font-bold text-blue-800">Razem: {(item.price * item.quantity).toFixed(2)} zł</p>
					</div>

					<button class="text-red-600 font-bold hover:underline mt-2 md:mt-0" on:click={() => removeItem(item.id)}>
						Usuń
					</button>
				</div>
			{/each}

			<div class="text-right mt-4">
				<p class="text-2xl font-bold">Łącznie: {total} zł</p>
				<button class="mt-2 bg-blue-900 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-800">Przejdź do płatności</button>
			</div>
		</div>
	{:else}
		<p class="text-center text-gray-700 text-xl mt-20">Twój koszyk jest pusty.</p>
	{/if}
</section>
