<script>
	let username = "";
	let password = "";

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Login attempt:", { username, password });
	};
</script>

<section class="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-200 via-indigo-100 to-white px-4">
	<form
		on:submit={handleSubmit}
		class="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-gray-200"
	>
		<h2 class="text-3xl font-bold mb-8 text-center text-indigo-700 tracking-wide">
			Panel Admina
		</h2>

		<!-- Username -->
		<div class="mb-6 relative">
			<input
				id="username"
				type="text"
				bind:value={username}
				placeholder="Nazwa użytkownika"
				class="peer w-full px-4 py-3 rounded-xl border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-indigo-400
               placeholder-transparent transition"
				required
			/>
			<label
				for="username"
				class="absolute left-4 top-3 text-gray-400 text-sm
               transition-all peer-placeholder-shown:top-3
               peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:text-indigo-600 peer-focus:text-sm"
			>
				Nazwa użytkownika
			</label>
		</div>

		<!-- Password -->
		<div class="mb-8 relative">
			<input
				id="password"
				type="password"
				bind:value={password}
				placeholder="Hasło"
				class="peer w-full px-4 py-3 rounded-xl border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-indigo-400
               placeholder-transparent transition"
				required
			/>
			<label
				for="password"
				class="absolute left-4 top-3 text-gray-400 text-sm
               transition-all peer-placeholder-shown:top-3
               peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:text-indigo-600 peer-focus:text-sm"
			>
				Hasło
			</label>
		</div>

		<!-- Submit button -->
		<button
			type="submit"
			class="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl
             shadow-lg hover:bg-indigo-700 hover:shadow-xl transition
             uppercase tracking-wide text-lg"
		>
			Zaloguj
		</button>


	</form>
</section>
