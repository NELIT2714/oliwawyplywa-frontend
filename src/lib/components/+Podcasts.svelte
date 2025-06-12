<script>
	const podcasts = [
		{ title: 'Wszystko o greckiej oliwie Zapis mojej rozmowy z Łukaszem Modelskim w jego audycji „Droga przez mąkę” PR II', link: 'https://www.polskieradio.pl/8/2385/Artykul/3006667' },
		{ title: 'Łukasz Modelski z programu II Polskiego Radia mówi o nowej oliwie: „Agresywna. Gorycz plus ostrość. Bardzo fajna, zadziorna”.\n' +
				'Zapis mojej rozmowy w jego audycji „Droga przez mąkę” ', link: 'https://www.polskieradio.pl/8/2385/Artykul/2290325,Tajemnice-greckiej-oliwy?fbclid=IwAR290noJrCH88RExSo5hFMor0jI6YK_j8DvsTKIds4QYt7uqH-K_57BohAI' },
		{ title: 'Tymek, oliwa i Chardonnay Blue Ridge 🍷 WINE ME 🍷', link: 'https://www.youtube.com/watch?v=2ajmyWHpxQg' }
	];
</script>

<section class="relative md:-mt-96 bg-cover bg-center  md:py-96 py-20 px-6" style="background-image: url('/images/podcast.jpg');">
	<div class=" rounded-3xl  max-w-6xl mx-auto p-10">
		<h2 class="text-3xl font-bold text-center mb-10 font-gothic text-blue-900">
			Posłuchaj o naszej oliwie
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each podcasts as podcast}
				<a
					href={podcast.link}
					target="_blank"
					rel="noopener noreferrer"
					class="flex flex-col items-center opacity-70 justify-center bg-red-300 rounded-xl shadow-md p-6 hover:bg-blue-50 transition"
				>
					<div class="text-5xl text-blue-800 mb-4"><i class="bi bi-play-circle"></i></div>
					<p class="text-center text-lg font-gothic text-blue-900">{podcast.title}</p>
				</a>
			{/each}
		</div>
	</div>
</section>
