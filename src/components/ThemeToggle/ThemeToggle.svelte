<script>
    import { onMount } from "svelte";
    import { theme } from "@persistence/theme_toggle";

    var image = "/img/moon.png";

    onMount(() => {
        document.querySelector(".theme-button").addEventListener("click", () => {
            if($theme === "dark") {
                image = "/img/sun.png";
                $theme = "light";
                document.querySelector("html").classList.remove("dark-theme");
            }
            else if($theme === "light") {
                $theme = "dark";
                image = "/img/moon.png";
                document.querySelector("html").classList.add("dark-theme");
            }
        });
    });
</script>

<div class="theme-button">
    <img src={image} alt="theme" draggable="false">
</div>

<style>
    .theme-button {
        position: fixed;
        top: 2vh;
        left: 96vw;

        width: 3vw;
        height: 3vw;
        background-color: var(-bg-color);
        box-shadow: var(--neuromorphic-shadow);
        border-radius: 8px;
        z-index: 100000;
    }

    img {
        position: absolute;
        width: 2.5vw;
        height: 2.5vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* border: 1px green solid; */
    }

    .theme-button:hover {
        cursor: pointer;
    }
    .theme-button:active {
        box-shadow: var(--neuromorphic-shadow-pressed);
    }
</style>
