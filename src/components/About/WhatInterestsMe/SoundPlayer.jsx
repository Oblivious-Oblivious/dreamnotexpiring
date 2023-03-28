export const SoundPlayer = ({ sound }) => {
    const audio_player = new Audio();
    audio_player.src = [`${sound}`];
    audio_player.loop = true;
    audio_player.volume = 0.2;
    audio_player.currentTime = 1;

    return (
        <div
            className="sound-player"
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                opacity: "0",
            }}
            onMouseEnter={() => audio_player.play()}
            onMouseLeave={() => audio_player.pause()}
        ></div>
    );
};
