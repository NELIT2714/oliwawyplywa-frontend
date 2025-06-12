<script>
	import { cart } from '$lib/stores/cart';
	import Menu from "$lib/components/shop/Menu.svelte";


	$: totalPrice = $cart.reduce(
		(sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0
	).toFixed(2);


	function decreaseQuantity(productId) {
		cart.update(items =>
			items
				.map(item =>
					item.id === productId && item.quantity > 1
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
				.filter(item => item.quantity > 0)
		);
	}

	function login() {
		goto('/account');
	}

	function proceedToCheckout() {
		goto('/checkout');
	}

	function increaseQuantity(id) {
		function increaseQuantity(productId) {
			cart.update(items =>
				items.map(item => {
						return item.id === productId && item.quantity > 1
							? { ...item, quantity: item.quantity + 1 }
							: item;
					}
				)
			);
		}


	}
</script>
<Menu />

<section class="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-5">
	<h1 class="text-2xl font-bold mb-6 font-gothic">Twój koszyk</h1>

	{#if $cart.length === 0}
		<p class="text-gray-600">Twój koszyk jest pusty.</p>
	{:else}
		<table class="w-full mb-6 border-collapse">
			<thead>
			<tr class="border-b text-left text-gray-700">
				<th class="py-2 text-sm md:text-base">Produkt</th>
				<th class="py-2 text-sm md:text-base">Cena</th>
				<th class="py-2 text-sm md:text-base">Ilość</th>
				<th class="py-2 text-sm md:text-base">Razem</th>
			</tr>
			</thead>

			<tbody>
			{#each $cart as product}
				<tr class="border-b">
					<td class="py-4 flex text-xs md:text-base items-center gap-4">
						<img src={product.image} alt={product.name} class="w-16 h-16 object-cover rounded" />
						<span>{product.name}</span>
					</td>
					<td class="py-4 text-xs md:text-base">
					{product.price.toFixed(2)} zł</td>
					<td class="py-4 text-sm md:text-base">

					<div class="flex items-center gap-2">
							<button
								on:click={() => decreaseQuantity(product.id)}
								class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
							>
								−
							</button>
							<span>{product.quantity}</span>
							<button
								on:click={() => increaseQuantity(product.id)}
								class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
							>
								+
							</button>
						</div>
					</td>
					<td class="py-4 text-xs md:text-base">
					{(product.price * product.quantity).toFixed(2)} zł</td>
				</tr>
			{/each}
			</tbody>
		</table>

		<div class="text-right font-semibold text-lg mb-6">
			Suma: {totalPrice} zł
		</div>

		<div class="flex flex-col md:flex-row md:justify-between items-center gap-4">
			<a
				href="/account"
				class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full md:w-auto text-center"
			>
				Zaloguj się
			</a>


			<p class="text-gray-700 text-sm md:text-base text-center md:text-left">
				Możesz kontynuować bez logowania
			</p>

			<a
				href="/checkout"
				class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full md:w-auto text-center"
			>
				Dostawa i płatność
			</a>
		</div>
	{/if}
</section>
