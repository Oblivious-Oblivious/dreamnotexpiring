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

<Article number="no. 11" date="2019 - 2020">
    <Title
        name="CDATALIB"
        link="https://github.com/Oblivious-Oblivious/cDataLib"
        link_type="GitHub"
    />

    <Intro content="
        A helper function library writter in C
        containing multiple efficient data structures.
    "/>

    <Content
        headline="Technologies used"
        description=""
    >
        <Technology
            title="C language"
            link="https://openlibrary.org/books/OL4558528M/The_C_programming_language"
            role="MAIN LANGUAGE"
        />
        <Technology
            title="cSpec"
            link="https://github.com/Oblivious-Oblivious/cSpec"
            role="TESTING"
        />
    </Content>

    <Content
        headline=""
        description=""
    >
        <div class="photos">
            <div class="photo">
                <img src="/img/cdatalib1.jpg" alt="cDataLib" draggable="false">
            </div>
        </div>
    </Content>

    <Content
        headline="Description"
        description="
            cDataLib brings some cross platform, higher level features
            meant to be used mainly on embedded as well as high efficient
            code bases.  It uses `Emerald` configured libraries.
        "
    />
</Article>

<Copyright/>

<style>
    .photos {
        display: flex;
        gap: 1vw;
        width: 100%;
    }

    .photo img {
        width: 100%;
        box-shadow: var(--neumorphic-shadow3);
        border-radius: 0.4vw;
    }
</style>
