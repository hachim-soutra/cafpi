<template>
  <div class="Cafpi">
    <div class="Cafpi__container">
      <div class="Cafpi__CTAs row m-0 flex-row">
        <LeftContent 
          title="La nouvelle façon d'obtenir votre crédit au Maroc"
          subtitle="Rapide, simple et au taux le plus bas"
        />
        <RightContent />
      </div>
    </div>
  </div>
</template>

<script>
import LeftContent from '@/components/Cafpi/LeftContent.vue';
import RightContent from '@/components/Cafpi/RightContent.vue';
export default {
  components: {
    LeftContent,
    RightContent
  }
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
</style>
