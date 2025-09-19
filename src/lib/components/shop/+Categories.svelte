

<script>
import {products} from "$lib/stores/products.js";

let categories = [
		{
			id: 1,
			name: "EXTRA VIRGIN NIEFILTROWANA",
			link: "/category/extra",
			products: [
				{ id: 101, name: "Extra Virgin 250ml", price: 29.99, image: "/images/extra.jpg", link: "/product/101" },

			]
		},
		{
			id: 2,
			name: "OLIWA ESENCJA SMAKOWA PREMIUM",
			link: "/category/premium",
			products: [
				{ id: 201, name: "Premium Ziołowa", price: 69.99, image: "/images/smakowa.jpg", link: "/product/201" },
				{ id: 202, name: "Premium Czosnkowa", price: 72.99, image: "/images/smakowa.jpg", link: "/product/202" },
				{ id: 203, name: "Premium Pikantna", price: 74.99, image: "/images/smakowa.jpg", link: "/product/203" },
				{ id: 204, name: "Premium Rozmaryn", price: 76.99, image: "/images/smakowa.jpg", link: "/product/204" }
			]
		},
		{
			id: 3,
			name: "OLIWA ESENCJA SMAKOWA",
			link: "/category/smakowa",
			products: [
				{ id: 301, name: "Smakowa Ziołowa", price: 69.99, image: "/images/oliwa1.jpg", link: "/product/301" },
				{ id: 302, name: "Smakowa Czosnkowa", price: 72.99, image: "/images/oliwa1.jpg", link: "/product/302" },
				{ id: 303, name: "Smakowa Pikantna", price: 74.99, image: "/images/oliwa1.jpg", link: "/product/303" },
				{ id: 304, name: "Smakowa Rozmaryn", price: 76.99, image: "/images/oliwa1.jpg", link: "/product/304" }
			]
		},
		{
			id: 4,
			name: "BOXY PREZENTOWE",
			link: "/category/boxy",
			products: [
				{ id: 401, name: "Box Ziołowy", price: 69.99, image: "/images/box.jpg", link: "/product/401" },
				{ id: 402, name: "Box Czosnkowy", price: 72.99, image: "/images/box.jpg", link: "/product/402" }
			]
		}
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

    #category {
        max-width: 100%;
        overflow-x: hidden;
    }


</style>

<section
	id="category"
	class="w-screen min-h-[600px] p-6 flex flex-col bg-[#f0eede]"
	>
	<h1 class="text-2xl sm:text-3xl md:text-4xl font-gothic font-bold text-center  bg uppercase text-blue-800 mt-8 mb-20">
		Kategorie produktów
	</h1>

	<div class="flex flex-col gap-10">
		{#each categories as category}
			<div class="rounded-lg p-4  shadow-md">
				<h2 class="text-3xl font-semibold text-center mb-4 text-blue-900">
					{category.name}
				</h2>

				<!-- produkty -->
				<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
					{#each category.products as product}
						<div class="border rounded-lg p-4 flex flex-col items-center bg-white shadow-md">
							<img
								src={product.image}
								alt={product.name}
								class="w-full h-48 object-cover rounded-lg mb-3"
							/>
							<p class="font-medium text-base text-center">{product.name}</p>
							<p class="text-blue-900 font-bold">{product.price} zł</p>
							<div class="text-center mt-4">
								<a
									href={product.slug}
									class="inline-block border border-blue-950 hover:bg-blue-300 hover:text-white bg-blue-900 text-white py-2 px-4 rounded-lg uppercase tracking-wide font-semibold text-xs sm:text-sm"
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