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

<Article number="no. 10" date="2020">
    <Title
        name="CLITTERBIN"
        link="https://github.com/Oblivious-Oblivious/cLitterBin"
        link_type="GitHub"
    />

    <Intro content="
        A garbage collector implementation,
        replacements for malloc alloc realloc and free.
    "/>

    <Content
        headline="Technologies used"
        description=""
    >
        <a href="https://openlibrary.org/books/OL4558528M/The_C_programming_language" target="_blank" rel="noopener noreferrer" draggable="false">C language</a>
        ................................................................................................................................. MAIN LANGUAGE<br>
    </Content>

    <Content
        headline=""
        description=""
    >
        <div class="photos">
            <div class="photo">
                <img src="/img/clitterbin1.jpg" alt="cLitterBin">
            </div>
            <div class="photo">
                <img src="/img/clitterbin2.jpg" alt="cLitterBin">
            </div>
        </div>
    </Content>

    <Content
        headline="Description"
        description="
            cLitterBin, is a conservative mark and sweep garbage collector
            that works as a drop in replacement for memory allocators in C.
            It hashes all new memory allocations, increasing the size of the
            bin accordingly.  When the `litter` surpases the available memory
            slots, it triggers a collection.  When collecting it sweeps the
            whole memory space for unreachable pointers, keeps them, and burns
            everything else.  It tries avoiding fragmentation of memory slots
            by rehashing the space with an increase multiplier of 1.5.
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
        display: flex;
        gap: 1vw;
        width: 100%;
    }

    .photo img {
        width: 100%;
        box-shadow: var(--neuromorphic-shadow3);
        border-radius: 0.4vw;
    }
</style>
