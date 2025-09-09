import { products } from "$lib/stores/products.js";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const product = products.find((p) => p.id.toString() === params.id);

	if (!product) {
		throw error(404, "Produkt nie znaleziony");
	}

	return {
		product,
	};
}
