/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	// Tu możesz pobrać dane z API, bazy danych lub lokalnego pliku
	const category = params.category;

	const allProducts = [
		{
			id: 1,
			name: "Oliwa Extra 1",
			description: "Tłoczona na zimno, 100% naturalna.",
			category: "extra",
			image: "../images/extra.jpg",
			price: 29.99,
		},
		{
			id: 2,
			name: "Oliwa Extra 2",
			description: "Wysoka jakość, smak śródziemnomorski.",
			category: "extra",
			image: "https://via.placeholder.com/300x200?text=Oliwa+2",
			price: 29.99,
		},
		{
			id: 3,
			name: "Oliwa Classic",
			description: "Do smażenia i gotowania.",
			category: "extra",
			image: "https://via.placeholder.com/300x200?text=Classic",
			price: 29.99,
		},
		{
			id: 4,
			name: "Oliwa Extra 3",
			description: "Bogata w antyoksydanty.",
			category: "extra",
			image: "https://via.placeholder.com/300x200?text=Oliwa+3",
		},
		{
			id: 5,
			name: "Oliwa Extra 4",
			description: "Z południa Włoch, delikatna.",
			category: "extra",
			image: "https://via.placeholder.com/300x200?text=Oliwa+4",
		},
		{
			id: 6,
			name: "Oliwa Extra 1",
			description: "Tłoczona na zimno, 100% naturalna.",
			category: "premium",
			image: "https://via.placeholder.com/300x200?text=Oliwa+1",
		},
		{
			id: 7,
			name: "Oliwa Extra 2",
			description: "Wysoka jakość, smak śródziemnomorski.",
			category: "premium",
			image: "https://via.placeholder.com/300x200?text=Oliwa+2",
			price: 29.99,
		},
		{
			id: 3,
			name: "Oliwa Classic",
			description: "Do smażenia i gotowania.",
			category: "extra",
			image: "https://via.placeholder.com/300x200?text=Classic",
			price: 29.99,
		},
		{
			id: 4,
			name: "Oliwa Extra 3",
			description: "Bogata w antyoksydanty.",
			category: "extra",
			image: "https://via.placeholder.com/300x200?text=Oliwa+3",
		},
		{
			id: 5,
			name: "Oliwa Extra 4",
			description: "Z południa Włoch, delikatna.",
			category: "extra",
			image: "https://via.placeholder.com/300x200?text=Oliwa+4",
		},
	];

	const products = allProducts.filter((p) => p.category === category);

	return {
		category,
		products,
	};
}
