import { Section } from "@/components/Section"
import {
  placeholderVideoPoster,
  placeholderVideoSrc,
  VideoSlot,
} from "@/components/VideoSlot"

export function IntroductionVideo() {
  return (
    <Section id="meet-grace" title="Meet Grace">
      <figure className="editorial-intro-video">
        <VideoSlot
          title="Meet Grace"
          variant="content"
          src={placeholderVideoSrc}
          poster={placeholderVideoPoster}
        />
        <figcaption className="editorial-video-caption">
          Three-second placeholder · Replace with Grace&apos;s introduction
        </figcaption>
      </figure>
    </Section>
  )
}
