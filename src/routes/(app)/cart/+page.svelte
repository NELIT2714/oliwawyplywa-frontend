<script>

	import { onMount } from 'svelte';
	import { cart } from '$lib/stores/cart';



	onMount(() => {
		const unsubscribe = cart.subscribe(items => {
			cartItems = items;
		});
	});

	let cartItems = [];
	let showCheckout = false;

	const unsubscribe = cart.subscribe(items => {
		cartItems = items;
	});

	function increase(item) {
		cart.updateQuantity(item.id, 1);
	}

	function decrease(item) {
		cart.updateQuantity(item.id, -1);
	}

	function remove(item) {
		cart.remove(item.id);
	}

	$: total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2);

	// formularz
	let name = '';
	let address = '';
	let phone = '';
	let email = '';

	let errors = {};

	function validate() {
		errors = {};
		if (!name.trim()) errors.name = "Imię i nazwisko jest wymagane";
		if (!address.trim()) errors.address = "Adres jest wymagany";
		if (!phone.trim() || !/^\d{7,15}$/.test(phone)) errors.phone = "Telefon musi mieć 7–15 cyfr";
		if (!email.trim() || !/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email)) errors.email = "Niepoprawny email";
		return Object.keys(errors).length === 0;
	}

	function pay() {
		if (!validate()) return;
		alert(`Dziękujemy za zamówienie!\nŁączna kwota: ${total} zł`);
		cart.clear();
		showCheckout = false;
		name = address = phone = email = '';
	}
</script>

<section class="max-w-5xl mx-auto p-6">
	<h1 class="text-3xl font-bold text-blue-900 mb-8 text-center">Twój koszyk</h1>

	{#if cartItems.length > 0}
		{#if !showCheckout}
			<div class="flex flex-col gap-6">
				{#each cartItems as item}
					<div class="flex flex-col md:flex-row items-center md:items-start border rounded-lg p-4 bg-white shadow-md gap-4">
						<img src={item.image} alt={item.name} class="w-32 h-32 object-cover rounded-lg" />
						<div class="flex-1">
							<h2 class="text-xl font-semibold text-blue-900">{item.name}</h2>
							<p class="text-gray-700 mb-2">Cena: {item.price} zł</p>
							<div class="flex items-center gap-2 mb-2">
								<button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300" on:click={() => decrease(item)}>-</button>
								<span class="px-2">{item.quantity}</span>
								<button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300" on:click={() => increase(item)}>+</button>
							</div>
							<p class="font-bold text-blue-800">Razem: {(item.price * item.quantity).toFixed(2)} zł</p>
						</div>
						<button class="text-red-600 font-bold hover:underline mt-2 md:mt-0" on:click={() => remove(item)}>Usuń</button>
					</div>
				{/each}

				<div class="text-right mt-4">
					<p class="text-2xl font-bold">Łącznie: {total} zł</p>
					<button class="mt-2 bg-blue-900 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-800" on:click={() => showCheckout = true}>
						Przejdź do płatności
					</button>
				</div>
			</div>
		{:else}
			<div class="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
				<h2 class="text-2xl  text-blue-900 mb-4">Podaj swoje dane i adres wysyłki</h2>

				<div class="flex flex-col gap-4">
					<input type="text" placeholder="Imię i nazwisko" bind:value={name} class="border p-2 rounded w-full"/>
					{#if errors.name}<p class="text-red-600 text-sm">{errors.name}</p>{/if}

					<input type="text" placeholder="Adres" bind:value={address} class="border p-2 rounded w-full"/>
					{#if errors.address}<p class="text-red-600 text-sm">{errors.address}</p>{/if}

					<input type="tel" placeholder="Telefon" bind:value={phone} class="border p-2 rounded w-full"/>
					{#if errors.phone}<p class="text-red-600 text-sm">{errors.phone}</p>{/if}

					<input type="email" placeholder="Email" bind:value={email} class="border p-2 rounded w-full"/>
					{#if errors.email}<p class="text-red-600 text-sm">{errors.email}</p>{/if}

					<button class="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-500" on:click={pay}>
						Zapłać {total} zł
					</button>
					<button class="text-gray-700 hover:underline mt-2" on:click={() => showCheckout = false}>
						Wróć do koszyka
					</button>
				</div>
			</div>
		{/if}
	{:else}
		<p class="text-center text-gray-700 text-xl mt-20">Twój koszyk jest pusty.</p>
	{/if}
</section>
