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

<Article number="no. 9" date="2020 - 2021">
    <Title
        name="SKELETON"
        link="https://github.com/Oblivious-Oblivious/skeleton"
        link_type="GitHub"
    />
</Article>

<Copyright/>

<style>
</style>
