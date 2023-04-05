<script>
    import { onMount } from "svelte";
    import { underline_value } from "@persistence/underline_value";
    import Article from "@components/Article/Article.svelte";
    import Title from "@components/Article/Title.svelte";
    import Intro from "@components/Article/Intro.svelte";
    import Content from "@components/Article/Content.svelte";
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

    <Intro content="
        A reimagining of the original 1989 Prince of Persia game
        created on the immersive WYSIWYG educational platform Scratch.
    "/>

    <Content
        headline="Technologies used"
        description=""
    >
        <a href="https://scratch.mit.edu" target="_blank" rel="noopener noreferrer" draggable="false">Scratch</a>
        ................................................................................................................. DEVELOPMENT ENVIRONMENT<br>
    </Content>
</Article>

<Copyright/>

<style>
    a {
        font-style: italic;
    }

    a:hover {
        color: var(--accent-color);
    }
</style>
