<script>
    import { onMount } from "svelte";
    import { underline_value } from "@persistence/underline_value";

    onMount(() => {
        $underline_value = "";

        gsap.timeline({
            delay: 0.3,
        })
        .from(".margaret-title", {
            duration: 0.5,
            clipPath: "inset(0 100% 0 100%)",
        })
        .set(".margaret-intro-word", {
            duration: 1.5,
            autoAlpha: 1,
            stagger: 0.14,
        })
        .from([".line", ".margaret-description", ".margaret-image", ".margaret-headline"], {
            delay: 0.65,
            duration: 1.75,
            opacity: 0,
            onComplete: () => window.dispatchEvent(new CustomEvent("scrolling-start")),
        });
    });
</script>

<div class="margaret">
    <div class="margaret-image">
        <img src="/img/margaret-syntax.jpeg" alt="Margaret" draggable="false">
    </div>

    <div class="margaret-content">
        <div class="margaret-title">
            <div class="margaret-name">
                MARGARET
            </div>
            <div class="margaret-link">
                <a href="https://github.com/Oblivious-Oblivious/margaret" target="_blank" rel="noopener noreferrer" draggable="false">
                    &lt;GitHub&gt;
                </a>
            </div>
        </div>

        <div class="line"></div>

        <div class="margaret-intro">
            <div>
                <span class="margaret-intro-word">
                    An
                </span>
                <span class="margaret-intro-word">
                    object
                </span>
                <span class="margaret-intro-word">
                    oriented
                </span>
                <span class="margaret-intro-word">
                    language
                </span>
                <span class="margaret-intro-word">
                    system
                </span>
                <span class="margaret-intro-word">
                    based
                </span>
                <span class="margaret-intro-word">
                    on
                </span>
                <span class="margaret-intro-word">
                    ruby
                </span>
                <span class="margaret-intro-word">
                    and
                </span>
                <span class="margaret-intro-word">
                    smalltalk.
                </span>
            </div>
        </div>

        <div class="line"></div>

        <div class="margaret-description">
            <br>
            Margaret is a modern programming language focused around <b>objects</b> and <b>messages</b>.<br>
            It offers powerful <b>literals</b>, easy to use objects and smalltalk-like message structures.<br>
            <br>

            &bull; Every value in Margaret is treated as an object.<br>
            <div class="margaret-code">
                <code>
                    &nbsp;&nbsp;&nbsp;&nbsp;(1 + 1 print,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comment new: "`1` is an object, `+` is a message",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comment new: "`Comment` is an object (yes it was intentional)",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;).<br>
                </code>
            </div>
            <br>

            &bull; There are no reserved words and no explicit syntax apart from message sends.<br>
            <div class="margaret-code">
                <code>
                    &nbsp;&nbsp;&nbsp;&nbsp;-> &lbrace;(<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True = Object subclass,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True extend: (<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#& a_boolean => a_boolean,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#and: alternate_block => alternate_block value,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#as_bit => 1,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#if_false: alternate_block => nil,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#if_false: false_alternate_block if_true: true_alternate_block => true_alternate_block value,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#if_true: alternate_block => alternate_block value,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#if_true: true_alternate_block if_false: false_alternate_block => true_alternate_block value,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#not => false,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#or: alternate_block => self,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#xor: a_block => a_block value if_true: false if_false: true,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#| a_boolean => true<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;)&rbrace; exec.<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Comment new: "That defines `true` and inserts it into the object system".<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Comment new: "You guessed it, there exists a similar one for `false`".<br>
                </code>
            </div>
            <br>

            &bull; Uses prototype based objects in the likes of Self or Javascript.<br>
            <div class="margaret-code">
                <code>
                    &nbsp;&nbsp;&nbsp;&nbsp;-> &lbrace; argc, argv | (<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Point = Object subclass,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Point attr_reader: ["x", "y"],<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Point bind:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#x: xparam y: yparam => (<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@x = xparam,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@y = yparam,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;),<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;)&rbrace;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Comment new: "We bind new methods to existing objects"
                </code>
            </div>
            <br>

            &bull; Uses C-style literals like char, int, float, string.<br>
            <div class="margaret-code">
                <code>
                    &nbsp;&nbsp;&nbsp;&nbsp;(2 + 3 print,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.2 * 0.1 / 0.01 print,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res = "concat" + "me" + "to" + "something" print,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res get_first_character print,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;)<br>
                </code>
            </div>
            <br>

            &bull; Implements tensors and hashes as the only built in, array-like data structures.<br>
            <div class="margaret-code">
                <code>
                    &nbsp;&nbsp;&nbsp;&nbsp;['a', "a", 1, 1.0, &lbrace; "k1": 42, k2: 43 &rbrace;] each: -&gt; &lbrace; elem | (<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elem print<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;)&rbrace;<br>
                </code>
            </div>
            <br>

            &bull; Runs on a portable, lightweight and embeddable stack based VM.<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&bull; Draws (some) inpiration from Lua's VM.<br>
            <br>

            &bull; "Postcard" syntax<br>
            <div class="margaret-code">
                <code>
                    &nbsp;&nbsp;&nbsp;&nbsp;#example_with_number: x =&gt; ( <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;true & false not & (nil is_nil?) if_false: -&gt; &lbrace; self halt &rbrace;,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = self size + super size,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['a', "a", 1, 1.0, &lbrace; "k1": 42, k2: 43 &rbrace;] each: -&gt; &lbrace; elem | (<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elem class name puts,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" " puts<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&rbrace;,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x &lt; y<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;)<br>
                </code>
            </div>
        </div>

        <br><br>
        <div class="margaret-headline">
            Is this just nu-smalltalk ?
        </div>
        <div class="line"></div>
        <div class="margaret-description">
            Smalltalk was a good starting point for a pure object oriented language.
            Having the benefit of hindsight and more computing power than even,
            we can try revisit these old patterns, enriched with new techniques
            like modern primitive literals and functional programming ideas.
            We can use fast and efficient virtual machines and interpreters,
            as well as better memory management techinques, to create a platform
            for experimentation in human-centric applications.
        </div>

        <br><br>
        <div class="margaret-headline">
            Why is margaret written in C ?
        </div>
        <div class="line"></div>
        <div class="margaret-description">
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
        </div>

        <br><br>
        <div class="margaret-headline">
            Modern data structures
        </div>
        <div class="line"></div>
        <div class="margaret-description">
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
        </div>

        <br><br>
        <div class="margaret-headline">
            Technologies used
        </div>
        <div class="line"></div>
        <div class="margaret-description">
            <a href="https://openlibrary.org/books/OL4558528M/The_C_programming_language" target="_blank" rel="noopener noreferrer" draggable="false">C language</a>
            .......................................................................................................................... MAIN LANGUAGE<br>
            <a href="https://github.com/Oblivious-Oblivious/cSpec" target="_blank" rel="noopener noreferrer" draggable="false">cSpec</a>
            .................................................................................................................................................... TESTING<br>
            <a href="https://github.com/ivmai/bdwgc" target="_blank" rel="noopener noreferrer" draggable="false">Boehm Garbage Collector</a>
            ................................................................................ MEMORY MANAGEMENT<br>
            <a href="https://tiswww.case.edu/php/chet/readline/rltop.html" target="_blank" rel="noopener noreferrer" draggable="false">Readline library</a>
            .....................................................................................................TERMINAL EMULATION<br>
        </div>

        <br><br><br><br>
    </div>

</div>
<div class="copyright">© Oblivious</div>

<style>
    .margaret {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
    }

    .margaret-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60vw;
        padding-top: 5vw;
        transform: translateX(16.5vw);
    }

    .line {
        width: 100%;
        height: 1vw;
        background-color: var(--fg-color);
        transform-origin: left top;
        background: url("/img/horizontal-border.png") repeat-x bottom left;
        background-size: 60vw;
        margin: 1vw 0;
        filter: invert(var(--invert-value));
    }

    .margaret-title {
        display: flex;
        align-items: baseline;
    }

    .margaret-name {
        font-size: 7vw;
        font-family: var(--display-font);
        font-style: italic;
    }

    .margaret-link {
        font-size: 1.5vw;
        animation: under_line 1s infinite;
    }

    @keyframes under_line {
        0% {
            text-decoration: none;
        }
        50% {
            text-decoration: underline;
        }
        100% {
            text-decoration: none;
        }
    }

    .margaret-intro,
    .margaret-headline {
        display: flex;
        font-family: var(--display-font);
        font-size: 3vw;
        text-align: center;
    }

    .margaret-intro-word {
        visibility: hidden;
    }

    .margaret-image {
        position: absolute;
        opacity: 0.9;
        transform: translate(-32vw, -20vw);
        width: 30vw;
        z-index: -1;
    }

    .margaret-description {
        font-size: 1.4vw;
        text-align: justify;
    }

    a {
        font-style: italic;
    }

    a:hover {
        color: var(--accent-color);
    }

    .margaret-code {
        border: 1px var(--fg-color) solid;
    }

    code {
        font-size: 0.92vw;
    }

    .copyright {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 2vw;
        font-size: 2vw;
    }
</style>
