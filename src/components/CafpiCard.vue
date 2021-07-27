<template>
  <div class="col-md-6 btnMenu btnImmo">
          <h1>{{ item.name }}</h1>
          
          <p >
           {{ item.description }}
          </p>
          <div class="row">
            <div class="col-md-6">
              <a :href="item.lien1" class="btn-menu-cta"
                >Ma Simulation en 1 min!</a
              >
            </div>
            <div class="col-md-6">
              <a :href="item.lien2" class="btn-menu-cta"
                >Je demande un prêt</a
              >
            </div>
          </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
