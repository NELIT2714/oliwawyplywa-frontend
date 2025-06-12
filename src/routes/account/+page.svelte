<script>
	let email = '';
	let password = '';

	function loginWithEmail() {
		console.log('Logowanie:', { email, password });
	}

	function loginWithGoogle() {
		alert('Logowanie przez Google');
	}

	function loginWithFacebook() {
		alert('Logowanie przez Facebook');
	}
	import Menu from '$lib/components/shop/Menu.svelte';
</script>
<Menu />

<section class="min-h-screen flex items-center justify-center bg-gray-50 p-6
" style="background:url('/images/bgoliwa.png') no-repeat center center;
background-size: cover">

	<div class="w-full max-w-md bg-white  rounded-xl p-8">

<!--		<h1 class="text-2xl font-bold mb-6 text-center text-blue-900 font-gothic">Zaloguj się</h1>-->

		<!-- Social logins -->
		<div class="flex flex-col items-center gap-4 mb-6">
			<button
				on:click={loginWithGoogle}
				class="flex items-center justify-center gap-4 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded font-semibold w-full max-w-xs"
			>
				<i class="bi bi-google text-red-500 text-lg mr-2"></i>
				Zaloguj przez Google
			</button>

			<button
				on:click={loginWithFacebook}
				class="flex items-center justify-center gap-4 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded font-semibold w-full max-w-xs"
			>
				<i class="bi bi-facebook text-lg mr-2"></i>
				Zaloguj przez Facebook
			</button>
		</div>

		<!-- Email login -->
		<form on:submit|preventDefault={loginWithEmail} class="space-y-4 flex flex-col items-center">
			<input
				type="email"
				bind:value={email}
				placeholder="Adres e-mail"
				class="w-full max-w-xs px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				required
			/>

			<input
				type="password"
				bind:value={password}
				placeholder="Hasło"
				class="w-full max-w-xs px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				required
			/>

			<div class="text-right text-sm w-full max-w-xs">
				<a href="/forgot-password" class="text-blue-700 hover:underline">Nie pamiętasz hasła?</a>
			</div>

			<button
				type="submit"
				class="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold uppercase"
			>
				Zaloguj się
			</button>
		</form>


		<!-- Register link -->
		<p class="text-center text-sm text-gray-600 mt-6">
			Nie masz konta?
			<a href="/register" class="text-blue-700 hover:underline font-semibold">Zarejestruj się</a>
		</p>
	</div>
</section>
