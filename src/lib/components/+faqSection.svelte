<script>
	let activeIndex = null;

	const faqs = [
		{
			question: "Wyjątkowy smak?",
			answer: "Wyjątkowy smak oliwy wynika z lokalizacji gaju oliwnego na przedgórzu gór Tajget, w niewielkiej odległości od morza, na zboczu doliny z południową ekspozycją. Do gaju docierają wiatry znad morza, dające odpowiednią wilgotność. Do tego dochodzi wiek drzew (od 60 do 120 lat), okres, w którym są zbierane oliwki (grudzień i styczeń), świetna odmiana Koroneiki, na którą Grecy mówią Fasolakia. Jednak najważniejsza jest wielopokoleniowa tradycja właścicieli gaju. Costas należy do piątego pokolenia zajmującego się zbieraniem i wytłaczaniem oliwy."
		},
		{
			question: "Jakość?",
			answer: "Jakość naszej oliwy łatwo samemu rozpoznać. Na początku zapach, potem gęstość i barwę, a na końcu smak. Nalana na spodek, cieknie powoli, przemieszcza się jak ślimak. Na białym tle widać również jej zielony kolor a także, jeśli była wstrząśnięta przed nalaniem, drobiny osadu. To po prostu najwyższej klasy mętna oliwa EXTRA EXTRA VIRGIN tłoczona na zimno."
		},
		{
			question: "Nasze zbiory?",
			answer: "Miejsce zbiorów to Grecja - Półwysep Peloponez - Region Kalamata - okolice wioski Drosia i Milioti.\n" +
				"\n" +
				"Okres zbiorów: w zależności od sezonu letniego, ilości deszczu, temperatur oraz ilości dni słonecznych w danym roku.\n" +
				"Zwykle zbiory rozpoczynają się około pierwszego tygodnia grudnia, a kończą najpóźniej w ostatnich dniach stycznia następnego roku."
		},

		{
			question: "Odmiana oliwek?",
			answer: "Odmiana oliwek: Koroneiki (dla Greków „fasolakia”), zbierana zielona, niedojrzała. Jest to mała oliwka, faktycznie wielkością przypominająca ziarno dużej fasoli."
		},
		{
			question: "Gdzie spróbować?",
			answer: "Oliwy najlepiej spróbować w ekologicznych delikatesach. W większości „naszych” sklepów znajdą Państwo butelkę do degustacji. Lista sklepów z naszymi produktami znajduje się na FB. Mnie można spotkać regularnie w Warszawie w Ursusie. Na targowisku przy ulicy Gierdziejewskiego, jestem w każdą sobotę w godzinach 8 – 12., gdzie częstuję nie tylko czystą oliwą, ale również kilkoma rodzajami oliw smakowych. Serdecznie zapraszam, jednak wcześniej proszę o telefon. Oliwa wypływa także na rozmaitych targach świątecznych i wydarzeniach specjalnych, o których informacja pojawiać się będzie na FB."
		}

	];

	function toggle(index) {
		activeIndex = activeIndex === index ? null : index;
	}
</script>

<section class="bg-white py-12 px-4 md:px-10 max-w-5xl mx-auto">
	<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 font-gothic text-blue-900">
		FAQ – najczęściej zadawane pytania
	</h2>

	<div class="space-y-4">
		{#each faqs as faq, i}
			<div class="border border-blue-800  rounded-lg overflow-hidden">
				<button
					on:click={() => toggle(i)}
					class="w-full flex justify-between items-center px-5 py-4 bg-gradient-to-r from-cyan-50 to-blue-200 hover:from-cyan-100 hover:to-blue-200 transition-colors font-semibold tracking-wide text-blue-900"
				>
					<span>{faq.question}</span>
					<i class="bi bi-chevron-down text-xl transform transition-transform duration-300" class:rotate-180={activeIndex === i}></i>
				</button>

				{#if activeIndex === i}
					<div class="px-5 py-4 bg-white text-gray-700">
						{faq.answer}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
