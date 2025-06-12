<script>
	let images = [
		"/images/slide1.jpg",
		"/images/slide2.jpg",
		"/images/slide3.jpg",
		"/images/slide4.jpg",
	];

	let current = 0;

	function prev() {
		current = (current - 1 + images.length) % images.length;
	}

	function next() {
		current = (current + 1) % images.length;
	}
</script>

<div class="relative w-full max-w-6xl mx-auto">
	<img src={images[current]} alt="Slider Image" class="w-full h-96 object-cover rounded" />

	<!-- Strzałki -->
	<button
		on:click={prev}
		aria-label="Poprzedni"
		class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3"
	>
		&#8592;
	</button>

	<button
		on:click={next}
		aria-label="Następny"
		class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3"
	>
		&#8594;
	</button>

	<!-- Kropki -->
	<div class="flex justify-center mt-4 space-x-3">
		{#each images as _, i}
			<button
				class="w-4 h-4 rounded-full"
				class:bg-blue-600={current === i}
				class:bg-gray-300={current !== i}
				on:click={() => (current = i)}
				aria-label={"Slide " + (i + 1)}
			></button>
		{/each}
	</div>
</div>
