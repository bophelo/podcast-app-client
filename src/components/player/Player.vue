<template>
    <div class="player">
        <div class="player__header">
            <span>Now Playing</span>: Podcast Title
        </div>
        <audio class="player__audio" controls autoplay ref="player"></audio>
    </div>
</template>

<script>
export default {
  name: 'player'
}
</script>

<style lang="scss">
  @import '~@/assets/sass/_variables';
  .player{
      width: 100%;
      &__audio{
          width: 100%;
      }
      &__header{
          font-weight: 500px;
          margin-bottom: 20px;
          span{
              font-weight: 800px;
          }
      }
  }
</style>
