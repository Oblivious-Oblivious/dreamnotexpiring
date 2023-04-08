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

<MobileArticle number="no. 1" date="2022 - PRESENT">
    <MobileTitle
        name="MARGARET"
        link="https://github.com/Oblivious-Oblivious/margaret"
        link_type="GitHub"
    />

    <MobileIntro content="
        An object oriented language system
        based on ruby and smalltalk.
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
        <MobileTechnology
            title="cSpec"
            link="https://github.com/Oblivious-Oblivious/cSpec"
            role="TESTING"
        />
        <MobileTechnology
            title="bdwgc"
            link="https://github.com/ivmai/bdwgc"
            role="MEMORY MANAGEMENT"
        />
        <MobileTechnology
            title="Readline"
            link="https://tiswww.case.edu/php/chet/readline/rltop.html"
            role="TERMINAL EMULATION"
        />
    </MobileContent>

    <MobileContent
        headline="Description"
        description="
            Margaret is a modern programming language focused around objects and messages.
            It offers powerful literals, easy to use objects and smalltalk-like message structures.
            Every value in Margaret is treated as an object.
            There are no reserved words and no explicit syntax apart from message sends.
            Uses prototype based objects in the likes of Self or Javascript.
            Uses C-style literals like char, int, float, string.
            Implements tensors and hashes as the only built in, array-like data structures.
            Runs on a portable, lightweight and embeddable stack based VM.
            Draws (some) inpiration from Lua's VM.
        "
    />

    <MobileContent
        headline="Is this just nu-smalltalk ?"
        description="
            Smalltalk was a good starting point for a pure object oriented language.
            Having the benefit of hindsight and more computing power than even,
            we can try revisit these old patterns, enriched with new techniques
            like modern primitive literals and functional programming ideas.
            We can use fast and efficient virtual machines and interpreters,
            as well as better memory management techinques, to create a platform
            for experimentation in human-centric applications.
        "
    />

    <MobileContent
        headline="Why is margaret written in C ?"
        description="
            It might make sense to code a new interpreter in the highest level
            language possible, and initially it was designed in ruby, but was
            quickly refactored in C.  The main reason for such a choice was the
            fact that margaret is a virtual machine based language.  Considering
            that there is intermediate bytecode that is actually being executed,
            and taking into account the need for dynamic modification of internal
            object structures and their messages, the interpreter that executes
            the bytecodes must be as efficient as possible.  C is a solid choice
            not only for speed but for memory efficiency as well.  The fact that
            the language is not a pure compiler draws certain limits in the
            speed of its execution.  Most likely margaret can never have an
            efficient self bootstrap, and will depend on C (or some other low
            level fast language) for a long time.
        "
    />

    <MobileContent
        headline="Modern data structures"
        description="
            As a language of the 2020s, margaret strives to be the first step
            in a new wave of languages, focused on the needs of today. Any
            language of the 90s had a flair of the era of scripting, faster
            to MVP languages, ones like perl, python or ruby. There was an
            obvious need for easy to use data structures, that were dynamic
            since most of the software of that decade, especially with the
            emergence of web technologies, required fast paced teams that
            could get a product out in the market as fast as possible. 30 years
            later we have started to move away from simple software and instead
            looked at developing more and more complicated systems.  The tools
            we have however are not good enough.  The needs of today require
            massive collaboration between software systems, as well as newer
            and more efficient data management solutions.  Margaret utilizes
            object based literals for tensors (with a heavy-loaded API for
            tensor operations) as well as efficient hashmaps.
        "
    />
</MobileArticle>

<MobileCopyright/>
