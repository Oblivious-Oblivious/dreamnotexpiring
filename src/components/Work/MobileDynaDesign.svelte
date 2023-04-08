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

<MobileArticle number="no. 8" date="2021 - ?">
    <MobileTitle
        name="DYNADESIGN"
        link="https://github.com/Oblivious-Oblivious/DynaDesign"
        link_type="GitHub"
    />

    <MobileIntro content="
        Hardware design for the new age.
    "/>

    <MobileContent
        headline="??"
        description="in the works..."
    />
</MobileArticle>

<MobileCopyright/>
