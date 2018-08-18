<template>
    <div class="podcast">
        <a href="#" class="podcast__play">
            <img class="podcast__playbutton" src="../../assets/img/play.svg" alt="Play">
        </a>
        <div class="podcast__details">
            <div class="podcast__sub">
                2 days ago
            </div>
            <h1 class="podcast__header">
                <a href="#">Lorem ipsum dolor sit.</a>
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta voluptates nihil molestias nemo doloremque labore ea veniam deserunt asperiores itaque consequuntur rem, nobis facilis id maiores, quod excepturi harum.</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'podcast-simple'
}
</script>

<style lang="scss">
    @import '~@/assets/sass/_variables';
    .podcast{
        background-color: #fff;
        display: flex;
        min-height: 240px;
        border-radius: $global-radius;
        box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.5);
        margin-bottom: 40px;
        overflow: hidden;

        &__sub{
            font-weight: 500;
        }

        &__header{
            font-size: 1.6em;
            a {
                text-decoration: none;
            }
        }

        &__details{
            flex: 1;
            padding: 40px;
        }

        &__play{
            width: 15%;
            display: none;
            background-color: $blue;
            overflow: hidden;
            align-items: center;
            justify-content: center;
            border-top-left-radius: $global-radius;
            border-bottom-left-radius: $global-radius;
            transition: margin-left 180ms ease-in-out;

            &:hover{
                .podcast__playbutton{
                    transform: scale(4.5) rotate(-10deg);
                }
            }
            &--hidden{
                margin-left: -15%;
            }
        }

        &__playbutton{
            color: #222;
            opacity: 0.4;
            width: 60%;
            transition: all 180ms ease-in-out;
        }
    }

    @media only screen and (min-width: 768px) {
        .podcast__play{
            display: flex;
        }
    }
</style>

