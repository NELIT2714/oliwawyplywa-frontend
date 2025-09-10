<style>
    .relative {
    }
</style>
<script>
	let isOpen = false;
	let showDropdown = false;
	let hideTimeout;

	function onMouseEnter() {
		clearTimeout(hideTimeout);
		showDropdown = true;
	}

	function onMouseLeave() {
		hideTimeout = setTimeout(() => {
			showDropdown = false;
		}, 200);
	}

	import { cart } from '$lib/stores/cart';
	import { derived } from 'svelte/store';

	const cartCount = derived(cart, $cart =>
		$cart.reduce((total, item) => total + item.quantity, 0)
	);

</script>





<header class="sticky top-0 z-50 bg-white border-b border-gray-300 shadow-sm ">
	<div class="w-full px-4 sm:px-6 md:px-8 py-3 flex items-center justify-start gap-x-8">

		<!-- Logo -->
		<a href="/sklep" class="flex items-center">
			<img src="/images/logo.png" alt="Oliwa Wypływa Logo"
					 class="max-h-12 w-auto sm:max-h-16" />
		</a>

		<!-- Menu (desktop) -->
<!--		<nav class="hidden md:flex gap-4 text-sm font-gothic font-semibold tracking-wide">-->
<!--			<a href="/" class="text-blue-600 hover:underline">HOME</a>-->
<!--			<a href="/category" class="text-blue-600 hover:underline">KATEGORIE</a>-->
<!--			<a href="/rules" class="text-blue-600 hover:underline">REGULAMIN SKLEPU</a>-->
<!--			<a href="/privacy" class="text-blue-600 hover:underline">POLITYKA PRYWATNOŚCI</a>-->
<!--			<a href="/contact" class="text-blue-600 hover:underline">KONTAKT</a>-->
<!--		</nav>-->

		<nav class="hidden md:flex gap-4 text-sm font-gothic font-semibold tracking-wide relative">

			<a href="/" class="text-blue-600 hover:underline">HOME</a>

			<div
				class="relative"
				on:mouseenter={onMouseEnter}
				on:mouseleave={onMouseLeave}
			>
				<a href="" class="text-blue-600 hover:underline">KATEGORIE</a>

				{#if showDropdown}
					<div class="absolute top-full mt-2 left-0 w-48 bg-white border border-gray-300 shadow-lg rounded z-50">
						<a href="/sklep/category/" class="block px-4 py-2 hover:bg-blue-50 text-blue-700">EXTRA VIRGIN</a>
						<a href="/sklep/category/" class="block px-4 py-2 hover:bg-blue-50 text-blue-700">ESENCJA PREMIUM</a>
						<a href="/sklep/category/" class="block px-4 py-2 hover:bg-blue-50 text-blue-700">OLIWA SMAKOWA</a>
						<a href="/sklep/category/" class="block px-4 py-2 hover:bg-blue-50 text-blue-700">BOXY PREZENTOWE</a>
					</div>
				{/if}
			</div>

			<a href="/rules" class="text-blue-600 hover:underline">REGULAMIN SKLEPU</a>
			<a href="/privacy" class="text-blue-600 hover:underline">POLITYKA PRYWATNOŚCI</a>
			<a href="#kontakt" class="text-blue-600 hover:underline">KONTAKT</a>
		</nav>


		<!-- Ikony + hamburger -->
		<div class="flex items-center gap-4 text-xl md:gap-6 ml-auto">
			<a href="/account" aria-label="Konto" class="text-blue-600">
				<i class="bi bi-person"></i>
			</a>
<!--			<a href="/cart" aria-label="Koszyk" class="text-blue-600">-->
<!--				<i class="bi bi-cart"></i>-->
<!--			</a>-->

			<a href="/cart" aria-label="Koszyk" class="relative text-blue-600 inline-block">
				<i class="bi bi-cart text-2xl "></i>



				{#if $cartCount > 0}
		<span class="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
			{$cartCount}
		</span>
				{/if}
			</a>

<!--			<a href="/search" aria-label="Szukaj" class="text-blue-600">-->
<!--				<i class="bi bi-search"></i>-->
<!--			</a>-->
<!--			<a href="/wishlist" aria-label="Ulubione" class="text-blue-600">-->
<!--				<i class="bi bi-heart"></i>-->
<!--			</a>-->


<!--			<a href="https://www.facebook.com/oliwawyplywa/" target="_blank" aria-label="Facebook" class="text-blue-600">-->
<!--				<i class="bi bi-facebook"></i>-->
<!--			</a>-->
<!--			<a href="https://www.instagram.com/oliwa_wyplywa/" target="_blank" aria-label="Instagram" class="text-blue-600">-->
<!--				<i class="bi bi-instagram"></i>-->
<!--			</a>-->


			<!-- Hamburger (mobile) -->
			<button class="md:hidden text-2xl" on:click={() => (isOpen = !isOpen)} aria-label="Menu">
				<i class="bi bi-list"></i>
			</button>
		</div>
	</div>

	<!-- MENU mobilne (rozwijane) -->

	{#if isOpen}
		<div class="md:hidden px-4 py-2 space-y-2 text-left text-base font-medium border-t border-gray-200">
			<a href="/sklep" class="block hover:text-blue-600" on:click={() => isOpen = false}>HOME</a>
			<a href="#category" class="block hover:text-blue-600" on:click={() => isOpen = false}>KATEGORIE</a>

			<a href="/rules" class="block hover:text-blue-600" on:click={() => isOpen = false}>REGULAMIN SKLEPU</a>
			<a href="/privacy" class="block hover:text-blue-600" on:click={() => isOpen = false}>POLITYKA PRYWATNOŚCI</a>
			<a href="/(app)/sklep/#top" class="block hover:text-blue-600" on:click={() => isOpen = false}>NASZ TOP</a>
			<a href="/(app)/sklep/#starter" class="block hover:text-blue-600" on:click={() => isOpen = false}>ZESTAW STARTOWY</a>
			<a href="/contact" class="block hover:text-blue-600" on:click={() => isOpen = false}>KONTAKT</a>
		</div>
	{/if}


</header>
