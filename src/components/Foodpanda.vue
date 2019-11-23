<template>
  <nav class="navbar fixed-top navbar-light navbar_fix navbar-expand-ls">
    <img src="../assets/avatar.svg" width="30" height="30" class="d-inline-block align-top" alt />
    <a class="navbar-brand to_main_tab" style="color: #D70F64" href="#">foodpanda</a>
    <img src="../assets/shopping-bag.svg" width="30" height="30" class="d-inline-block align-top" alt />
  </nav>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'foodPanda',
  props: {
    },
  mounted () {
    $('.change_tab').click(function () {
      $('#mainPage').hide()
      $('#foodPage').show()
    })
    $('.to_main_tab').click(function () {
      $('#mainPage').show()
      $('#foodPage').hide()
    })
  }
}
</script>

<style type="text/css">
.navbar {
  background-color: white;
  box-shadow: 0px 0px 5px #d1d1d1;
}
.address_section {
  background-image: url(https://images.deliveryhero.io/image/foodpanda/hero-home-tw.jpg?width=800&height=512);
  background-repeat: no-repeat;
  background-size: 420px;
  background-position: 70vw;
}
.search_input {
  height: 64px;
}
.button {
  width: 100%;
  height: 64px;
  padding: 0 31px;
  background-color: #d70f64;
  border-radius: 0%;
  border: none;
  color: white;
  font-size: 1rem;
}

.join {
  background-image: url(https://images.deliveryhero.io/image/foodpanda/home-vendor-tw.jpg?width=800&height=512);
  height: 280px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.join_info {
  width: 90vw;
  z-index: 3;
  background-color: white;
  position: relative;
  left: 5vw;
  top: 200px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 0px 5px #d1d1d1;
}
.join_info_slogan {
  padding-top: 10px;
  padding-bottom: 12px;
  color: #212529;
  font-weight: 400;
  font-size: 1.5rem;
}
.join_info_content {
  padding-top: 3px;
  padding-bottom: 3px;
  color: #212529;
  font-size: 1rem;
}
.join_button {
  width: 100%;
  height: 32px;
  padding: 0 15px;
  background-color: #d70f64;
  border-radius: 0%;
  border: none;
  color: white;
  font-size: 1rem;
}
.blank {
  position: relative;
  width: 100%;
  padding-top: 350px;
}
.city {
  padding-top: 10px;
  padding-bottom: 10px;
}
.city_name {
  position: relative;
  color: #ffffff;
  font-size: 1.5rem;
  top: -50px;
  left: 5px;
  }

</style>
