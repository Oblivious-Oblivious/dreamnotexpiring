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

<Article number="no. 9" date="2020 - 2021">
    <Title
        name="SKELETON"
        link="https://github.com/Oblivious-Oblivious/skeleton"
        link_type="GitHub"
    />

    <Intro content="
        A very minimal http server api serving as a
        platform for adding middleware incrementally.
    "/>

    <Content
        headline="Technologies used"
        description=""
    >
        <a href="https://crystal-lang.org" target="_blank" rel="noopener noreferrer" draggable="false">Crystal</a>
        ................................................................................................................................................ MAIN LANGUAGE<br>
        <a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer" draggable="false">GitHub Actions</a>
        ............................................................................................................. CONTINUOUS INTEGRATION<br>
    </Content>

    <Content
        headline=""
        description=""
    >
        <div class="photos">
            <div class="photo">
                <img src="/img/skeleton1.jpg" alt="Skeleton">
            </div>
            <div class="photo">
                <img src="/img/skeleton2.jpg" alt="Skeleton">
            </div>
            <div class="photo">
                <img src="/img/skeleton3.jpg" alt="Skeleton">
            </div>
            <div class="photo">
                <img src="/img/skeleton4.jpg" alt="Skeleton">
            </div>
        </div>
    </Content>

    <Content
        headline="Description"
        description="
            Skeleton is a simplistic web framework for bootstraping http
            servers for the backend.  It supports most REST operations,
            with support for adding middleware such as CORS services, or
            route handlers.  It is extremely efficient and takes the role
            of a foundational starting point for back end solutions.
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

    .photos {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1vw;
    }

    .photo img {
        width: 100%;
        box-shadow: var(--neuromorphic-shadow3);
        border-radius: 0.4vw;
    }
</style>
