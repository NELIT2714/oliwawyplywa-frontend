// src/routes/shop/products/[product_id]/+page.server.js
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const productUrl = params.product_url;

	const products = [
		{
			name: "Oliwa Premium",
			url: "oliwa-premium",
			description:
				"Najlepsza oliwa z pierwszego tłoczenia, intensywny smak i aromat.",
			volume: "500ml",
			image: "/images/top.jpg",
			price: "49,99 PLN",
		},
		{
			name: "Miód Naturalny",
			url: "miod-naturalny",
			description: "Czysty miód pszczeli, bez dodatków.",
			volume: "250g",
			image: "/images/miod.jpg",
			price: "29,99 PLN",
		},
	];

	const product = products.find((p) => p.url === productUrl);

	if (!product) {
		throw error(404, "Produkt nie został znaleziony");
	}

	return {
		product_url: productUrl,
		product,
	};
}
