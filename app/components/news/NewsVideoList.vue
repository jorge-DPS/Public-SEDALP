<script setup lang="ts">
import type { NewsVideo } from "~/types/news";

interface Props {
  videos: NewsVideo[];
}

defineProps<Props>();
const titleId = useId();
</script>

<template>
  <section v-if="videos.length" :aria-labelledby="titleId">
    <div class="mb-5 flex items-center gap-3">
      <div
        class="flex size-10 items-center justify-center rounded-full bg-brand-cream text-brand-copper-dark"
      >
        <NewsIcon name="play" class="size-4" />
      </div>

      <div>
        <h3 :id="titleId" class="font-bold text-heading">Videos</h3>

        <p class="mt-0.5 text-xs text-muted">
          Material audiovisual relacionado
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6">
      <article v-for="video in videos" :key="video.position">
        <div class="aspect-video overflow-hidden rounded-xl bg-black">
          <iframe
            v-if="getYouTubeEmbedUrl(video.youtubeUrl)"
            :src="getYouTubeEmbedUrl(video.youtubeUrl)!"
            :title="video.title"
            loading="lazy"
            class="h-full w-full"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            allowfullscreen
          />
        </div>

        <h4 class="mt-3 text-sm font-semibold text-heading">
          {{ video.title }}
        </h4>
      </article>
    </div>
  </section>
</template>
