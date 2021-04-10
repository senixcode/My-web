import { FC } from "react";

const VideoCustom: FC<{ url?: string }> = ({
  url = "https://res.cloudinary.com/ds5ayigjw/video/upload/v1617926559/my-website/2021-04-05_23-07-04_jklscb.mp4",
}) => {
  return (
    <>
      <div className="iframe-container">
        <iframe
          className="responsive-iframe"
          title="Cloud Hosted Video Player"
          src={url}
          width="640"
          height="480"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
      <StylesCustom/>
    </>
  );
};

const StylesCustom = () => (
     <style jsx>{`
        .iframe-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
        }

        .responsive-iframe {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
      `}</style>
)

export default VideoCustom