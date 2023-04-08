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

<Article number="no. 14" date="2015 - 2016">
    <Title
        name="MULTICORE"
        link="https://github.com/Oblivious-Oblivious/MultiCore"
        link_type="GitHub"
    />

    <Intro content="
        A platform for penetration testing using Ruby, C++ and QML.
    "/>

    <Content
        headline="Technologies used"
        description=""
    >
        <Technology
            title="Ruby"
            link="https://www.ruby-lang.org/en/"
            role="MAIN LOGIC"
        />
        <Technology
            title="QML"
            link="https://doc.qt.io/qt-6/qmlapplications.html"
            role="UI GRAPHICS"
        />
        <Technology
            title="C++"
            link="https://www.stroustrup.com/4th.html"
            role="EXTERNAL LIBRARIES"
        />
        <Technology
            title="C"
            link="https://openlibrary.org/books/OL4558528M/The_C_programming_language"
            role="PENTESTING SOFTWARE"
        />
        <Technology
            title="SWIG"
            link="https://www.swig.org"
            role="LANGUAGE EXTENSIONS"
        />
    </Content>

    <Content
        headline=""
        description=""
    >
        <div class="photos">
            <div class="photo">
                <img src="/img/multicore1.jpg" alt="MultiCore" draggable="false">
            </div>
            <div class="photo">
                <img src="/img/multicore2.jpg" alt="MultiCore" draggable="false">
            </div>
            <div class="photo">
                <img src="/img/multicore3.jpg" alt="MultiCore" draggable="false">
            </div>
            <div class="photo">
                <img src="/img/multicore4.jpg" alt="MultiCore" draggable="false">
            </div>
        </div>
    </Content>
</Article>

<Copyright/>

<style>
    .photos {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1vw;
    }

    .photo img {
        width: 100%;
        box-shadow: var(--neumorphic-shadow3);
        border-radius: 0.4vw;
    }
</style>
