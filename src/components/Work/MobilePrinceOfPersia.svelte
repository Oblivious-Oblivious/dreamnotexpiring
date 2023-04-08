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

<MobileArticle number="no. 13" date="2016">
    <MobileTitle
        name="PRINCE OF PERSIA"
        link="https://scratch.mit.edu/projects/106498485/"
        link_type="Scratch"
    />

    <MobileIntro content="
        A reimagining of the original 1989 Prince of Persia game
        created on the immersive WYSIWYG educational platform Scratch.
    "/>

    <MobileContent
        headline="Technologies used"
        description=""
    >
        <MobileTechnology
            title="Scratch"
            link="https://scratch.mit.edu"
            role="ENVIRONMENT"
        />
    </MobileContent>

    <MobileContent
        headline=""
        description=""
    >
        <div class="videos">
            <video class="video-1" autoplay muted loop playsinline>
                <source src="/video/princeofpersia1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <br>
        <div class="videos">
            <video class="video-2" autoplay muted loop playsinline>
                <source src="/video/princeofpersia2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <br>
        <div class="videos">
            <video class="video-3" autoplay muted loop playsinline>
                <source src="/video/princeofpersia3.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </MobileContent>
</MobileArticle>

<MobileCopyright/>

<style>
    .videos {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    video {
        width: 100%;
        box-shadow: var(--neumorphic-shadow2);
        border-radius: 0.5vw;
    }
</style>
