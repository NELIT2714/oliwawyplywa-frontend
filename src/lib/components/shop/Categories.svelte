<script>
	let categories = [
		{
			id: 1,
			name: "EXTRA VIRGIN NIEFILTROWANA",
			link: "/category/extra",
			products: [
				{ id: 101, name: "Extra Virgin 250ml", price: 29.99, image: "/images/extra.jpg" },
				{ id: 102, name: "Extra Virgin 500ml", price: 49.99, image: "/images/extra.jpg" },
				{ id: 103, name: "Extra Virgin 1L", price: 79.99, image: "/images/extra.jpg" },
				{ id: 104, name: "Extra Virgin Premium", price: 99.99, image: "/images/extra.jpg" }
			]
		},
		{
			id: 2,
			name: "OLIWA ESENCJA SMAKOWA PREMIUM",
			link: "/category/premium",
			products: [
				{ id: 201, name: "Premium Ziołowa", price: 69.99, image: "/images/smakowa.jpg" },
				{ id: 202, name: "Premium Czosnkowa", price: 72.99, image: "/images/smakowa.jpg" },
				{ id: 203, name: "Premium Pikantna", price: 74.99, image: "/images/smakowa.jpg" },
				{ id: 204, name: "Premium Rozmaryn", price: 76.99, image: "/images/smakowa.jpg" }
			]
		},
		{
			id: 3,
			name: "OLIWA ESENCJA SMAKOWA",
			link: "/category/premium",
			products: [
				{ id: 301, name: "Premium Ziołowa", price: 69.99, image: "/images/oliwa1.jpg" },
				{ id: 302, name: "Premium Czosnkowa", price: 72.99, image: "/images/oliwa1.jpg" },
				{ id: 303, name: "Premium Pikantna", price: 74.99, image: "/images/oliwa1.jpg" },
				{ id: 304, name: "Premium Rozmaryn", price: 76.99, image: "/images/oliwa1.jpg" }
			]
		},
		{
			id: 4,
			name: "BOXY PREZENTOWE",
			link: "/category/premium",
			products: [
				{ id: 401, name: "Premium Ziołowa", price: 69.99, image: "/images/box.jpg" },
				{ id: 402, name: "Premium Czosnkowa", price: 72.99, image: "/images/box.jpg" },

			]
		}
		// ... analogicznie inne kategorie
	];
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

	<div class="flex flex-col gap-10">
		{#each categories as category}
			<div class="rounded-lg p-4 bg-white shadow-md">
				<h2 class="text-xl font-semibold text-center mb-4" style="color: #a57c0c">
					{category.name}
				</h2>

				<!-- produkty -->
				<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
					{#each category.products as product}
						<div class="border rounded-lg p-3 flex flex-col items-center bg-gray-50">
							<img src={product.image} alt={product.name} class="w-20 h-20 object-cover rounded-full mb-2" />
							<p class="font-medium text-sm text-center">{product.name}</p>
							<p class="text-blue-900 font-bold">{product.price} zł</p>
							<div class="text-center mt-4">
								<a
									href={category.link}
									class="inline-block border border-blue-950 hover:bg-blue-800 hover:text-white bg-blue-900 text-white py-2 px-4 rounded-lg uppercase tracking-wide font-semibold text-xs sm:text-sm"
								>
									więcej opcji
								</a>
							</div>
						</div>
					{/each}
				</div>

				<!-- przycisk więcej -->

			</div>
		{/each}
	</div>


</section>