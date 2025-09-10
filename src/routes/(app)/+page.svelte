<script>
import StarterPack from "$lib/components/+StarterPack.svelte";
import HeroImage from "$lib/components/+heroImage.svelte";
import TopProducts from "$lib/components/+TopProducts.svelte";
import About from "$lib/components/+About.svelte";
import Podcasts from "$lib/components/+Podcasts.svelte";
import Header from "$lib/components/+header.svelte";
import InfoBanner2 from "$lib/components/+infoBanner2.svelte";
import Footer from "$lib/components/+footer.svelte";
import InfoBanner from "$lib/components/+infoBanner.svelte";
import FaqSection from "$lib/components/+faqSection.svelte";
</script>

<svelte:head>
    <title>OliwaWypływa</title>
</svelte:head>

<HeroImage />
<InfoBanner2 />
<FaqSection />
<TopProducts />
<About />
<Podcasts />
<StarterPack />
