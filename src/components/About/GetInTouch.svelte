<script>
  import { onMount } from "svelte";

  onMount(() => {
    gsap.to(".contact-wrapper", {
      autoAlpha: 1,
    });

    gsap.utils.toArray(".contact").forEach((contact) => {
      const contact_image = `.${contact.classList[1].toString()} img`;
      const contact_text = `.${contact.classList[1].toString()} .contact-text`;

      const move_image_up = gsap.to(contact_image, {
        paused: true,
        duration: 0.25,
        yPercent: -25,
        opacity: 0.75,
      });

      const move_text_up = gsap.to(contact_text, {
        paused: true,
        duration: 0.25,
        yPercent: -25,
        autoAlpha: 1,
      });

      const glitch_text = gsap
        .timeline({
          paused: true,
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(contact_text, {
          duration: 0.1,
          skewX: 70,
          ease: "power4.inOut",
        })
        .to(contact_text, {
          duration: 0.04,
          skewX: 0,
          ease: "power4.inOut",
        })
        .to(contact_text, {
          duration: 0.04,
          opacity: 0,
        })
        .to(contact_text, {
          duration: 0.04,
          opacity: 1,
        })
        .to(contact_text, {
          duration: 0.04,
          x: -20,
        })
        .to(contact_text, {
          duration: 0.04,
          x: 0,
        });

      contact.addEventListener("mouseenter", () => {
        move_image_up.play();
        move_text_up.play();
        glitch_text.play();

        window.dispatchEvent(
          new CustomEvent("cursor-hover", {
            detail: "CONTACT",
          })
        );
      });
      contact.addEventListener("mouseleave", () => {
        move_image_up.reverse();
        move_text_up.reverse();
        glitch_text.pause(0);

        window.dispatchEvent(new CustomEvent("cursor-reset"));
      });
    });
  });
</script>

<div class="get-in-touch-profile">
  <img src="/img/profile.jpg" alt="Profile" />
</div>

<div class="get-in-touch-wrapper">
  <div class="get-in-touch-phrase">Get In Touch</div>

  <div class="contact-wrapper" style="visibility: hidden;">
    <div class="contact contact-email">
      <a href="mailto:atha@fourth-wall.org" draggable="false">
        <img src="/img/at-sign.png" alt="Email" draggable="false" />
      </a>
      <div class="contact-text">Email</div>
    </div>

    <div class="contact contact-instagram">
      <a
        href="https://www.instagram.com/thanasis_papap/"
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
      >
        <img src="/img/instagram.png" alt="Instagram" draggable="false" />
      </a>
      <div class="contact-text">Instagram</div>
    </div>

    <div class="contact contact-linkedin">
      <a
        href="https://www.linkedin.com/in/thanasis-papapostolou/"
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
      >
        <img src="/img/linkedin.png" alt="LinkedIn" draggable="false" />
      </a>
      <div class="contact-text">LinkedIn</div>
    </div>

    <div class="contact contact-twitter">
      <a
        href="https://twitter.com/itsoblivious99"
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
      >
        <img src="/img/twitter.png" alt="Twitter" draggable="false" />
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
    font-size: 5vw;
    font-family: var(--display-font);
    height: 20vh;
  }

  .contact-wrapper {
    display: flex;
    width: 100vw;
    height: 60vh;
    align-items: center;
    justify-content: center;
  }

  .get-in-touch-copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5vw;
    font-family: var(--display-font);
    height: 20vh;
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
  }

  a {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .contact img {
    width: 10vw;
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
