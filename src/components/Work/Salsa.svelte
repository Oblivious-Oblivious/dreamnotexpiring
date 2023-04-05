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

<Article number="no. 4" date="2023">
    <Title
        name="SALSA"
        link="https://apps.apple.com/app/salsa-pomodoro-timer/id1669985996"
        link_type="AppStore"
    />

    <Intro content="
        A minimalistic app for pomodoro timers.
    "/>

    <Content
        headline="Technologies used"
        description=""
    >
        <a href="https://www.swift.org" target="_blank" rel="noopener noreferrer" draggable="false">Swift</a>
        ................................................................................................................................................. MAIN LANGUAGE<br>
        <a href="https://github.com/Oblivious-Oblivious/swispec" target="_blank" rel="noopener noreferrer" draggable="false">swispec</a>
        ............................................................................................................................................................ TESTING<br>
    </Content>

    <Content
        headline=""
        description=""
    >
        <div class="salsa-videos">
            <video autoplay muted loop>
                <source src="/video/salsa1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video autoplay muted loop>
                <source src="/video/salsa2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video autoplay muted loop>
                <source src="/video/salsa3.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </Content>

    <Content
        headline="Description"
        description="
            Whether you are studying or working or doing chores, you can
            finish any task without distractions.  Following the pomodoro
            method you can divide tasks approprately, keeping motivation
            and focus to maximum.  With salsa you can set different
            combinations of timers, decide if you want long breaks and
            choose the number of sets you are aiming to complete.
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

    .salsa-videos {
        display: flex;
        gap: 1vw;
        width: 100%;
    }

    video {
        width: 32.2%;
        box-shadow: var(--neuromorphic-shadow2);
        border-radius: 1.6vw;
    }
</style>
