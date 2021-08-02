<template>
  <div class="Cafpi">
    <div class="Cafpi__container">
      <div class="cafpi-nav-ariane">
        <a href="https://www.cafpimaroc.com"><i class="fa fa-home"> </i> </a>
        &gt; Crédit Immobilier
      </div>
      <h1>
        Bénéficiez des meilleures conditions de financement pour votre projet
        immobilier
      </h1>

      <div class="row">
        <template v-for="item in items">
          <CafpiCard :item="item" :key="item.id" />
        </template>
      </div>

      <h1>
        Autres financements
      </h1>

      <div class="row">
        <template v-for="financement in financements">
          <CafpiCard :item="financement" :key="financement.id" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CafpiCard from "@/components/CafpiCard.vue";
export default {
  components: {
    CafpiCard,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Ma Mensualité",
          description:
            "Quelle sera ma mensualité selon le montant souhaité et la durée du prêt ?",
          lien1: "",
          lien2: "",
        },
        {
          id: 2,
          name: "Capacite d'Endettement",
          description:
            "Quel est le montant maximum que je peux emprunter et ma mensualité ?",
          lien1: "",
          lien2: "",
        },
        {
          id: 3,
          name: "Financement Mourabaha",
          description:
            "Quelle sera ma redevance mensuelle selon le montant souhaité et la durée du financement?",
          lien1: "",
          lien2: "",
        },
      ],

      financements: [
        {
          id: 1,
          name: "Rachat de Crédit",
          description: "Quelle serait mon économie générée en cas de rachat ?",
          lien1: "",
          lien2: "",
        },
        {
          id: 2,
          name: "Crédit Consommation",
          description:
            "J'évalue très rapidement le montant des mensualités que j'aurai à rembourser.",
          lien1: "",
          lien2: "",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.Cafpi {
  color: #fff;
}
.Cafpi__container {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  max-width: 85%;
  overflow: hidden;
  padding: 40px 20px 0;
  position: relative;
  .Cafpi__CTAs {
    display: -webkit-flex;
    display: flex;
    position: relative;
    padding: 0;
    margin: 30px;
    -webkit-flex-direction: column;
    flex-direction: column;
  }
}
.btnImmo {
  color: #506bad !important;
  box-shadow: 0px 2px 2px #506bad;
  border: 1px solid #506bad;
}

.btnMenu {
  width: 46%;
  margin: 2%;
}

.btnMenu h1 {
  font-size: 1.9em;
  margin: 0;
  padding: 12px;
  color: #ffffff !important;
  background-color: #506bad;
  -webkit-border-radius: 7px 7px 0 0;
  border-radius: 7px 7px 0 0;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.btnMenu {
  color: #ffffff !important;
  font-size: 14px;
  text-shadow: 1px 1px 0px none;
  padding: 10px 25px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: grad;
  background: #ffffff;
  background: linear-gradient(top, #ffffff, #ffffff);
  background: -ms-linear-gradient(top, #ffffff, #ffffff);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ffffff),
    to(#ffffff)
  );
  background: -moz-linear-gradient(top, #ffffff, #ffffff);
  margin: 5px;
  padding: 0px;
  p {
    font-size: 1.7em;
    padding: 0.8em;
    color: #263f7b;
    font-family: "Replica-Regular";
    min-height: 150px;
  }
}

.btn-menu-cta:active,
.btn-menu-cta-left:active {
  background: #bf6a01;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#bf6a01),
    to(#bf6a01)
  );
  background: -moz-linear-gradient(top, #bf6a01, #bf6a01);
  background: linear-gradient(to bottom, #bf6a01, #bf6a01);
}
.btn-menu-cta,
.btn-menu-cta-blue,
.btn-primary {
  font-family: "Replica-Light" !important;
}

.btn-menu-cta {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 12px 24px;
  border: 1px solid #bf6a01;
  border-radius: 8px;
  background: #ffac01;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ffac01),
    to(#bf6a01)
  );
  background: -moz-linear-gradient(top, #ffac01, #bf6a01);
  background: linear-gradient(to bottom, #ffac01, #bf6a01);
  text-shadow: #784201 1px 1px 1px;
  font: normal normal bold 18px arial;
  color: #fff;
  text-decoration: none;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 30px;
  margin-top: 15px;
}
</style>
