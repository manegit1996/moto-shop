<template>
    <div class="brands">
        <h1>Brands</h1>
        <p>We have tried to always offer the latest and best models of Scorpion helmets, Ikon clothes, TCKS shoes, Puig tuning parts and 20 other brands,<br> all at popular prices, with complete service and fast delivery.
        </p>
        <div class="brands-wrapper">
            <img src="../assets/images/brands/scorpiont.png" alt="">
            <img src="../assets/images/brands/ixont.png" alt="">
            <img src="../assets/images/brands/spykett.png" alt="">
            <img src="../assets/images/brands/tcxtt.png" alt="">
            <img src="../assets/images/brands/puigt.jpg.png" alt="">
        </div><!--end.brands-wrapper-->
        <div class="brands2-wrapper">
            <img src="../assets/images/brands/lampat.png" alt="">
            <img src="../assets/images/brands/furygant.png" alt="">
            <img src="../assets/images/brands/galfert.png" alt="">
            <img src="../assets/images/brands/kyttt.png" alt="">
            <img src="../assets/images/brands/suomyt.png" alt="">
        </div><!--end.brands2-wrapper-->
    </div> <!--end.brands-->
</template>
<script>
export default {
    name: 'brands'
}
</script>
<style scoped>


@media screen and (min-width: 768px) and (max-width: 1023px) {
  .brands h1 {
    text-align: center;
    font-weight: 600;
    font-size: 28px;
    padding: 20px 0;
  }
  .brands p {
    text-align: center;
    margin: 0 auto;
    padding: 10px 0;
    width: 70%;
    font-size: 16px;
    min-height: 60px;
  }
  .brands-wrapper img {
    width: 12%;
  }
  .brands2-wrapper img {
    width: 12%;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px)  {
  .brands p {
    width: 70%;
  }
}

</style>