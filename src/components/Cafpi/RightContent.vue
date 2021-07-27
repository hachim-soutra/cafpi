<template>
  <div class="Cafpi__rightContent col-md-5">
    <div class="CafpiPrimaryCTAs__container w-75 m-auto">
      <a
        class="ButtonComponent__liftWrapper slider_tabs pl-2"
        href="credit-immobilier-mensualites.html"
        ><div
          class="ButtonComponent ButtonComponent--primary first-button ButtonComponent--sm"
        >
          <span class="ButtonComponent__text ">Mes premières simulations</span>
          <i class="fas fa-arrow-right"></i></div
      ></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.Cafpi__CTAs .ButtonComponent__liftWrapper .ButtonComponent--primary {
  color: #263f7b;
  background: linear-gradient(45deg, transparent 3px, #fff 3px),
    linear-gradient(135deg, transparent 3px, #fff 3px),
    linear-gradient(225deg, transparent 3px, #fff 3px),
    linear-gradient(315deg, transparent 3px, #fff 3px);
  background-position: bottom left, top left, top right, bottom right;
  background-repeat: no-repeat;
  background-size: 60% 60%;
  padding: 5px 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
</style>
