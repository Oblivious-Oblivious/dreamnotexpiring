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

<MobileArticle number="no. 5" date="2023">
    <MobileTitle
        name="AEROCSS"
        link="https://github.com/Oblivious-Oblivious/AeroCSS"
        link_type="GitHub"
    />

    <MobileIntro content="
        CSS framework inspired by the utility classes of tailwind.
    "/>

    <MobileContent
        headline="Technologies used"
        description=""
    >
        <MobileTechnology
            title="Sass"
            link="https://sass-lang.com"
            role="MAIN LANGUAGE"
        />
        <MobileTechnology
            title="Gulp"
            link="https://gulpjs.com"
            role="AUTOMATION"
        />
    </MobileContent>

    <MobileContent
        headline=""
        description=""
    >
        <div class="videos">
            <video autoplay muted loop playsinline>
                <source src="/video/aerocss.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </MobileContent>

    <MobileContent
        headline="Description"
        description="
            Aero CSS is a css framework written in sass, inheritic from the
            utility-first design of tailwind. It offers utility classes for
            all basic css allowing for in-line html styling as well as a
            customized color pallete, revamped typography, an automatic grid
            system, filters, effects and transitions, classes for paddings
            and margins.  It all compiles to a single exported css file.
        "
    />
</MobileArticle>

<MobileCopyright/>

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
