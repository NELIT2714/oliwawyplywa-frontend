<script>
	let products = [
		{ id: 1, name: "Produkt A" },
		{ id: 2, name: "Produkt B" },
		{ id: 3, name: "Produkt C" }
	];

	function editProduct(product) {
		alert(`Edytuj: ${product.name}`);
	}

	function deleteProduct(product) {
		products = products.filter(p => p.id !== product.id);
	}
</script>

<!--dodawanie produktu-->
<form class="bg-white p-6 rounded-xl shadow-md mb-8">
	<h3 class="text-xl font-semibold mb-4">Dodaj / Edytuj produkt</h3>
<h3>Nazwa</h3>
	<div class="mb-4">
		<input
			type="text"
			placeholder="Nazwa produktu"
			class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
			required
		/>
	</div>
<h3>Opis</h3>
	<div class="mb-4">
    <textarea
			placeholder="Opis produktu"
			class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
			required
		></textarea>
	</div>
	<!-- Lista rozwijana - objętość butelki -->
	<div class="mb-4">
		<label class="block mb-2 font-medium text-gray-700">Pojemność butelki</label>
		<select
			class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
			required
		>
			<option value="" disabled selected>pojemność</option>
			<option value="100ml">100 ml</option>
			<option value="250ml">250 ml</option>
			<option value="500ml">500 ml</option>
			<option value="1000ml">1000 ml</option>
		</select>
	</div>

	<!-- Pole do dodania zdjęcia -->
	<div class="mb-4">
		<label class="block mb-2 font-medium text-gray-700">Zdjęcie produktu</label>
		<input
			id="imageInput"
			type="file"
			accept="image/*"

			class="w-full"
			required
		/>
	</div>
<!--cena-->
	<h3>Cena</h3>
	<div class="mb-4">
		<input
			type="number"
			placeholder="Cena produktu"
			class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
			required
		/>
	</div>


	<!-- Kontener przycisków -->
	<div class="flex gap-4 w-6">
		<button
			type="submit"
			class="flex-1 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
		>
			Dodaj
		</button>
<!---->


	</div>
</form>


<table class="min-w-full border-collapse border border-gray-300 rounded-lg">
	<thead>
	<tr class="bg-gray-100 text-left">
		<th class="border border-gray-300 px-4 py-2">ID</th>
		<th class="border border-gray-300 px-4 py-2">Nazwa produktu</th>
		<th class="border border-gray-300 px-4 py-2">Akcje</th>
	</tr>
	</thead>
	<tbody>
	{#each products as product}
		<tr class="hover:bg-gray-50">
			<td class="border border-gray-300 px-4 py-2">
				<input
					type="text"
					bind:value={product.id}
					class="w-full border rounded px-2 py-1"
					readonly
				/>
			</td>
			<td class="border border-gray-300 px-4 py-2">
				<input
					type="text"
					bind:value={product.name}
					class="w-full border rounded px-2 py-1"
				/>
			</td>
			<td class="border border-gray-300 px-4 py-2 flex gap-2">
				<button
					on:click={() => editProduct(product)}
					class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
				>
					Edytuj
				</button>
				<button
					on:click={() => deleteProduct(product)}
					class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
				>
					Usuń
				</button>
			</td>
		</tr>
	{/each}
	</tbody>
</table>


<!--dodawanie kategorii-->

<form class="bg-white p-6 rounded-xl shadow-md mb-8">
	<h3 class="text-xl font-semibold mb-4">Dodaj / Edytuj kategorię</h3>

	<div class="mb-4">
		<input
			type="text"
			placeholder="Nazwa kategorii"
			class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
			required
		/>
	</div>

	<!-- Kontener przycisków -->
	<div class="flex gap-4">
		<button
			type="submit"
			class="flex-1 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
		>
			Dodaj
		</button>
		<button
			type="submit"
			class="flex-1 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
		>
			Edytuj
		</button>
		<button
			type="submit"
			class="flex-1 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
		>
			Usuń
		</button>


	</div>
</form>


<!--dodawanie admina-->
<form class="bg-white p-6 rounded-xl shadow-md mb-8">
	<h3 class="text-xl font-semibold mb-4">Dodaj / Edytuj admina</h3>

	<div class="mb-4">
		<input
			type="text"
			placeholder="Nazwa admina"
			class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
			required
		/>
	</div>

	<div class="mb-4">
		<input
			type="password"
			placeholder="password"
			class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
			required
		/>
	</div>

	<div class="mb-4">
		<input
			type="password"
			placeholder="retype password"
			class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
			required
		/>
	</div>

	<!-- Kontener przycisków -->
	<div class="flex gap-4">
		<button
			type="submit"
			class="flex-1 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
		>
			Dodaj
		</button>
		<button
			type="submit"
			class="flex-1 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
		>
			Edytuj
		</button>
		<button
			type="submit"
			class="flex-1 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
		>
			Usuń
		</button>


	</div>

</form>