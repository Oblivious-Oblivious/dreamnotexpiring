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

<MobileArticle number="no. 7" date="2021">
    <MobileTitle
        name="EMERALDS"
        link="https://github.com/Oblivious-Oblivious/Emeralds"
        link_type="GitHub"
    />

    <MobileIntro content="
        A module manager for continuous integration for C applications
    "/>

    <MobileContent
        headline="Technologies used"
        description=""
    >
        <MobileTechnology
            title="Crystal"
            link="https://crystal-lang.org"
            role="MAIN LANGUAGE"
        />
        <MobileTechnology
            title="GitHub Actions"
            link="https://docs.github.com/en/actions"
            role="CI"
        />
        <MobileTechnology
            title="CircleCI"
            link="https://circleci.com"
            role="CI"
        />
    </MobileContent>

    <MobileContent
        headline=""
        description=""
    >
        <div class="videos">
            <video autoplay muted loop playsinline>
                <source src="/video/emeralds1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video autoplay muted loop playsinline>
                <source src="/video/emeralds2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </MobileContent>

    <MobileContent
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
