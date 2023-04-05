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

<Article number="no. 13" date="2016">
    <Title
        name="PRINCE OF PERSIA"
        link="https://scratch.mit.edu/projects/106498485/"
        link_type="Scratch"
    />

    <Intro content="
        A reimagining of the original 1989 Prince of Persia game
        created on the immersive WYSIWYG educational platform Scratch.
    "/>

    <Content
        headline="Technologies used"
        description=""
    >
        <a href="https://scratch.mit.edu" target="_blank" rel="noopener noreferrer" draggable="false">Scratch</a>
        ................................................................................................................. DEVELOPMENT ENVIRONMENT<br>
    </Content>

    <Content
        headline=""
        description=""
    >
        <div class="videos">
            <video class="video-1" autoplay muted loop>
                <source src="/video/princeofpersia1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <br>
        <div class="videos">
            <video class="video-2" autoplay muted loop>
                <source src="/video/princeofpersia2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <br>
        <div class="videos">
            <video class="video-3" autoplay muted loop>
                <source src="/video/princeofpersia3.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
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

    .videos {
        display: flex;
        width: 100%;
    }

    video {
        width: 49.3%;
        box-shadow: var(--neuromorphic-shadow2);
        border-radius: 0.5vw;
    }

    .video-2 {
        transform: translateX(50%);
    }
    .video-3 {
        transform: translateX(100%);
    }
</style>
