<script>
    export let current_page;

    import { onMount } from "svelte";
    import { underline_value } from "@persistence/underline_value";
    import { browser_engine } from "@persistence/browser_engine";

    onMount(() => {
        $underline_value = current_page;

        if(navigator.userAgent.indexOf("Chrome") != -1) {
            $browser_engine = "Blink";
        }
        else if(navigator.userAgent.indexOf("Edg") != -1) {
            $browser_engine = "Blink";
        }

        else if(navigator.userAgent.indexOf("Firefox") != -1) {
            $browser_engine = "Gecko";
        }

        else if(navigator.userAgent.indexOf("Safari") != -1) {
            $browser_engine = "WebKit";
        }

        else if((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true )) {
            $browser_engine = "Trident";
        }
        else {
            $browser_engine = "unknown";
            console.log(`Unknown engine: ${navigator.userAgent}`);
        }
    });
</script>
