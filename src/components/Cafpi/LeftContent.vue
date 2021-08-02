<template>
  <div class="Cafpi__leftContent col-md-6">
    
          <h2 class="Cafpi__title">
            {{ title }}
          </h2>
          <span class="Cafpi__subtitle" 
            >{{ subtitle }}</span
          >
          <a
            href="#"
            class="Cafpi__howItWorksVideoLink"
            data-toggle="modal"
            data-target="#videoModal"
            data-thevideo="https://www.youtube.com/embed/63ItjE91B2o?start=0"
            ><img src="images/play_orange.svg" /><span
              >Comment marche Cafpi en 2 mn</span
            ></a
          >
        </div>
</template>

<script>
export default {
    props: [
        'title', 'subtitle'
    ]

}
</script>

<style scoped lang="scss">

    .Cafpi__CTAs h2 {
      -webkit-animation: title-fade-in 1s 0.8s;
      animation: title-fade-in 1s 0.8s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .Cafpi__subtitle {
      display: block;
      font-size: 20px;
      line-height: 1;
      margin: 20px 0;
    }

</style>
