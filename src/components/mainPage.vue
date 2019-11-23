<template>
    <div id="mainPage">
        <div class="address_section px-3 pb-5">
            <div class="address_section__slogan container pl-0 py-5 pr-5">
                <h1>把您喜愛的美食親手外送給您</h1>
            </div>
            <div class="address_section__search container px-0">
                <form action="">
                    <div class="search__input">
                        <input class="w-100 px-3" type="text" placeholder="輸入您欲送達的地址">
                    </div>
                    <div class="search__button d-flex align-items-center my-3">
                        <button class="button d-inline-block w-100 change_tab">外送</button>
                        <span class="mx-2">或</span>
                        <button class="button d-inline-block w-100 change_tab">外帶自取</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="join_section pt-3 px-3 pb-5">
            <div class="join_section__intro card">
                <div class="card-body px-3">
                    <h4 class="card-title">加入foodpanda，將你的美食分享給大家！</h4>
                    <p class="card-text">想要上千名新顧客試試你的美食嗎？我們想，相信你也是！</p>
                    <p class="card-text">達到這個目的超簡單：我們把你的菜單放上線、幫你處理訂單、到餐廳去取餐、將餐點外送給顧客們！</p>
                    <p class="card-text">還等什麼？一起和我們開啟這個外送美食給大家的旅程吧！</p>
                    <a href="https://foodpandasg.formstack.com/forms/becomeapartner_tw" class="btn button d-inline-block w-100">加入我們</a>
                </div>
            </div>
        </div>
        <div class="city_section pt-3 pl-3 pb-5">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide mr-3 change_tab" style="width: 216px; overflow: hidden;">
                        <img src="https://asia-public.foodpanda.com/marketing/production/tw/images/nl/city-images/Tapei1.jpg?v=1459522682" style="height: 272px; margin-left: -100px">
                        <span class="swiper_city_name">台北市</span>
                    </div>
                    <div class="swiper-slide mr-3 change_tab" style="width: 216px; overflow: hidden;">
                        <img src="https://asia-public.foodpanda.com/marketing/production/tw/images/nl/city-images/New-Taipei1.jpg?v=1459522682" style="height: 272px; margin-left: -100px">
                        <span class="swiper_city_name">新北市</span>
                    </div>
                    <div class="swiper-slide mr-3 change_tab" style="width: 216px; overflow: hidden;">
                        <img src="https://asia-public.foodpanda.com/marketing/production/tw/images/nl/city-images/Taichung1.jpg?v=1459522682" style="height: 272px; margin-left: -100px">
                        <span class="swiper_city_name">台中市</span>
                    </div>
                    <div class="swiper-slide mr-3 change_tab" style="width: 216px; overflow: hidden;">
                        <img src="https://asia-public.foodpanda.com/marketing/production/tw/images/nl/city-images/Kaohsiung1.jpg?v=1459522682" style="height: 272px; margin-left: -100px">
                        <span class="swiper_city_name">高雄市</span>
                    </div>
                    <div class="swiper-slide mr-3 change_tab" style="width: 216px; overflow: hidden;">
                        <img src="https://images.deliveryhero.io/image/fd-tw/city-tile/City-tile-Hsinchu.jpg" style="height: 272px; margin-left: -100px">
                        <span class="swiper_city_name">新竹市</span>
                    </div>
                    <div class="swiper-slide mr-3 change_tab" style="width: 216px; overflow: hidden;">
                        <img src="https://images.deliveryhero.io/image/fd-tw/city-tile/City-tile-taoyuan.jpg" style="height: 272px; margin-left: -100px">
                        <span class="swiper_city_name">桃園市</span>
                    </div>
                    <div class="swiper-slide mr-3 change_tab" style="width: 216px; overflow: hidden;">
                        <img src="https://images.deliveryhero.io/image/fd-tw/city-tile/city-tile-Keelung.jpg" style="height: 272px; margin-left: -100px">
                        <span class="swiper_city_name">基隆市</span>
                    </div>
                    <div class="swiper-slide mr-3 change_tab" style="width: 216px; overflow: hidden;">
                        <img src="https://images.deliveryhero.io/image/fd-tw/city-tile/city-tile-Tainan.jpg?webp=0" style="height: 272px; margin-left: -100px">
                        <span class="swiper_city_name">台南市</span>
                    </div>
                    <div class="swiper-slide mr-3 change_tab" style="width: 216px; overflow: hidden;">
                        <img src="https://images.deliveryhero.io/image/fd-tw/city-tile/city-title-Miaoli.jpg?webp=0" style="height: 272px; margin-left: -100px">
                        <span class="swiper_city_name">苗栗市</span>
                    </div>
                    <div class="swiper-slide mr-3 change_tab" style="width: 216px; overflow: hidden;">
                        <img src="https://images.deliveryhero.io/image/fd-tw/city-tile/city-tile-chiayi.jpg?webp=0" style="height: 272px; margin-left: -100px">
                        <span class="swiper_city_name">嘉義市</span>
                    </div>
                </div>
                <div class="swiper-scrollbar"></div>
            </div>
        </div>
        <div class="corporate_section pt-3 px-3 pb-5">
            <div class="corporate_section__intro card">
                <div class="card-body px-3">
                    <h4 class="card-title">foodpanda 企業平台</h4>
                    <p class="card-text">訂購美食，在會議中或加班時輕鬆享用</p>
                    <a class="btn button d-inline-block w-100" href="https://corporate.foodpanda.com.tw/" target="_blank">立即開始</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import 'swiper/dist/js/swiper.js'
export default {
  name: 'mainPage',
  props: {
  },
  mounted () {
    new Swiper ('.swiper-container', {
      direction: 'horizontal',
      speed: 200,
      slidesPerView: 'auto',
      freeMode: true,
      freeModeMomentumRatio: 0.7,
      freeModeMomentumVelocityRatio: 0.7,
      scrollbar: {
      el: '.swiper-scrollbar',
        hide: true
      }
    })
  }
}
</script>

<style>
.address_section{
    background-image: url('https://images.deliveryhero.io/image/foodpanda/hero-home-tw.jpg?width=800&height=512');
    background-position: 70vw;
    background-repeat: no-repeat;
    background-size: 400px;
}
.address_section__slogan h1{
    padding-top: 5rem!important;
    font-size: 1.6em;
    font-weight: 500;
}
.search__input input{
    border-radius: 0%;
    height: 64px;
    box-shadow: none;
    border: 1px solid #dcdcdc;
    box-shadow: 0 2px 28px 0 rgba(0,0,0,0.12);
}
.join_section{
    background-image: url('https://images.deliveryhero.io/image/foodpanda/home-vendor-tw.jpg?width=800&height=512');
    background-repeat: no-repeat;
    background-size: 400px;
    background-position: top center;
}
.join_section__intro{
    box-shadow: 0 2px 28px 0 rgba(0,0,0,0.12);
    margin-top: 180px;
    border-radius: 0 !important;
    border: none !important;
}
.card{
    border-radius: 0 !important;
    border: none !important;
}
.card-body .button{
    height: 48px ;
    line-height: 32px;
}
.swiper-container {
    height: 272px;
}
.swiper_city_name{
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 16px;
    color: #fff;
    font-weight: 1000;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}
.corporate_section{
    background-image: url('https://images.deliveryhero.io/image/foodpanda/home-corporate-tw.jpg?width=800&height=512');
    background-repeat: no-repeat;
    background-size: 400px;
    background-position: top center;
}
.corporate_section__intro{
    box-shadow: 0 2px 28px 0 rgba(0,0,0,0.12);
    margin-top: 180px;
    border-radius: 0;
    border: none;
}
</style>
