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

<Article number="no. 4" date="2023">
    <Title
        name="SALSA: POMODORO TIMER"
        link="https://apps.apple.com/app/salsa-pomodoro-timer/id1669985996"
        link_type="AppStore"
    />
</Article>

<Copyright/>

<style>
</style>
