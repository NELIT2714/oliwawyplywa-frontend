<script>

	let isOpen = false;
</script>

<div class="font-roboto text-white text-center py-3 flex flex-col md:flex-row justify-center items-center w-full bg-[#a57c0c]">
	<p class="text-sm text-center ">Zakupy powyżej 350 PLN - dostawa gratis!</p>
</div>

<header class="w-full bg-white border-b border-gray-300 p-4">
	<div class="container mx-auto flex items-center justify-between md:px-52 mt-2">

		<!-- Lewa sekcja: MENU (desktop) -->
		<nav class="hidden md:flex gap-5 text-xs sm:text-sm font-gothic font-semibold tracking-wider">

		<a href="/sklep" class="text-blue-600">SKLEP</a>
			<a href="#top" class="text-blue-600">NASZ TOP</a>
			<a href="#about" class="text-blue-600">ZBIORY</a>
			<a href="#faq" class="text-blue-600">FAQ</a>
			<a href="#kontakt" class="text-blue-600">KONTAKT</a>
		</nav>

		<!-- Hamburger (mobile) -->
		<button class="md:hidden text-2xl" on:click={() => (isOpen = !isOpen)} aria-label="Menu">
			<i class="bi bi-list"></i>
		</button>

		<!-- Środek: LOGO (wycentrowane absolutnie) -->
		<div class="absolute left-1/2 top-15 transform -translate-x-1/2  ">
			<img src="/images/logo.png" alt="Oliwa Wypływa Logo"
					 class="max-h-14 w-12 sm:max-h-20 sm:w-16 md:max-h-28 md:w-15" />
		</div>


		<!-- Prawa sekcja: IKONY -->
		<div class="flex items-center gap-4 text-xl md:gap-10">
			<a href="https://www.facebook.com/oliwawyplywa/" target="_blank" aria-label="Facebook" class="text-blue-600">
				<i class="bi bi-facebook"></i>
			</a>
			<a href="https://www.instagram.com/oliwa_wyplywa/" target="_blank" aria-label="Instagram" class="text-blue-600">
				<i class="bi bi-instagram"></i>
			</a>
<!--			<a href="/konto" aria-label="Konto" class="text-blue-600">-->
<!--				<i class="bi bi-person"></i>-->
<!--			</a>-->
<!--			<a href="/koszyk" aria-label="Koszyk" class="text-blue-600">-->
<!--				<i class="bi bi-cart"></i>-->
<!--			</a>-->
		</div>
	</div>

	<!-- MENU mobilne (rozwijane) -->
	{#if isOpen}
		<div class="md:hidden mt-4 space-y-2 text-center text-base font-medium">
			<a href="/sklep" class="block hover:text-blue-600">SKLEP</a>
			<a href="#top" class="block hover:text-blue-600">NASZ TOP</a>
			<a href="#about" class="block hover:text-blue-600">ZBIORY</a>
			<a href="#faq" class="block hover:text-blue-600">FAQ</a>
			<a href="#kontakt" class="block hover:text-blue-600">KONTAKT</a>
		</div>
	{/if}
</header>
