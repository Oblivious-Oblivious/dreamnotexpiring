<script>
    import { onMount } from "svelte";
    import { underline_value } from "@persistence/underline_value";
    import Article from "@components/Article/Article.svelte";
    import Title from "@components/Article/Title.svelte";
    import Copyright from "@components/Article/Copyright.svelte";
    import Intro from "@components/Article/Intro.svelte";

    onMount(() => {
        $underline_value = "";
    });
</script>

<Article number="no. 8" date="2021 - ?">
    <Title
        name="DYNADESIGN"
        link="https://github.com/Oblivious-Oblivious/DynaDesign"
        link_type="GitHub"
    />

    <Intro content="
        Hardware design for the new age.
    "/>
</Article>

<Copyright/>

<style>
</style>
