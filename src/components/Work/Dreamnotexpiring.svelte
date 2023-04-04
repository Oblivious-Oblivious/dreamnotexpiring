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

<Article number="no. 3" date="2023">
    <Title
        name="DREAMNOTEXPIRING"
        link="https://www.dreamnotexpiring.com"
        link_type="Website"
    />
</Article>

<Copyright/>

<style>
</style>
