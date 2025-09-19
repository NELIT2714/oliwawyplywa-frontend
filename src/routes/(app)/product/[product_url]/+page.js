import { products } from "$lib/stores/products.js";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	console.log(products);
	console.log(params);

	// Upewniamy się, że params.id jest liczbą
	const product = products.find((p) => p.slug === params.product_url);

	console.log(product);

	if (!product) {
		throw error(404, "Produkt nie znaleziony!!!");
	}

	return { product };
}
