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
        <Technology
            title="Sass"
            link="https://sass-lang.com"
            role="MAIN LANGUAGE"
        />
        <Technology
            title="Gulp"
            link="https://gulpjs.com"
            role="AUTOMATION"
        />
    </Content>

    <Content
        headline=""
        description=""
    >
        <div class="videos">
            <video autoplay muted loop>
                <source src="/video/aerocss.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
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
    .videos {
        display: flex;
        gap: 1vw;
        width: 100%;
    }

    video {
        width: 100%;
        box-shadow: var(--neumorphic-shadow3);
        border-radius: 0.5vw;
    }
</style>
