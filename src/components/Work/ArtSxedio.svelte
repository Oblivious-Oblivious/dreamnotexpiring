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

<Article number="no. 12" date="2018">
    <Title
        name="ARTSXEDIO"
        link="https://github.com/Oblivious-Oblivious/ArtSxedio"
        link_type="Website"
    />

    <Intro content="
        Website showcasing paintings.
    "/>

    <div class="videos">
        <video autoplay muted loop>
            <source src="/video/artsxedio1.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <video autoplay muted loop>
            <source src="/video/artsxedio2.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>

    <Content
        headline="Technologies used"
        description=""
    >
        <Technology
            title="MongoDB"
            link="https://www.mongodb.com"
            role="DATABASE"
        />
        <Technology
            title="Express"
            link="https://expressjs.com"
            role="BACK END"
        />
        <Technology
            title="Angular"
            link="https://angular.io"
            role="FRONT END"
        />
        <Technology
            title="Node"
            link="https://nodejs.org/en"
            role="RUNTIME"
        />
        <Technology
            title="Sass"
            link="https://sass-lang.com"
            role="CSS PREPROCESSOR"
        />
        <Technology
            title="Typescript"
            link="https://www.typescriptlang.org"
            role="TYPE SYSTEM"
        />
    </Content>
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
        box-shadow: var(--neuromorphic-shadow2);
        border-radius: 0.5vw;
    }
</style>
