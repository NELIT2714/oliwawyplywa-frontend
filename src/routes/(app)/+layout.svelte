<script>

	import Header from "$lib/components/+header.svelte";
	import Footer from "$lib/components/+footer.svelte";
	import InfoBanner from "$lib/components/+infoBanner.svelte";
	import HeroImage from "$lib/components/+heroImage.svelte";
	import InfoBanner2 from "$lib/components/+infoBanner2.svelte";
	import TopProducts from "$lib/components/+TopProducts.svelte";
	import About from "$lib/components/+About.svelte";
	import Podcasts from "$lib/components/+Podcasts.svelte";
	import StarterPack from "$lib/components/+StarterPack.svelte";
	import FaqSection from "$lib/components/+faqSection.svelte";
	import "$lib/context/styles/app.css";


</script>


<Header />

<main class="">
	<slot />
</main>

<Footer />

