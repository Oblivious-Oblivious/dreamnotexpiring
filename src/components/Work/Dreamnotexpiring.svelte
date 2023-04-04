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

<Article number="no. 3" date="2023">
    <Title
        name="DREAMNOTEXPIRING"
        link="https://www.dreamnotexpiring.com"
        link_type="Website"
    />

    <Intro content="
        Basically using any hipster new techonlogy I can find.
    "/>

    <Content
        headline="Technologies used"
        description=""
    >
        <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer" draggable="false">Svelte</a>
        ................................................................................................................................................... FRAMEWORK<br>
        <a href="https://astro.build" target="_blank" rel="noopener noreferrer" draggable="false">Astro</a>
        ....................................................................................................................................... META-FRAMEWORK<br>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer" draggable="false">React</a>
        .............................................................................................................................................. SOUND EFFECTS<br>
        <a href="https://postcss.org" target="_blank" rel="noopener noreferrer" draggable="false">PostCSS</a>
        .................................................................................................................................. CSS TRANSFORMER<br>
        <a href="https://greensock.com/gsap/" target="_blank" rel="noopener noreferrer" draggable="false">GSAP</a>
        ..................................................................................................................................................... ANIMATIONS<br>
        <a href="https://greensock.com/scrolltrigger/" target="_blank" rel="noopener noreferrer" draggable="false">ScrollTrigger</a>
        ........................................................................................................... SCROLL-TIED ANIMATIONS<br>
        <a href="https://lenis.studiofreight.com" target="_blank" rel="noopener noreferrer" draggable="false">Lenis</a>
        ...................................................................................................................................... SMOOTH SCROLLING<br>
        <a href="https://swup.js.org" target="_blank" rel="noopener noreferrer" draggable="false">Swup</a>
        ........................................................................................................................................ PAGE TRANSITIONS<br>
        <a href="https://github.com/lukePeavey/SplitType" target="_blank" rel="noopener noreferrer" draggable="false">SplitType</a>
        ...................................................................................................................................... TEXT SPLITTING<br>
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" draggable="false">Vercel</a>
        .................................................................................................................................................. DEPLOYMENT<br>
    </Content>

    <Content
        headline=""
        description=""
    >
        <div class="dreamnotexpiring-videos">
            <video width="1280" height="720" autoplay muted loop>
                <source src="/video/crt-intro.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video width="1280" height="720" autoplay muted loop>
                <source src="/video/work.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video width="1280" height="720" autoplay muted loop>
                <source src="/video/about.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </Content>

    <Content
        headline="Why all the new stuff ?"
        description="Why not ?"
    />

    <Content
        headline="Svelte as a framework"
        description="(SVELTE)"
    />

    <Content
        headline="Astro as a meta-framework"
        description="(ASTRO)"
    />

    <Content
        headline="Use of GSAP animations"
        description="(GSAP, SCROLLTRIGGER, SWUP)"
    />

    <Content
        headline="Some very new libraries"
        description="(LENIS)"
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

    .dreamnotexpiring-videos {
        display: flex;
        gap: 1vw;
        width: 100%;
    }

    video {
        width: 32.2%;
        box-shadow: var(--neuromorphic-shadow2);
    }
</style>
