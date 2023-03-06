<script>
    import { onMount } from "svelte";

    var years_of_experience = new Date().getUTCFullYear() - 2012;
    
    onMount({
    });
</script>

<div>
    <p>I am a software developer and designer</p>
    <p>blending technical and artistic skills with</p>
    <p><span>{years_of_experience}</span> years of building interactive</p>
    <p>experiences.</p>
    <br>
    <p>I vow to create dynamic systems that</p>
    <p>interact in meaningful and internalized</p>
    <p>ways with the individual.</p>
</div>

<style lang="scss">
    @import "commons.scss";

    div {
        padding-top: 25vh;

        span {
            font-style: italic;
        }

        transform: translate(17vw);
    }
</style>
