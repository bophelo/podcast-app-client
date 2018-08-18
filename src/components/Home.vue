<template>
    <div>
      <transition-group name="fade">
        <podcast-simple :key="1"></podcast-simple>
      </transition-group>
      <a href="#" class="load-more" @click.prevent="show">Load Older Podcasts</a>
    </div>
</template>

<script>
import PodcastSimple from './podcasts/Simple'
export default {
  name: 'home',
  components: {
    PodcastSimple
  }
}
</script>

<style lang="scss">
  .load-more{
    display: block;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    text-align: center;
    margin-bottom: 40px;
    color: inherit;
    text-decoration: none;
    font-weight: 500;
  }
</style>
