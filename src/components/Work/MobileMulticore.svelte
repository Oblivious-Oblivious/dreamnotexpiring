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

<MobileArticle number="no. 14" date="2015 - 2016">
    <MobileTitle
        name="MULTICORE"
        link="https://github.com/Oblivious-Oblivious/MultiCore"
        link_type="GitHub"
    />

    <MobileIntro content="
        A platform for penetration testing using Ruby, C++ and QML.
    "/>

    <MobileContent
        headline="Technologies used"
        description=""
    >
        <MobileTechnology
            title="Ruby"
            link="https://www.ruby-lang.org/en/"
            role="MAIN LOGIC"
        />
        <MobileTechnology
            title="QML"
            link="https://doc.qt.io/qt-6/qmlapplications.html"
            role="UI GRAPHICS"
        />
        <MobileTechnology
            title="C++"
            link="https://www.stroustrup.com/4th.html"
            role="EXTERNAL LIBRARIES"
        />
        <MobileTechnology
            title="C"
            link="https://openlibrary.org/books/OL4558528M/The_C_programming_language"
            role="PENTESTING SOFTWARE"
        />
        <MobileTechnology
            title="SWIG"
            link="https://www.swig.org"
            role="LANGUAGE EXTENSIONS"
        />
    </MobileContent>

    <MobileContent
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
    </MobileContent>
</MobileArticle>

<MobileCopyright/>

<style>
    .photos {
        display: flex;
        flex-direction: column;
        gap: 10vw;
    }

    .photo img {
        width: 100%;
        box-shadow: var(--neumorphic-shadow3);
        border-radius: 0.4vw;
    }
</style>
