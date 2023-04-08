<script>
    import { onMount } from "svelte";
    import { underline_value } from "@persistence/underline_value";
    import Article from "@components/Article/Article.svelte";
    import Title from "@components/Article/Title.svelte";
    import Intro from "@components/Article/Intro.svelte";
    import Content from "@components/Article/Content.svelte";
    import Technology from "@components/Article/Technology.svelte";
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
        <Technology
            title="Crystal"
            link="https://crystal-lang.org"
            role="MAIN LANGUAGE"
        />
        <Technology
            title="GitHub Actions"
            link="https://docs.github.com/en/actions"
            role="CONTINUOUS INTEGRATION"
        />
        <Technology
            title="CircleCI"
            link="https://circleci.com"
            role="CONTINUOUS INTEGRATION"
        />
    </Content>

    <Content
        headline=""
        description=""
    >
        <div class="videos">
            <video autoplay muted loop>
                <source src="/video/emeralds1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video autoplay muted loop>
                <source src="/video/emeralds2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
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
    .videos {
        display: flex;
        gap: 1vw;
        width: 100%;
    }

    video {
        width: 49.3%;
        box-shadow: var(--neumorphic-shadow2);
        border-radius: 0.5vw;
    }
</style>
