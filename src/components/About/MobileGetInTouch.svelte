<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.to(".contact-wrapper", {
            autoAlpha: 1,
        });
    });
</script>

<div class="get-in-touch-profile">
    <img src="/img/profile.jpg" alt="Profile">
</div>

<div class="get-in-touch-wrapper">
    <div class="get-in-touch-phrase">Get In Touch</div>

    <div class="contact-wrapper" style="visibility: hidden;">
        <div class="contact contact-email">
            <a href="mailto:thanos.papap42@gmail.com" draggable="false">
                <img src="/img/at-sign.png" alt="Email" draggable="false">
            </a>
            <div class="contact-text">Email</div>
        </div>
    
        <div class="contact contact-instagram">
            <a href="https://www.instagram.com/thanasis_papap/" target="_blank" rel="noopener noreferrer" draggable="false">
                <img src="/img/instagram.png" alt="Instagram" draggable="false">
            </a>
            <div class="contact-text">Instagram</div>
        </div>
    
        <div class="contact contact-linkedin">
            <a href="https://www.linkedin.com/in/thanasis-papapostolou/" target="_blank" rel="noopener noreferrer" draggable="false">
                <img src="/img/linkedin.png" alt="LinkedIn" draggable="false">
            </a>
            <div class="contact-text">LinkedIn</div>
        </div>
    
        <div class="contact contact-twitter">
            <a href="https://twitter.com/itsoblivious99" target="_blank" rel="noopener noreferrer" draggable="false">
                <img src="/img/twitter.png" alt="Twitter" draggable="false">
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
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 9vw;
        font-size: 8vw;
        font-family: var(--display-font);
        height: 20vh;
    }

    .contact-wrapper {
        display: flex;
        flex-direction: column;
        gap: 7vh;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }

    .get-in-touch-copyright {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 5vw;
        font-family: var(--display-font);
        height: 20vh;
    }

    .contact-text {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: 5vw;
        font-family: var(--display-font);
    }

    .contact {
        position: relative;
        width: 20vw;
    }

    .contact-email,
    .contact-linkedin {
        transform: translateX(125%);
    }
    .contact-instagram,
    .contact-twitter {
        transform: translateX(-125%);
    }

    a {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .contact img {
        width: 20vw;
        filter: invert(var(--invert-value));
    }

    .get-in-touch-profile img {
        position: absolute;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        opacity: var(--profile-opacity-value);
        z-index: -1;
    }
</style>
