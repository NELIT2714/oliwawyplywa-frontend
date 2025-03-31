<script>
	import Header from "$lib/components/+header.svelte";
	import Footer from "$lib/components/+footer.svelte";

	import "$lib/context/styles/app.css";
</script>

<Header/>

<main>
	<slot/>
</main>

<Footer/>