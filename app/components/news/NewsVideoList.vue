<script setup lang="ts">
import type { NewsVideo } from "~/types/news";

interface Props {
  videos: NewsVideo[];
}

defineProps<Props>();
</script>

<template>
  <section v-if="videos.length" aria-labelledby="news-videos-title">
    <div class="mb-5 flex items-center gap-3">
      <div
        class="flex size-10 items-center justify-center rounded-lg bg-red-50 text-red-600"
      >
        ▶
      </div>

      <div>
        <h3 id="news-videos-title" class="font-bold text-heading">Videos</h3>

        <p class="mt-0.5 text-xs text-muted">
          Material audiovisual relacionado
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <article v-for="video in videos" :key="video.id">
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
