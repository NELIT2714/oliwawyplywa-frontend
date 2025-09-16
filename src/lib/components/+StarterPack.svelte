<script>
	export let image = '/images/top.jpg';
	export let productName = 'Oliwa Premium Start';
	export let description = 'Idealny pakiet na początek – poznaj naszą oliwę z najlepszych zbiorów.';
	export let link = '/shop';
</script>

<section  id="starter" class="w-full bg-[#f0eede] pt-12 pb-6 px-6">
	<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10 min-h-[600px]">
		<!-- Lewa część: Zdjęcie -->
		<div class="w-full md:w-1/2 flex justify-center items-center">
			<img src={image} alt={productName} class="object-contain max-h-[500px] w-auto rounded-xl shadow-lg" />
		</div>

		<!-- Prawa część: Tekst i przycisk -->
		<div class="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
			<h2 class="text-xl sm:text-2xl md:text-3xl font-bold font-gothic text-blue-900 uppercase mb-4">
				Zamów pakiet startowy by poznać ten smak
			</h2>
			<h3 class="text-lg sm:text-xl font-semibold font-gothic  mb-2" style="color: #a57c0c">
				{productName}
			</h3>
			<p class="text-gray-700 mb-6 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
				{description}
			</p>
			<a
				href={link}
				class="bg-blue-700 hover:bg-blue-800 text-white font-light rounded-lg py-2 px-6 uppercase tracking-wide shadow w-auto self-center md:self-start"
			>
				Zobacz produkt
			</a>

		</div>
	</div>
</section>
