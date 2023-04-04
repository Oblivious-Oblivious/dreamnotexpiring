<script>
    import { onMount } from "svelte";
    import { underline_value } from "@persistence/underline_value";
    import Article from "@components/Article/Article.svelte";
    import Title from "@components/Article/Title.svelte";
    import Copyright from "@components/Article/Copyright.svelte";

    onMount(() => {
        $underline_value = "";
    });
</script>

<Article number="no. 10" date="2020">
    <Title
        name="CLITTERBIN"
        link="https://github.com/Oblivious-Oblivious/cLitterBin"
        link_type="GitHub"
    />
</Article>

<Copyright/>

<style>
</style>
