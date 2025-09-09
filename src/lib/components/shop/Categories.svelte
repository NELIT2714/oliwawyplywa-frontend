<script>
	let categories = [
		{ id: 1, name: "EXTRA VIRGIN NIEFILTROWANA", price: 59.99, image: "/images/extra.jpg", description: "Oliwa z pierwszego tłoczenia", link: "/category/extra" },
		{ id: 2, name: "OLIWA ESENCJA SMAKOWA PREMIUM", price: 69.99, image: "/images/smakowa.jpg", description: "Ekologiczna oliwa BIO", link: "/category/premium" },
		{ id: 3, name: "OLIWA ESENCJA SMAKOWA", price: 59.99, image: "/images/ziolowa.jpg", description: "Oliwa z pierwszego tłoczenia", link: "/category/smakowa" },
		{ id: 4, name: "BOXY PREZENTOWE", price: 69.99, image: "/images/box.jpg", description: "Ekologiczna oliwa BIO", link: "/category/boxy" }
	];


	let filter = ""; // do filtrowania/szukanie

</script>

<style>

    @media (max-width: 640px) {
        .flex.overflow-x-auto {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .flex.overflow-x-auto::-webkit-scrollbar {
            display: none;
        }
    }

</style>

<section
	id="category"
	class="w-screen min-h-[600px] p-6 flex flex-col"
	style="background:url('/images/bgoliwa.png') no-repeat center center;
    background-size: cover;">
	<h1 class="text-2xl sm:text-3xl md:text-4xl font-gothic font-bold text-center text-white bg uppercase text-blue-800 mt-8 mb-20">
		Kategorie produktów
	</h1>

	<div class="flex flex-row sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 overflow-x-auto sm:overflow-x-visible">
		{#each categories.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())) as category}
			<div class="min-w-[140px] max-w-[180px] flex-shrink-0 sm:min-w-0 sm:max-w-full rounded-lg p-3 sm:p-4transition flex flex-col justify-between min-h-[320px]">
				<img src={category.image} alt={category.name} class="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mb-3 mx-auto" />
				<h2 class="text-sm sm:text-lg font-semibold font-gothic mb-2 text-center" style="color: #a57c0c" >{category.name}</h2>
				<a href={category.link} class="border border-blue-950 hover:bg-blue-800 hover:text-white bg-blue-900 text-white py-2 px-4 rounded rounded-lg uppercase tracking-wide font-semibold w-full text-xs sm:text-sm mt-auto text-center">
					zobacz kategorię
				</a>

			</div>

		{/each}
	</div>


</section>