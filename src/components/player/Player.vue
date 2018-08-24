<template>
    <div class="player">
        <div class="player__header">
            <span>Now Playing</span>: {{ podcast.title }}
        </div>
        <audio class="player__audio" controls autoplay ref="player">
            <source type="audio/mp3" v-if="podcast.files.mp3" :src="podcast.files.mp3">
            <source type="audio/ogg" v-if="podcast.files.ogg" :src="podcast.files.ogg">
            Your browser does not support the audio element.
        </audio>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: [
    'podcast'
  ],
  watch: {
    podcast () {
      // setTimeout(())=>{} for safari bug of playing the same podcast
      this.$refs.player.load()
    }
  },
  methods: {
    ...mapActions({
      setPlaying: 'player/setPlaying'
    })
  },
  mounted () {
    this.$refs.player.addEventListener('ended', () => {
      this.setPlaying(null)
    })
  }
}
</script>

<style lang="scss">
  .player{
      width: 100%;
      &__audio{
          width: 100%;
      }
      &__header{
          font-weight: 500;
          margin-bottom: 20px;
          span{
              font-weight: 800;
          }
      }
  }
</style>
