<script>
	const products = [
		{ name: 'Oliwa Premium', image: '/images/top.jpg', description: 'Najlepsza oliwa z pierwszego tłoczenia.' },
		{ name: 'Oliwa Extra', image: '/images/top.jpg', description: 'Oliwa extra virgin o intensywnym smaku.' },
		{ name: 'Oliwa BIO', image: '/images/top.jpg', description: 'Ekologiczna oliwa z certyfikatem BIO.' },
		{ name: 'Oliwa z ziołami', image: '/images/top.jpg', description: 'Oliwa wzbogacona aromatycznymi ziołami.' }
	];
</script>

<style>
    .image-container {
        position: relative;
        width: 13rem;
        height: 13rem;
        /*background-image: url('/images/drop.svg');*/
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        z-index: 0; /* <-- to może pomóc, choć tło zwykle i tak jest niżej */
    }

    .image-container img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
        z-index: 1; /* <-- obraz na wierzchu */
    }
    .image-container img {
        clip-path: url(#dropPath); /* jeśli masz zdefiniowaną ścieżkę SVG */
    }

</style>

<section id="top" class="py-20 md:py-32 lg:pb-56 px-4 text-center" style="background-color: #f0e7db">

	<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-20 font-gothic tracking-wider uppercase" style="color: #253faa">
		Nasze topowe produkty
	</h2>

	<div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
		{#each products as product}
			<div class="flex flex-col items-center">
				<!-- Kontener na obrazek z tłem -->
				<div class="image-container">
					<img src={product.image} alt={product.name} />
<!--					<img src="/images/drop.svg" class="absolute top-0 left-0 w-full h-full pointer-events-none" />-->
				</div>

				<p class="mt-3 font-semibold font-gothic" style="color: #253faa">{product.name}</p>
				<p class="mt-1 text-sm text-gray-700 max-w-xs">{product.description}</p>
				<button class="mt-6 text-white font-light rounded-lg py-2 px-6 uppercase tracking-wide" style="background: #a57c0c">
					zobacz produkt
				</button>
			</div>
		{/each}
	</div>
</section>