<script>
    import { onMount } from "svelte";
    import MobileArticle from "@components/Article/MobileArticle.svelte";
    import MobileTitle from "@components/Article/MobileTitle.svelte";
    import MobileIntro from "@components/Article/MobileIntro.svelte";
    import MobileContent from "@components/Article/MobileContent.svelte";
    import MobileTechnology from "@components/Article/MobileTechnology.svelte";
    import MobileCopyright from "@components/Article/MobileCopyright.svelte";

    onMount(() => {
        window.dispatchEvent(new CustomEvent("on-mobile-about"));
    });
</script>

<MobileArticle number="no. 12" date="2018">
    <MobileTitle
        name="ARTSXEDIO"
        link="https://github.com/Oblivious-Oblivious/ArtSxedio"
        link_type="Website"
    />

    <MobileIntro content="
        Website showcasing paintings.
    "/>

    <div class="videos">
        <video autoplay muted loop playsinline>
            <source src="/video/artsxedio1.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <video autoplay muted loop playsinline>
            <source src="/video/artsxedio2.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>

    <MobileContent
        headline="Technologies used"
        description=""
    >
        <MobileTechnology
            title="MongoDB"
            link="https://www.mongodb.com"
            role="DATABASE"
        />
        <MobileTechnology
            title="Express"
            link="https://expressjs.com"
            role="BACK END"
        />
        <MobileTechnology
            title="Angular"
            link="https://angular.io"
            role="FRONT END"
        />
        <MobileTechnology
            title="Node"
            link="https://nodejs.org/en"
            role="RUNTIME"
        />
        <MobileTechnology
            title="Sass"
            link="https://sass-lang.com"
            role="CSS PREPROCESSOR"
        />
        <MobileTechnology
            title="Typescript"
            link="https://www.typescriptlang.org"
            role="TYPE SYSTEM"
        />
    </MobileContent>
</MobileArticle>

<MobileCopyright/>

<style>
    .videos {
        display: flex;
        flex-direction: column;
        gap: 10vw;
        width: 100%;
    }

    video {
        width: 100%;
        box-shadow: var(--neumorphic-shadow2);
        border-radius: 0.5vw;
    }
</style>
