<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.set(".contact-wrapper", {
            autoAlpha: 1,
        });

        gsap.utils.toArray(".contact").forEach(contact => {
            const contact_image = `.${contact.classList[1].toString()} img`;
            const contact_text = `.${contact.classList[1].toString()} .contact-text`;

            const move_image_up = gsap.to(contact_image, {
                paused: true,
                duration: 0.25,
                yPercent: -25,
                opacity: 0.75,
            });

            const move_text_down = gsap.to(contact_text, {
                paused: true,
                duration: 0.25,
                yPercent: -200,
                autoAlpha: 1,
            });

            contact.addEventListener("mouseenter", () => {
                move_image_up.play();
                move_text_down.play();
            });
            contact.addEventListener("mouseleave", () => {
                move_image_up.reverse();
                move_text_down.reverse();
            });
        });

    });
</script>

<div class="get-in-touch-wrapper">
    <div class="get-in-touch-phrase">Get In Touch</div>

    <div class="contact-wrapper" style="visibility: hidden;">
        <div class="contact contact-email">
            <a href="mailto:thanos.papap42@gmail.com">
                <img src="/img/at-sign.png" alt="Email">
            </a>
            <div class="contact-text">Email</div>
        </div>
    
        <div class="contact contact-instagram">
            <a href="https://www.instagram.com/thanasis_papap/">
                <img src="/img/instagram.png" alt="Instagram">
            </a>
            <div class="contact-text">Instagram</div>
        </div>
    
        <div class="contact contact-linkedin">
            <a href="https://www.linkedin.com/in/thanasis-papapostolou/">
                <img src="/img/linkedin.png" alt="LinkedIn">
            </a>
            <div class="contact-text">LinkedIn</div>
        </div>
    
        <div class="contact contact-twitter">
            <a href="https://twitter.com/itsoblivious99">
                <img src="/img/twitter.png" alt="Twitter">
            </a>
            <div class="contact-text">Twitter</div>
        </div>
    </div>

    <div class="get-in-touch-copyright">© Oblivious</div>
</div>

<style>
    .get-in-touch-wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .get-in-touch-phrase {
        transform: translate(37%, 50%);
        font-size: 5vw;
        font-family: var(--display-font);
        height: 25vh;
    }

    .contact-wrapper {
        display: flex;
        width: 100vw;
    }

    .get-in-touch-copyright {
        transform: translate(43.5%, 50%);
        font-size: 2.5vw;
        font-family: var(--display-font);
        height: 25vh;
    }

    .contact-text {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: 2.5vw;
        font-family: var(--display-font);
        visibility: hidden;
    }

    .contact {
        position: relative;
        width: 100%;
        height: 50vh;
        display: table-cell;
        vertical-align: middle;
    }

    .contact a {
        display: block;
        height: 50vh;
    }

    .contact img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 12vw;
    }

    @media (prefers-color-scheme: dark) {
        .contact img {
            filter: invert(100%);
        }
    }
</style>
