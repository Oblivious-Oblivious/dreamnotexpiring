<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        gsap.to(".work-section", {
            autoAlpha: 1,
        });

        window.dispatchEvent(new CustomEvent("on-work-page", {
            detail: {},
            bubbles: true,
            cancelable: true,
            composed: false,
        }));

        gsap.from(".work-line", {
            delay: 0.2,
            duration: 1,
            opacity: 0,
            width: "0%",
            stagger: {
                amount: 2,
            },
        });
        gsap.from(".work-title, .work-date", {
            delay: 0.2,
            duration: 0.65,
            xPercent: 20,
            clipPath: "inset(0 0 0 100%)",
            stagger: {
                amount: 2.5,
            },
            ease: "power2.out",
        });

        Array.prototype.shuffle = function() {
            const input = this;

            for(var i = input.length-1; i >=0; i--) {
                const random_index = Math.floor(Math.random()*(i+1));
                const item_at_index = input[random_index];

                input[random_index] = input[i]; 
                input[i] = item_at_index;
            }
            return input;
        }

        var work_data = [];

        const shuffle_distort_text = windex => {
            work_data.push({
                is_animating: false,
                repeat: 0,
                target: [],
                letters: "*+-/@_$[%£!XO1&>",
                original_strings: "",
                single_letters: [],
            });

            const check_length = x => Array.from(document.querySelectorAll(x)).length > 0;

            const change_letter = letter => {
                if(letter.textContent != " ") {
                    letter.classList.add("is-changing");
                    letter.style.animationDuration = Math.random().toFixed(2) + "s";

                    const new_character = work_data[windex].letters.substr(Math.random() * work_data[windex].letters.length, 1);

                    letter.textContent = new_character;
                    letter.setAttribute(`data-txt-${windex}`, new_character);
                }
            }

            const reset_letter = (letter, value) => {
                letter.classList.remove("is-changing");
                letter.textContent = value;
                letter.setAttribute(`data-txt-${windex}`, value);
            }

            const divide_all_letters = () => {
                work_data[windex].target.forEach((element, index) => {
                    const text = element.textContent;
                    var text_divided = "";

                    work_data[windex].original_strings = text;

                    for(var i = 0; i < text.length; i++)
                        text_divided += `<span class="work-title-distorted work-title-distorted-${windex} work-title-${index}-span-${i}" data-txt-${windex}="${text.substr(i, 1)}">${text.substr(i, 1)}</span>`;

                    element.innerHTML = text_divided;
                }); 
                work_data[windex].single_letters = document.querySelectorAll(`.work-title-distorted-${windex}`);
            }

            const change_all_letters = () => {
                if(work_data[windex].is_animating)
                    work_data[windex].single_letters.forEach(el => change_letter(el));

                setTimeout(change_all_letters, 10);
            }

            const reset_all_letters = () => {
                var random_array = [];  
                for(var i = 0; i < work_data[windex].single_letters.length; i++)
                    random_array.push(i);

                random_array.shuffle();
                random_array.forEach(el => reset_letter(work_data[windex].single_letters[el], work_data[windex].original_strings.substring(el, el + 1)));
            }

            return selector => {
                if(check_length(selector)) {
                    work_data[windex].target = Array.from(document.querySelectorAll(selector));                
                    divide_all_letters();
                    change_all_letters();

                    document.querySelector(`.work-title-container ${selector}`).addEventListener("mouseenter", () => {
                        work_data[windex].is_animating = true;
                    });
                    document.querySelector(`.work-title-container ${selector}`).addEventListener("mouseleave", () => {
                        work_data[windex].is_animating = false;
                        reset_all_letters();
                    });
                }
            }
        }

        [
            ".work-margaret",
            ".work-cspec",
            ".work-dreamnotexpiring",
            ".work-salsa-pomodoro-timer",
            ".work-aerocss",
            ".work-zircon",
            ".work-emeralds",
            ".work-dynadesign",
            ".work-skeleton",
            ".work-clitterbin",
            ".work-cdatalib",
            ".work-artsxedio",
            ".work-pop-on-scratch",
            ".work-multicore",
        ].forEach((work, index) => {
            shuffle_distort_text(index)(work);
        });
    });
</script>

<div class="work-section" style="visibility: hidden;">
    <div class="work work-1">
        <a href="/work/margaret" draggable="false">
            <div class="work-title-container work-title-container-margaret">
                <div class="work-title work-margaret">Margaret</div>
            </div>
        </a>
        <div class="work-date">2022 - Present</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-2">
        <a href="/work/cspec" draggable="false">
            <div class="work-title-container work-title-container-cspec">
                <div class="work-title work-cspec">cSpec</div>
            </div>
        </a>
        <div class="work-date">2021 - Present</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-3">
        <a href="/work/dreamnotexpiring" draggable="false">
            <div class="work-title-container work-title-container-dreamnotexpiring">
                <div class="work-title work-dreamnotexpiring">dreamnotexpiring</div>
            </div>
        </a>
        <div class="work-date">2023</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-4">
        <a href="/work/salsa" draggable="false">
            <div class="work-title-container work-title-container-salsa-pomodoro-timer">
                <div class="work-title work-salsa-pomodoro-timer">Salsa:&nbsp;Pomodoro&nbsp;Timer</div>
            </div>
        </a>
        <div class="work-date">2023</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-5">
        <a href="/work/aerocss" draggable="false">
            <div class="work-title-container work-title-container-aerocss">
                <div class="work-title work-aerocss">AeroCSS</div>
            </div>
        </a>
        <div class="work-date">2023</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-6">
        <a href="/work/zircon" draggable="false">
            <div class="work-title-container work-title-container-zircon">
                <div class="work-title work-zircon">Zircon</div>
            </div>
        </a>
        <div class="work-date">2020-2021</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-7">
        <a href="/work/emeralds" draggable="false">
            <div class="work-title-container work-title-container-emeralds">
                <div class="work-title work-emeralds">Emeralds</div>
            </div>
        </a>
        <div class="work-date">2021</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-8">
        <a href="/work/dynadesign" draggable="false">
            <div class="work-title-container work-title-container-dynadesign">
                <div class="work-title work-dynadesign">DynaDesign</div>
            </div>
        </a>
        <div class="work-date">2021 - ?</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-9">
        <a href="/work/skeleton" draggable="false">
            <div class="work-title-container work-title-container-skeleton">
                <div class="work-title work-skeleton">Skeleton</div>
            </div>
        </a>
        <div class="work-date">2020 - 2021</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-10">
        <a href="/work/clitterbin" draggable="false">
            <div class="work-title-container work-title-container-clitterbin">
                <div class="work-title work-clitterbin">cLitterbin</div>
            </div>
        </a>
        <div class="work-date">2020</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-11">
        <a href="/work/cdatalib" draggable="false">
            <div class="work-title-container work-title-container-cdatalib">
                <div class="work-title work-cdatalib">cDataLib</div>
            </div>
        </a>
        <div class="work-date">2019 - 2020</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-12">
        <a href="/work/artsxedio" draggable="false">
            <div class="work-title-container work-title-container-artsxedio">
                <div class="work-title work-artsxedio">ArtSxedio</div>
            </div>
        </a>
        <div class="work-date">2018</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-13">
        <a href="/work/princeofpersia" draggable="false">
            <div class="work-title-container work-title-container-pop-on-scratch">
                <div class="work-title work-pop-on-scratch">POP&nbsp;on&nbsp;Scratch</div>
            </div>
        </a>
        <div class="work-date">2016</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-14">
        <a href="/work/multicore" draggable="false">
            <div class="work-title-container work-title-container-multicore">
                <div class="work-title work-multicore">MultiCore</div>
            </div>
        </a>
        <div class="work-date">2015 - 2016</div>
    </div>
</div>

<style>
    .work-section {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: min-content;
        width: 100%;
        padding: 4rem 0;
    }

    .work {
        overflow: hidden;
        display: flex;
        align-items: baseline;
        font-family: var(--display-font);
        color: var(--fg-color);
    }

    .work-title-container {
        display: flex;
        justify-content: center;
    }

    .work-title {
        padding: 2vw;
        font-size: 6vw;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 100%;
    }

    .work-title:hover {
        filter: blur(2px);
    }

    .work-date {
        padding-left: 1vw;
        font-family: var(--text-font);
        font-weight: lighter;
        font-size: 1.4vw;
    }

    .work-line {
        height: 1px;
        background-color: var(--fg-color);
        z-index: 1;
        transform-origin: left top;
    }

    .work-1,
    .work-4,
    .work-7,
    .work-10,
    .work-13 {
        font-weight: 600;
        font-size: 3vw;
        text-transform: uppercase;
    }

    .work-3,
    .work-11 {
        font-weight: lighter;
        text-transform: uppercase;
        font-size: 3vw;
    }

    .work-2,
    .work-6,
    .work-12 {
        font-weight: lighter;
        font-size: 3vw;
        text-transform: uppercase;
    }

    .work-5,
    .work-8,
    .work-9,
    .work-14 {
        font-size: 3vw;
        text-transform: uppercase;
        font-weight: bold;
    }

    .work-1 {
        margin-left: 20%;
    }
    .work-title-container-margaret {
        width: 38.4vw;
    }

    .work-2 {
        margin-left: 60%;
    }
    .work-title-container-cspec {
        width: 22vw;
    }

    .work-3 {
        margin-left: 9%;
    }
    .work-title-container-dreamnotexpiring {
        width: 60.5vw;
    }

    .work-4 {
        margin-left: 0;
    }
    .work-title-container-salsa-pomodoro-timer {
        width: 80.3vw;
    }

    .work-5 {
        margin-left: 53%;
    }
    .work-title-container-aerocss {
        width: 32.5vw;
    }

    .work-6 {
        margin-left: 22%;
    }
    .work-title-container-zircon {
        width: 24.7vw;
    }

    .work-7 {
        margin-left: 50%;
    }
    .work-title-container-emeralds {
        width: 36.9vw;
    }

    .work-8 {
        margin-left: 5%;
    }
    .work-title-container-dynadesign {
        width: 43.8vw;
    }

    .work-9 {
        margin-left: 45%;
    }
    .work-title-container-skeleton {
        width: 36.8vw;
    }

    .work-10 {
        margin-left: 10%;
    }
    .work-title-container-clitterbin {
        width: 39.9vw;
    }

    .work-11 {
        margin-left: 60%;
    }
    .work-title-container-cdatalib {
        width: 31.4vw;
    }

    .work-12 {
        margin-left: 20%;
    }
    .work-title-container-artsxedio {
        width: 35.3vw;
    }

    .work-13 {
        margin-left: 5%;
    }
    .work-title-container-pop-on-scratch {
        width: 54.8vw;
    }

    .work-14 {
        margin-left: 50%;
    }
    .work-title-container-multicore {
        width: 40.4vw;
    }
</style>
