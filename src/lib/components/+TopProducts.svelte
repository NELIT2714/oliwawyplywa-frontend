<script>
	const products = [
		{ name: 'Oliwa Premium', image: '/images/top.jpg', description: 'Najlepsza oliwa z pierwszego tłoczenia.' },
		{ name: 'Oliwa Extra', image: '/images/top.jpg', description: 'Oliwa extra virgin o intensywnym smaku.' },
		{ name: 'Oliwa BIO', image: '/images/top.jpg', description: 'Ekologiczna oliwa z certyfikatem BIO.' },
		{ name: 'Oliwa z ziołami', image: '/images/top.jpg', description: 'Oliwa wzbogacona aromatycznymi ziołami.' }
	];
</script>

<style>
    .inverted-drop-shape {
        clip-path: ellipse(50% 65% at 50% 65%);
    }
</style>


<section id="top" class="py-20 md:py-32 lg:pb-56 px-4 text-center" style="background-color: #f0e7db" >

	<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-20 font-gothic tracking-wider uppercase"style="color: #253faa">
		Nasze topowe produkty
	</h2>

	<div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
		{#each products as product}
			<div class="flex flex-col items-center">
				<img src={product.image} alt={product.name} class="w-52 h-52 object-cover rounded-lg" />
				<p class="mt-3 font-semibold font-gothic" style="color: #253faa">{product.name}</p>
				<p class="mt-1 text-sm text-gray-700 max-w-xs">{product.description}</p>
				<button class="mt-6  text-white font-light rounded-lg py-2 px-6 uppercase tracking-wide" style="background: #a57c0c">
					zobacz produkt
				</button>
			</div>
		{/each}
	</div>
</section>
