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

<Article number="no. 12" date="2018">
    <Title
        name="ARTSXEDIO"
        link="https://github.com/Oblivious-Oblivious/ArtSxedio"
        link_type="Website"
    />

    <Intro content="
        Website showcasing paintings.
    "/>

    <Content
        headline="Technologies used"
        description=""
    >
        <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer" draggable="false">MongoDB</a>
        ........................................................................................................................................................ DATABASE<br>
        <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer" draggable="false">Express</a>
        ............................................................................................................................................................. BACK END<br>
        <a href="https://angular.io" target="_blank" rel="noopener noreferrer" draggable="false">Angular</a>
        ......................................................................................................................................................... FRONT END<br>
        <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" draggable="false">Node</a>
        ................................................................................................................................................................... RUNTIME<br>
        <a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer" draggable="false">Sass</a>
        .............................................................................................................................................. CSS PREPROCESSOR<br>
        <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" draggable="false">Typescript</a>
        ................................................................................................................................................ TYPE SYSTEM<br>
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
