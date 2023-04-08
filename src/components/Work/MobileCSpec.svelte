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

<MobileArticle number="no. 2" date="2021 - PRESENT">
    <MobileTitle
        name="CSPEC"
        link="https://github.com/Oblivious-Oblivious/cSpec"
        link_type="GitHub"
    />

    <MobileIntro content="
        A lightweight, compile time unit testing library
        for TDD and BDD models inspired from ruby's rspec.
    "/>

    <MobileContent
        headline="Technologies used"
        description=""
    >
        <MobileTechnology
            title="C language"
            link="https://openlibrary.org/books/OL4558528M/The_C_programming_language"
            role="MAIN LANGUAGE"
        />
    </MobileContent>

    <MobileContent
        headline=""
        description=""
    >
        <div class="videos">
            <video autoplay muted loop playsinline>
                <source src="/video/cspec.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </MobileContent>

    <MobileContent
        headline="Importance of testing"
        description="
            Modern programming has proven harder to do that most expected.
            Long gone are the days of simple programs and simple operations.
            Recent software is a mess of strongly dependent internal parts
            with programmers trying to untangle them as best they can.  Tests
            are an integral component of the process of refactoring.  Without
            them, it is simply not possible.  Tests therefore serve a higher
            purpose, having less to do with proving correctness, and much
            more to do with have test coverage for future code enhancements,
            deletions, or refactorings.
        "
    />

    <MobileContent
        headline="Why is BDD better than other forms of testing"
        description="
            Behaviour driven development focuses on human collaboration.
            It bridges the gaps between stakeholders, designers and
            developers, because in a BDD spec one might include user flow
            information, as well as tests and documentation all together.
            Each professional can focus on their own specialization while
            collaborating on the same piece of information.  That ultimately
            provides much greater insight on the direction and implementation
            of the product as both technical and non-technical people can
            contribute.  The main advantage of BDD in comparison to TDD or
            unit-testing after the fact, is that it provides descriptions
            of `how` software is should behave, instead of internal code
            information only developers could understand.
        "
    />
</MobileArticle>

<MobileCopyright/>

<style>
    .videos {
        display: flex;
        gap: 1vw;
        width: 100%;
    }

    video {
        width: 100%;
        box-shadow: var(--neumorphic-shadow2);
        border-radius: 0.5vw;
    }
</style>
