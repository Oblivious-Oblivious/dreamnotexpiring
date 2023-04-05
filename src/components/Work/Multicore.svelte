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
        <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer" draggable="false">Ruby</a>
        ............................................................................................................................................................. MAIN LOGIC<br>
        <a href="https://doc.qt.io/qt-6/qmlapplications.html" target="_blank" rel="noopener noreferrer" draggable="false">QML</a>
        ............................................................................................................................................................ UI GRAPHICS<br>
        <a href="https://www.stroustrup.com/4th.html" target="_blank" rel="noopener noreferrer" draggable="false">C++</a>
        .......................................................................................................................................... EXTERNAL LIBRARIES<br>
        <a href="https://openlibrary.org/books/OL4558528M/The_C_programming_language" target="_blank" rel="noopener noreferrer" draggable="false">C</a>
        ........................................................................................................................................ PENTESTING SOFTWARE<br>
        <a href="https://www.swig.org" target="_blank" rel="noopener noreferrer" draggable="false">SWIG</a>
        .................................................................................................................................. LANGUAGE EXTENSIONS<br>
    </Content>

    <Content
        headline=""
        description=""
    >
        <div class="photos">
            <div class="photo">
                <img src="/img/multicore1.jpg" alt="MultiCore">
            </div>
            <div class="photo">
                <img src="/img/multicore2.jpg" alt="MultiCore">
            </div>
            <div class="photo">
                <img src="/img/multicore3.jpg" alt="MultiCore">
            </div>
            <div class="photo">
                <img src="/img/multicore4.jpg" alt="MultiCore">
            </div>
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
