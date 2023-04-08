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

<MobileArticle number="no. 4" date="2023">
    <MobileTitle
        name="SALSA"
        link="https://apps.apple.com/app/salsa-pomodoro-timer/id1669985996"
        link_type="AppStore"
    />

    <MobileIntro content="
        A minimalistic app for pomodoro timers.
    "/>

    <MobileContent
        headline="Technologies used"
        description=""
    >
        <MobileTechnology
            title="Swift"
            link="https://www.swift.org"
            role="MAIN LANGUAGE"
        />
        <MobileTechnology
            title="SwiftUI"
            link="https://developer.apple.com/xcode/swiftui/"
            role="UI GRAPHICS"
        />
        <MobileTechnology
            title="swispec"
            link="https://github.com/Oblivious-Oblivious/swispec"
            role="TESTING"
        />
        <MobileTechnology
            title="Core Data"
            link="https://developer.apple.com/documentation/coredata"
            role="DATABASE"
        />
        <MobileTechnology
            title="CloudKit"
            link="https://developer.apple.com/icloud/cloudkit/"
            role="CLOUD STORAGE"
        />
    </MobileContent>

    <MobileContent
        headline=""
        description=""
    >
        <div class="salsa-videos">
            <video autoplay muted loop playsinline>
                <source src="/video/salsa1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video autoplay muted loop playsinline>
                <source src="/video/salsa2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video autoplay muted loop playsinline>
                <source src="/video/salsa3.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </MobileContent>

    <MobileContent
        headline="Description"
        description="
            Whether you are studying or working or doing chores, you can
            finish any task without distractions.  Following the pomodoro
            method you can divide tasks approprately, keeping motivation
            and focus to maximum.  With salsa you can set different
            combinations of timers, decide if you want long breaks and
            choose the number of sets you are aiming to complete.
        "
    />
</MobileArticle>

<MobileCopyright/>

<style>
    .salsa-videos {
        display: flex;
        gap: 1vw;
        width: 100%;
    }

    video {
        width: 32.2%;
        box-shadow: var(--neumorphic-shadow2);
        border-radius: 1.6vw;
    }
</style>
