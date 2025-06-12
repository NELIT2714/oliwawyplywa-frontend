<!-- src/lib/components/InfoBanner2.svelte -->
<style>
    .scrolling-text {
        animation: scroll-left 30s linear infinite;
        white-space: nowrap;
    }

    @keyframes scroll-left {
        0% {
            transform: translateX(100%);
        }

        100% {
            transform: translateX(-100%);
        }
    }
</style>

<div class=" font-gothic text-white w-full overflow-hidden py-6 px-4 shadow-md" style="background: #a57c0c">
	<div class="scrolling-text text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider">
		!!!   najbliższe zbiory 12 2025    najbliższe zbiory 12 2025     najbliższe zbiory 12 2025    najbliższe zbiory 12 2025   !!!
	</div>
</div>

