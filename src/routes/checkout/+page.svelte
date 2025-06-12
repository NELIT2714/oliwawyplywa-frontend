<script>
	import { cart } from '$lib/stores/cart';
	import { goto } from '$app/navigation';

	let name = '';
	let address = '';
	let paymentMethod = 'card';

	$: totalPrice = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

	function submitOrder() {
		if (!name || !address) {
			alert('Uzupełnij imię i adres dostawy');
			return;
		}
		// Tu można dodać wysyłkę zamówienia do API
		alert(`Zamówienie złożone!\nMetoda płatności: ${paymentMethod}`);
		cart.set([]); // wyczyść koszyk
		goto('/');
	}
</script>

<section class="max-w-3xl mx-auto p-6 bg-white rounded shadow">
	<h1 class="text-2xl font-bold mb-6">Dostawa i płatność</h1>

	{#if $cart.length === 0}
		<p>Koszyk jest pusty. <a href="/" class="text-blue-600 underline">Wróć do sklepu</a>.</p>
	{:else}
		<h2 class="text-xl font-semibold mb-4">Podsumowanie zamówienia</h2>
		<ul class="mb-6">
			{#each $cart as item}
				<li class="mb-2">
					{item.name} × {item.quantity} — {(item.price * item.quantity).toFixed(2)} zł
				</li>
			{/each}
		</ul>
		<p class="text-right font-semibold mb-6">Suma: {totalPrice} zł</p>

		<h2 class="text-xl font-semibold mb-4">Dane do wysyłki</h2>
		<div class="mb-4">
			<label class="block mb-1 font-medium">Imię i nazwisko</label>
			<input bind:value={name} type="text" class="w-full border rounded px-3 py-2" />
		</div>
		<div class="mb-4">
			<label class="block mb-1 font-medium">Adres dostawy</label>
			<textarea bind:value={address} class="w-full border rounded px-3 py-2 "></textarea>
		</div>

		<h2 class="text-xl font-semibold mb-4">Metoda płatności</h2>
		<div class="mb-6 space-y-2">
			<label><input type="radio" bind:group={paymentMethod} value="card" /> Odbiór osobisty</label><br />
			<label><input type="radio" bind:group={paymentMethod} value="blik" /> BLIK</label><br />
			<label><input type="radio" bind:group={paymentMethod} value="cod" /> Za pobraniem</label>
		</div>

		<button on:click={submitOrder} class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
			Złóż zamówienie
		</button>
	{/if}
</section>
