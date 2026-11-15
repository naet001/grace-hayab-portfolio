import { Section } from "@/components/Section"
import {
  placeholderVideoPoster,
  placeholderVideoSrc,
  VideoSlot,
} from "@/components/VideoSlot"

const clips = [
  { title: "Content clip 1", src: placeholderVideoSrc },
  { title: "Content clip 2", src: placeholderVideoSrc },
  { title: "Content clip 3", src: placeholderVideoSrc },
]

export function ContentShowcase() {
  return (
    <Section id="content" title="Selected Content">
      <p className="editorial-content-note">
        Three-second placeholders are ready to replace with Grace&apos;s videos.
      </p>
      <div className="editorial-content-grid">
        {clips.map((clip) => (
          <figure className="editorial-content-item" key={clip.title}>
            <VideoSlot
              title={clip.title}
              variant="content"
              src={clip.src}
              poster={placeholderVideoPoster}
            />
            <figcaption className="editorial-video-caption">
              {clip.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
