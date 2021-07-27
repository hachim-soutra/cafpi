<template>
  <!-- <div>{{ $t('message') }}</div> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img
          class="imgLogo"
          src="https://www.cafpimaroc.com/images/logoBlanc.png"
          width="250px"
          height="auto"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end flex-column"
        id="navbarSupportedContent"
      >
        <div class="upper-menu align-self-end">
          <h1 class="header-agence">CAFPI, Agence Digitale</h1>
          <div class="small-links">
            <a href="foire-aux-questions.html">FAQs</a>
            <a href="agences-cafpi-maroc.html">Agences Cafpi</a>
            <div class="menu-flags">
              <a href="index_en.html" class="a-flag a-flagEN"
                ><img
                  src="https://www.cafpimaroc.com/images/flagEN40.png"
                  class="img-responsive img-play-sm"
              /></a>
              <a href="https://www.cafpimaroc.com" class="a-flag a-flagFR"
                ><img
                  src="https://www.cafpimaroc.com/images/flagFR40.png"
                  class="img-responsive img-play-sm"
              /></a>
            </div>
          </div>
        </div>
        <ul class="navbar-nav mr-0 mb-2 mb-lg-0 align-self-end">
          <li class="nav-item">
            <router-link class="nav-link" tag="a" :to="{name:'creditImmobilier'}">Crédit Immobilier</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.upper-menu {
  display: flex;
  margin-top: 15px;
  .header-agence {
    float: right;
    width: 100%;
    color: #fff;
    font-size: 2.2em;
    letter-spacing: 5px;
    text-align: right;
    margin-top: 25px;
    margin-bottom: 18px;
    font-family: inherit;
    width: 100%;
    white-space: nowrap;
  }
  .menu-flags {
    margin-top: 2.3em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .a-flag {
      width: 16% !important;
      .img-play-sm {
        max-width: 20px;
        float: left;
        margin-right: 5px;
        margin-left: 35px;
      }
    }
  }
}
.nav-link  {
    color: #FFF !important;
    text-decoration: none;
    transition: opacity 250ms;
    font-size: 1.2em;
    position: relative;
}
</style>
