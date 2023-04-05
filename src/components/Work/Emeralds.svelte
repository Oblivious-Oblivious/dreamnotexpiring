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

<Article number="no. 7" date="2021">
    <Title
        name="EMERALDS"
        link="https://github.com/Oblivious-Oblivious/Emeralds"
        link_type="GitHub"
    />

    <Intro content="
        A module manager for continuous integration for C applications
    "/>

    <Content
        headline="Technologies used"
        description=""
    >
        <a href="https://crystal-lang.org" target="_blank" rel="noopener noreferrer" draggable="false">Crystal</a>
        ................................................................................................................................................ MAIN LANGUAGE<br>
        <a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer" draggable="false">GitHub Actions</a>
        ............................................................................................................. CONTINUOUS INTEGRATION<br>
        <a href="https://circleci.com" target="_blank" rel="noopener noreferrer" draggable="false">CircleCI</a>
        ......................................................................................................................... CONTINUOUS INTEGRATION<br>
    </Content>

    <Content
        headline="Description"
        description="
            Emeralds offers decentralised dependency management, automated
            testing and continuous integration for rapid development. Any
            C application or library can be packaged as an `Emerald` with
            a yaml file which allows distribution via git.  Behaves similarly
            to npm in that it saves all modules in the dependency tree
            recursively in the system.
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
