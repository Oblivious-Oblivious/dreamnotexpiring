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

<Article number="no. 5" date="2023">
    <Title
        name="AEROCSS"
        link="https://github.com/Oblivious-Oblivious/AeroCSS"
        link_type="GitHub"
    />

    <Intro content="
        CSS framework inspired by the utility classes of tailwind.
    "/>

    <Content
        headline="Technologies used"
        description=""
    >
        <a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer" draggable="false">Sass</a>
        .................................................................................................................................................. MAIN LANGUAGE<br>
        <a href="https://gulpjs.com" target="_blank" rel="noopener noreferrer" draggable="false">Gulp</a>
        ........................................................................................................................................................ AUTOMATION<br>
    </Content>

    <Content
        headline="Description"
        description="
            Aero CSS is a css framework written in sass, inheritic from the
            utility-first design of tailwind. It offers utility classes for
            all basic css allowing for in-line html styling as well as a
            customized color pallete, revamped typography, an automatic grid
            system, filters, effects and transitions, Classes for paddings
            and margins.  It all compiles to a single exported css file.
        "
    />
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
