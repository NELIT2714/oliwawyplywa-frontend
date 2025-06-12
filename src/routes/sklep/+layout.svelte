<script>

import Categories from '$lib/components/shop/Categories.svelte';
import Menu from '$lib/components/shop/Menu.svelte';


import "$lib/context/styles/app.css";
import InfoBannerShop from "$lib/components/shop/InfoBannerShop.svelte";
import TopProducts from '../../lib/components/+TopProducts.svelte';
	import StarterPack from '../../lib/components/+StarterPack.svelte';
import Slider from "$lib/components/shop/Slider.svelte";



</script>
<InfoBannerShop />
<Menu />
<Categories />
<TopProducts />
<StarterPack />

<main class="">
	<slot />

</main>

