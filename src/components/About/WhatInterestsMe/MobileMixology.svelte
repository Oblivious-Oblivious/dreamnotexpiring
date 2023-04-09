<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap/dist/gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".mixology-wrapper", {
            autoAlpha: 1,
        });
    });
</script>


<div class="section-title">Interest:&nbsp;&nbsp;Mixology</div>

<div class="mixology-wrapper" style="visibility: hidden;">
    <div class="cocktail cocktail-amaretto-sour">
        <img class="cocktail-image" src="/img/Amaretto Sour.jpg" alt="Amaretto Sour" draggable="false">
        <div class="cocktail-text-wrapper">
            <div class="cocktail-title">Amaretto Sour</div>
            <div class="cocktail-recipe">
                2 oz. amaretto<br>
                1 oz. lemon juice<br>
                1 oz. simple syrup<br>
                0.5 oz. egg white<br>
                1 dash of angostura bitters<br>
                <br>
                Dry shake, then normal shake<br>
                Add ice<br>
                Serve into an old fashioned<br>
                Garnish with orange peel<br>
            </div>
        </div>
    </div>

    <div class="cocktail cocktail-appletini">
        <img class="cocktail-image" src="/img/Appletini.jpg" alt="Appletini" draggable="false">
        <div class="cocktail-text-wrapper">
            <div class="cocktail-title">Appletini</div>
            <div class="cocktail-recipe">
                1.5 oz. vodka<br>
                1.5 oz. apple juice<br>
                0.25 oz. lemon juice<br>
                0.25 oz. maple syrup<br>
                <br>
                Quick shake<br>
                Pour into a coupe glass<br>
                3-piece apple garnish<br>
            </div>
        </div>
    </div>

    <div class="cocktail cocktail-blue-feelings">
        <img class="cocktail-image" src="/img/Blue Feelings.jpg" alt="Blue Feelings" draggable="false">
        <div class="cocktail-text-wrapper">
            <div class="cocktail-title">Blue Feelings</div>
            <div class="cocktail-recipe">
                0.75 oz. vodka<br>
                0.75 oz. malibu<br>
                0.75 oz. blue curaçao<br>
                0.75 oz. coconut cream<br>
                0.75 oz. lemon juice<br>
                2 oz. pineapple juice<br>
                <br>
                Good shake<br>
                Add crushed ice<br>
                Double strain into highball<br>
                Garnish with pineapple wedge<br>
            </div>
        </div>
    </div>

    <div class="cocktail cocktail-kahlua-sour">
        <img class="cocktail-image" src="/img/Kahlua Sour.jpg" alt="Kahlua Sour" draggable="false">
        <div class="cocktail-text-wrapper">
            <div class="cocktail-title">Kahlua Sour</div>
            <div class="cocktail-recipe">
                2 oz. kahlua<br>
                0.75 oz. lemon juice<br>
                0.5 oz. simple syrup<br>
                0.5 oz. egg white<br>
                <br>
                Dry shake, then good shake<br>
                Add ice<br>
                Strain into an old fashioned<br>
                Garnish with lemon slice<br>
            </div>
        </div>
    </div>

    <div class="cocktail cocktail-daquiri">
        <img class="cocktail-image" src="/img/Daquiri.jpg" alt="Daquiri" draggable="false">
        <div class="cocktail-text-wrapper">
            <div class="cocktail-title">Daquiri</div>
            <div class="cocktail-recipe">
                2 oz. white rum<br>
                1 oz. lime juice<br>
                1 oz. simple syrup<br>
                <br>
                Good shake<br>
                Strain into chilled coupe glass<br>
                Garnish with lime wheel<br>
            </div>
        </div>
    </div>

    <div class="cocktail cocktail-mr-bali-hai">
        <img class="cocktail-image" src="/img/Mr Bali Hai.jpg" alt="Mr Bali Hai" draggable="false">
        <div class="cocktail-text-wrapper">
            <div class="cocktail-title">Mr Bali Hai</div>
            <div class="cocktail-recipe">
                1 oz. white rum<br>
                0.5 oz. dark rum<br>
                1 oz. malibu<br>
                1.5 oz. pineapple juice<br>
                1 oz. lemon juice<br>
                1 oz. simple syrup<br>
                <br>
                Shake<br>
                Add crushed ice<br>
                Fill in highball<br>
                Garnish with pineapple wedge<br>
            </div>
        </div>
    </div>
</div>

<style>
    .section-title {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: 10vw;
        font-family: var(--display-font);
        font-style: italic;
        padding-bottom: 3vw;
    }

    .mixology-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3vw;
        padding: 2vw;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        width: 95%;
        transform: translateX(2.5%);
    }

    .cocktail {
        position: relative;
        overflow: hidden;
        border-radius: 0.55vw;
        width: 100%;
    }

    .cocktail::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 80%);
        z-index: 0;
    }

    .cocktail-image {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: transform 2.5s ease;
        backface-visibility: hidden;
        position: relative;
        z-index: -1;
    }

    .cocktail-text-wrapper {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 1.1vw;
        color: var(--snow);
        transition: background-color 1s ease;
    }

    .cocktail-amaretto-sour .cocktail-text-wrapper,
    .cocktail-appletini .cocktail-text-wrapper,
    .cocktail-blue-feelings .cocktail-text-wrapper {
        text-align: left;
    }
    .cocktail-daquiri .cocktail-text-wrapper,
    .cocktail-mr-bali-hai .cocktail-text-wrapper,
    .cocktail-kahlua-sour .cocktail-text-wrapper {
        text-align: right;
    }

    .cocktail:hover .cocktail-text-wrapper {
        background-color: rgba(0, 0, 0, 0.6);
    }

    .cocktail-title {
        font-family: var(--display-font);
        font-size: 6vw;
        transition: color 1s ease;
        margin-bottom: 0.55vw;
    }

    .cocktail-amaretto-sour {
        box-shadow: var(--neumorphic-shadow2);
    }
    .cocktail-amaretto-sour:hover .cocktail-title {
        color: var(--orange);
    }

    .cocktail-appletini {
        box-shadow: var(--neumorphic-shadow2);
    }
    .cocktail-appletini:hover .cocktail-title {
        color: var(--yellow);
    }

    .cocktail-blue-feelings {
        box-shadow: var(--neumorphic-shadow2);
    }
    .cocktail-blue-feelings:hover .cocktail-title {
        color: var(--teal);
    }

    .cocktail-kahlua-sour {
        box-shadow: var(--neumorphic-shadow2);
    }
    .cocktail-kahlua-sour:hover .cocktail-title {
        color: var(--brown);
    }

    .cocktail-daquiri {
        box-shadow: var(--neumorphic-shadow2);
    }
    .cocktail-daquiri:hover .cocktail-title {
        color: var(--coral);
    }

    .cocktail-mr-bali-hai {
        box-shadow: var(--neumorphic-shadow2);
    }
    .cocktail-mr-bali-hai:hover .cocktail-title {
        color: var(--olive);
    }

    .cocktail-recipe {
        font-size: 3vw;
        font-weight: 500;
        max-height: 0;
        opacity: 0;
        transition: max-height 1s ease, opacity 1s ease;
    }

    .cocktail:hover .cocktail-recipe {
        max-height: 50vh;
        opacity: 1;
    }

    .cocktail:hover .cocktail-image {
        transform: scale(1.2);
        z-index: -1;
    }
</style>
