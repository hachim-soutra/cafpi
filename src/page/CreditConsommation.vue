<template>
  <div class="Cafpi">
    <div class="Cafpi__container">
      <div class="cafpi-nav-ariane">
        <a href="https://www.cafpimaroc.com"><i class="fa fa-home"> </i> </a>
        &gt; Crédit Consommation > Simulateur
      </div>
      <h1>
        Calcul des Mensualités de Crédit Consommation
      </h1>

      <div class="col-md-7 display-mobile-after">
        <div class="col-md-12 frm-calculator">
          <div id="frmCafpi">
            <input type="hidden" name="dApport" value="0" />
            <input type="hidden" name="typesimul" value="Mensualite" />

            <div class="form-group">
              <label for="dCapital" class="intitule"
                ><span class="obligatoire">*</span> Montant du prêt</label
              >
              <input
                v-model="montant"
                type="number"
                required=""
                name="dCapital"
                id="dCapital"
                class="form-control"
                min="0"
                step="1000"
              /><span class="unite">Dhs</span>
            </div>
            <div class="form-group">
              <label for="Taux" class="intitule"
                ><span class="obligatoire">*</span> Taux annuel HT</label
              >
              <input
                v-model="tax"
                type="number"
                step="0.001"
                name="dTaux"
                id="dTaux"
                class="form-control"
              /><span class="unite">%</span>
            </div>

            <div class="form-group">
              <label for="iDuree" class="intitule"
                ><span class="obligatoire">*</span> Durée du prêt
                {{ period }}</label
              >
              <select
                name="iDuree"
                id="iDuree"
                class="form-control"
                v-if="isYears == 1"
                v-model="period"
              >
                <option value="1">1 an</option>
                <option value="2">2 ans</option>
                <option value="3">3 ans</option>
                <option value="4">4 ans</option>
                <option value="5">5 ans</option>
                <option value="6">6 ans</option>
                <option value="7">7 ans</option>
                <option value="8">8 ans</option>
                <option value="9">9 ans</option>
                <option value="10" selected="selected">10ans</option>
              </select>
              <select
                name="iDuree"
                id="iDuree"
                class="form-control"
                v-if="isYears == 0"
                v-model="period"
              >
                <option value="1">1 mois</option>
                <option value="2">2 mois</option>
                <option value="3">3 mois</option>
                <option value="4">4 mois</option>
                <option value="5">5 mois</option>
                <option value="6">6 mois</option>
                <option value="7" selected="selected">7 mois</option>
              </select>

              <br />
              <div class=" select-duree">
                <input
                  v-model="isYears"
                  name="type_duree"
                  id="mensuel"
                  value="0"
                  type="radio"
                  required=""
                />
                <label class="opt_label text-dark" for="mensuel">mois</label>

                <input
                  v-model="isYears"
                  name="type_duree"
                  id="annuel"
                  checked="checked"
                  value="1"
                  type="radio"
                  required=""
                />
                <label class="opt_label text-dark" for="annuel" id="opt_annuel"
                  >années</label
                >
              </div>
            </div>

            <div class="form-group">
              <label class="intitule"></label>
              <button
                type="submit"
                class="form-control btn btn-primary"
                v-if="montant * tax != 0"
                @click="calcul"
              >
                Calculez
              </button>

              <div class="col-md-7 display-mobile-after">
                <div class="col-md-6 result-table-mensualite">
                  <div class="row recap-simulation">
                    <div class="col-md-12">
                      <h4 class="titre-resultat">
                        Récapitulatif de ma Demande
                      </h4>
                    </div>
                    <div
                      class="col-md-9 col-md-push-1 desk-pad-left-0"
                      style="margin-bottom:15px"
                    >
                      <div class="col-md-6 result-summary-titre">
                        Mensualité :
                      </div>
                      <div class="col-md-6 recap-valeur result-summary-value">
                        49 Dhs
                      </div>
                      <div class="col-md-6 result-summary-titre">
                        Montant du prêt :
                      </div>
                      <div class="col-md-6 recap-valeur ">2 000 Dhs</div>
                      <div class="col-md-6 result-summary-titre">
                        Durée du prêt :
                      </div>
                      <div class="col-md-6 recap-valeur ">4 ans</div>
                      <br /><br />
                      <div class="col-md-6 recap-titre">Taux annuel HT :</div>
                      <div class="col-md-6 recap-valeur recap-valeur">
                        7.401 %
                      </div>
                      <div class="col-md-6 recap-titre">
                        Coût de l'emprunt :
                      </div>
                      <div class="col-md-6 recap-valeur">350 Dhs</div>
                    </div>
                    <div class="call-to-action-blue">
                      <div class="col-md-12">
                        <a
                          href="demande-pret-consommation.html"
                          class="btn-menu-cta-blue"
                          >Je demande ce crédit</a
                        >
                      </div>
                    </div>
                  </div>

                  <h4 class="titre-resultat">Durées alternatives</h4>
                  <div class="row result-header">
                    <div class="col-md-3 result-duree result-duree-1"></div>
                    <div class="col-md-4 result-duree result-duree-2">
                      Mensualité
                    </div>
                    <div class="col-md-5 result-duree result-duree-3">
                      Coût du crédit
                    </div>
                  </div>

                  <div class="row result-data">
                    <div class="col-md-3 result-duree result-duree-1">
                      3 ans
                    </div>
                    <div class="col-md-4 result-duree result-duree-2">
                      63 Dhs
                    </div>
                    <div class="col-md-5 result-duree result-duree-3">
                      261 Dhs
                    </div>
                  </div>

                  <div class="row result-data">
                    <div class="col-md-3 result-duree result-duree-1">
                      4 ans
                    </div>
                    <div class="col-md-4 result-duree result-duree-2">
                      49 Dhs
                    </div>
                    <div class="col-md-5 result-duree result-duree-3">
                      350 Dhs
                    </div>
                  </div>

                  <div class="row result-data">
                    <div class="col-md-3 result-duree result-duree-1">
                      5 ans
                    </div>
                    <div class="col-md-4 result-duree result-duree-2">
                      41 Dhs
                    </div>
                    <div class="col-md-5 result-duree result-duree-3">
                      441 Dhs
                    </div>
                  </div>

                  <div class="row result-data">
                    <div class="col-md-3 result-duree result-duree-1">
                      6 ans
                    </div>
                    <div class="col-md-4 result-duree result-duree-2">
                      35 Dhs
                    </div>
                    <div class="col-md-5 result-duree result-duree-3">
                      535 Dhs
                    </div>
                  </div>

                  <div class="row result-data">
                    <div class="col-md-3 result-duree result-duree-1">
                      7 ans
                    </div>
                    <div class="col-md-4 result-duree result-duree-2">
                      31 Dhs
                    </div>
                    <div class="col-md-5 result-duree result-duree-3">
                      630 Dhs
                    </div>
                  </div>
                </div>
                <div class="cta-new-simul">
                  <a
                    href="credit-consommation.html"
                    class="btn-menu-cta-blue marg-top-cta"
                    >Nouvelle simulation</a
                  >
                </div>
              </div>
            </div>
            <div class="form-group text-dark" v-if="isCalcul">
              <label class="intitule-sm champs-obligatoire"
                >* : Champs obligatoires</label
              >
              Mensualité : {{ total }} Dhs<br />
              Montant du prêt :{{ montant }} Dhs<br />
              Durée du prêt :{{ period }} {{ isYears ? "ans" : "mois" }}<br />
              Taux annuel HT :{{ tax }} %<br />
              Coût de l'emprunt :{{ (montant * tax) / 100 }} Dhs<br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isYears: 0,
      montant: 0,
      tax: 0,
      isCalcul: 0,
      period: 0,
      total: 0,
    };
  },
  methods: {
    calcul() {
      this.isCalcul = 1;
      //  this calc nombre of months
      var months = this.isYears ? 12 : 1;
      this.total = this.montant / (this.period * months);
    },
  },
};
</script>

<style scoped lang="scss">
.Cafpi {
  color: #fff;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
div {
  display: block;
}
h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: #f4f1e8;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 1.5;
  margin: auto;
  text-rendering: optimizeLegibility;
}
.App,
body {
  color: #3c3f48;
}
.h4,
h4 {
  font-size: 18px;
}
.titre-resultat {
  background-color: #ef8401;
  margin: 0 -15px 15px -15px;
  padding: 8px;
  color: #fff;
  font-family: Arial;
}
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
  letter-spacing: 125%;
  line-height: 105%;
}
.col-md-12 {
  width: 100%;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.result-table-mensualite {
  float: left;
  width: 95%;
  background-color: #fff;
  color: #263f7b;
  margin: 20px;
}
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
  .cafpi-nav-ariane {
    margin: 20px 0;
    color: #fff;
  }
  h1 {
    font-size: 2em;
    letter-spacing: 110%;
    line-height: 120%;
  }
  .titre-simul {
    margin-top: 0;
    font-size: 30px;
    margin-bottom: 30px;
    margin-left: 15px;
  }

  .frm-calculator {
    width: 90%;
    color: #263f7b;
    background-color: #fff;
    padding: 50px;
    margin-left: 15px;
  }

  .form-group {
    padding-bottom: 40px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  input {
    line-height: normal;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    color: #263f7b;
    font: inherit;
    margin: 0;
  }

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  form {
    display: block;
    margin-top: 0em;
  }
  .intitule {
    color: #3c3f48;
    width: 55%;
    float: left;
    margin-top: 3px;
  }
  a,
  label,
  p {
    color: #fff;
    font-size: 18px;
    letter-spacing: 105%;
    line-height: 125%;
  }
  a,
  label,
  p {
    font-family: Replica-Light, sans-serif;
  }
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
  }
  .form-control {
    width: 40%;
    float: left;
  }
  .form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    -webkit-transition: border-color ease-in-out 0.15s,
      -webkit-box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  }
  input {
    line-height: normal;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    color: #263f7b;
    font: inherit;
    margin: 0;
  }
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  input {
    line-height: normal;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font: inherit;
    color: inherit;
  }
  .unite {
    color: #3c3f48;
    width: 3%;
    float: right;
    font-weight: 700;
    margin-top: 13px;
  }
  .select-duree {
    float: right;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  div {
    display: block;
  }
  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  input[type="checkbox"],
  input[type="radio"] {
    margin: 4px 0 0;
    margin-top: 1px\9;
    line-height: normal;
  }
  input[type="checkbox"],
  input[type="radio"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
  }
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: #f4f1e8;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 1.5;
    margin: auto;
    text-rendering: optimizeLegibility;
  }
  .btn-primary.active,
  .btn-primary:active,
  .open > .dropdown-toggle.btn-primary {
    background-image: none;
  }
  .btn-primary.active,
  .btn-primary:active,
  .open > .dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
  }
  .btn-primary {
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
    font: normal normal bold 20px arial;
    color: #ffffff;
    text-decoration: none;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 30px;
    margin-top: 15px;
  }

  .unite {
    color: #3c3f48;
    width: 3%;
    float: right;
    font-weight: 700;
    margin-top: 13px;
  }
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .frm-calculator {
    width: 90%;
    color: #263f7b;
    background-color: #fff;
    padding: 50px;
    margin-left: 15px;
  }
  .Cafpi {
    color: #fff;
  }
  .App,
  body {
    color: #3c3f48;
  }
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: #f4f1e8;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 1.5;
    margin: auto;
    text-rendering: optimizeLegibility;
  }
  body,
  body .cc_banner.cc_container.cc_container--open .cc_btn,
  body .cc_banner.cc_container.cc_container--open > p {
    font-family: Replica-Light, sans-serif;
  }
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    background-color: #fff;
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  html {
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  :after,
  :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  html {
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  form {
    display: block;
    margin-top: 0em;
  }
  .App,
  body {
    color: #3c3f48;
  }
  .form-group {
    padding-bottom: 40px;
  }

  .form-group {
    margin-bottom: 15px;
  }
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .champs-obligatoire {
    color: #ff0000;
  }
  .intitule-sm {
    color: #3c3f48;
    width: 40%;
    float: left;
  }
  a,
  label,
  p {
    color: #fff;
    font-size: 18px;
    letter-spacing: 105%;
    line-height: 125%;
  }

  a,
  label,
  p {
    font-family: Replica-Light, sans-serif;
  }
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
  }
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  user agent stylesheet label {
    cursor: default;
  }

  .btn-primary.active.focus,
  .btn-primary.active:focus,
  .btn-primary.active:hover,
  .btn-primary:active.focus,
  .btn-primary:active:focus,
  .btn-primary:active:hover,
  .open > .dropdown-toggle.btn-primary.focus,
  .open > .dropdown-toggle.btn-primary:focus,
  .open > .dropdown-toggle.btn-primary:hover {
    color: #fff;
    background-color: #204d74;
    border-color: #122b40;
  }
  .btn-primary:hover,
  .btn-primary:active,
  .btn-primary:focus {
    border: 1px solid #ef8401;
    background: #ffce01;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#ffce01),
      to(#e57f01)
    );
    background: -moz-linear-gradient(top, #ffce01, #e57f01);
  }
  .btn-menu-cta-blue:active,
  .btn-primary:active {
    background: #203669;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#203669),
      to(#203669)
    );
    background: -moz-linear-gradient(top, #203669, #203669);
    background: linear-gradient(to bottom, #203669, #203669);
  }
  .btn-menu-cta-blue:hover,
  .btn-menu-cta-blue:focus,
  .btn-primary:hover,
  .btn-primary:focus {
    border: 1px solid #26407b;
    background: #497aec;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#497aec),
      to(#26417e)
    );
    background: -moz-linear-gradient(top, #497aec, #26417e);
    background: linear-gradient(to bottom, #497aec, #26417e);
    color: #fff !important;
    text-decoration: none;
  }
  .btn-primary.active,
  .btn-primary:active,
  .open > .dropdown-toggle.btn-primary {
    background-image: none;
  }
  .btn-primary.active,
  .btn-primary:active,
  .open > .dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
  }
  .btn.active,
  .btn:active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgb(0 0 0 / 13%);
    box-shadow: inset 0 3px 5px rgb(0 0 0 / 13%);
  }
  .btn.focus,
  .btn:focus,
  .btn:hover {
    color: #333;
    text-decoration: none;
  }
  .btn-primary {
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
    font: normal normal bold 20px arial;
    color: #ffffff;
    text-decoration: none;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 30px;
    margin-top: 15px;
  }
  .btn-menu-cta,
  .btn-menu-cta-blue,
  .btn-primary {
    font-family: "Replica-Light" !important;
  }
  .btn-primary {
    height: 50px;
  }
  .btn-menu-cta-blue,
  .btn-primary {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 12px 24px;
    border: 1px solid #203669;
    border-radius: 8px;
    background: #3d66c5;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#3d66c5),
      to(#203669)
    );
    background: -moz-linear-gradient(top, #3d66c5, #203669);
    background: linear-gradient(to bottom, #3d66c5, #203669);
    text-shadow: #13203e 1px 1px 1px;
    font: normal normal bold 20px arial;
    color: #fff;
    text-decoration: none;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 30px;
    margin-top: 15px;
  }
  .form-control {
    width: 40%;
    float: left;
  }
  .btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
  }
  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
}

.opt_label {
  color: #3c3f48;
  font-weight: 700;
  margin-right: 25px;
}
</style>
