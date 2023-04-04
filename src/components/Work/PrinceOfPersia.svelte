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

<Article number="no. 13" date="2016">
    <Title
        name="PRINCE OF PERSIA"
        link="https://scratch.mit.edu/projects/106498485/"
        link_type="Scratch"
    />
</Article>

<Copyright/>

<style>
</style>
