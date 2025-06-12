<script>
	import Menu from "$lib/components/shop/Menu.svelte";

	let name = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let error = '';
	let success = '';

	async function register() {
		error = '';
		success = '';

		if (password !== confirmPassword) {
			error = 'Hasła nie są takie same.';
			return;
		}

		try {
			const res = await fetch('/api/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, password })
			});

			if (!res.ok) {
				const data = await res.json();
				error = data.message || 'Wystąpił błąd przy rejestracji.';
			} else {
				success = 'Rejestracja zakończona sukcesem! Możesz się teraz zalogować.';
			}
		} catch (e) {
			error = 'Błąd połączenia z serwerem.';
		}
	}

	import "$lib/components/shop/Menu.svelte";
</script>

<Menu />

<section class="min-h-screen flex items-center justify-center bg-gray-50 p-6"
				 style="background:url('/images/bgoliwa.png') no-repeat center center;
					background-size: cover"
>
	<div class="w-full max-w-md bg-white rounded-xl p-8">

<!--		<h1 class="text-2xl font-bold mb-6 text-center text-blue-900 font-gothic">Załóż konto</h1>-->

		{#if error}
			<p class="text-red-600 text-sm mb-4">{error}</p>
		{/if}

		{#if success}
			<p class="text-green-600 text-sm mb-4">{success}</p>
		{/if}

		<form on:submit|preventDefault={register} class="space-y-4 max-w-sm mx-auto w-full">
			<input
				type="text"
				bind:value={name}
				placeholder="Imię i nazwisko"
				class="w-full max-w-xs mx-auto block px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				required
			/>

			<input
				type="email"
				bind:value={email}
				placeholder="Adres e-mail"
				class="w-full max-w-xs mx-auto block px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				required
			/>

			<input
				type="password"
				bind:value={password}
				placeholder="Hasło"
				class="w-full max-w-xs mx-auto block px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				required
			/>

			<input
				type="password"
				bind:value={confirmPassword}
				placeholder="Powtórz hasło"
				class="w-full max-w-xs mx-auto block px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				required
			/>

			<button
				type="submit"
				class="w-full max-w-xs mx-auto block bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold uppercase"
			>
				Zarejestruj się
			</button>
		</form>


		<p class="text-center text-sm text-gray-600 mt-6">
			Masz już konto?
			<a href="/account" class="text-blue-700 hover:underline font-semibold">Zaloguj się</a>
		</p>
	</div>
</section>

