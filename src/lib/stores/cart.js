import { writable } from "svelte/store";

function createCart() {
	// inicjalizacja store
	const cart = writable([]);

	// tylko w przeglądarce synchronizujemy z localStorage
	if (typeof window !== "undefined") {
		const stored = localStorage.getItem("cart");
		if (stored) {
			try {
				cart.set(JSON.parse(stored));
			} catch (e) {
				console.error("Błąd parsowania koszyka z localStorage:", e);
				cart.set([]);
			}
		}

		// zapis przy każdej zmianie
		cart.subscribe((items) => {
			localStorage.setItem("cart", JSON.stringify(items));
		});
	}

	return {
		subscribe: cart.subscribe,

		add: (product) => {
			cart.update((items) => {
				const existing = items.find((i) => i.id === product.id);
				if (existing) {
					existing.quantity += 1;
				} else {
					items.push({ ...product, quantity: 1 });
				}
				return [...items];
			});
		},

		remove: (id) => {
			cart.update((items) => items.filter((i) => i.id !== id));
		},

		updateQuantity: (id, delta) => {
			cart.update((items) => {
				return items.map((i) => {
					if (i.id === id) {
						i.quantity += delta;
						if (i.quantity < 1) i.quantity = 1;
					}
					return i;
				});
			});
		},

		clear: () => cart.set([]),
	};
}

export const cart = createCart();
