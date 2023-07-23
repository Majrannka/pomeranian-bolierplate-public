import './styles.css';

export const MediaFiles = () => {
  return (
    <>
      <h2>Pliki multimedialne</h2>
      <h3>Wideo</h3>
      <video width="320" height="240" controls>
        <source
          src="https://images.all-free-download.com/footage_preview/mp4/cute_wild_deer_grazing_in_nature_6892279.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h3>Audio</h3>
      <audio controls>
        <source
          src="https://cdn.pixabay.com/download/audio/2022/12/22/audio_fb4198257e.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio tag.
      </audio>
      <h3>YouTube</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ao8Qysi_8ZU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};
