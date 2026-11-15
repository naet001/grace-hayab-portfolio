import { Video } from "lucide-react"

export const placeholderVideoSrc = "/videos/placeholder.mp4"
export const placeholderVideoPoster = "/videos/placeholder.jpg"

type VideoSlotProps = {
  title: string
  src?: string
  poster?: string
  captionsSrc?: string
  variant: "hero" | "content"
}

export function VideoSlot({
  title,
  src,
  poster,
  captionsSrc,
  variant,
}: VideoSlotProps) {
  return (
    <div className={`editorial-video-slot editorial-video-slot--${variant}`}>
      {src ? (
        <video
          className="editorial-video-player"
          aria-label={title}
          controls
          playsInline
          preload="none"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
          {captionsSrc && (
            <track
              kind="captions"
              src={captionsSrc}
              srcLang="en"
              label="English"
              default
            />
          )}
          Your browser does not support HTML video.
        </video>
      ) : (
        <div
          className="editorial-video-placeholder"
          role="img"
          aria-label={`${title} video placeholder`}
        >
          <Video className="editorial-video-icon" aria-hidden="true" />
          <span>{title}</span>
          <span className="editorial-video-placeholder-note">
            Video will appear here
          </span>
        </div>
      )}
    </div>
  )
}
