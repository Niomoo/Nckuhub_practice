<template>
    <div id="foodPage">
        <div class="food_section pt-3 px-3 pb-5">
            <ul class="list_wraper list-group">
                <a class="food_item list-group-item list-group-item-action mb-3 rounded" v-for='food in food_data' data-toggle="modal" data-target="#exampleModal" v-on:click="index_of_click=food_data.indexOf(food)" v-bind:key="food.id">
                    <h4 class="font-weight-bold">{{food.name}}</h4><hr class="my-1">
                    <p class="mb-0"><b>營業時間：</b>{{food.open_time}}</p>
                    <p class="mb-0"><b>電話：</b>{{food.tel.replace('+886-',0)}}</p>
                    <p class="mb-0"><b>地址：</b>{{food.address.replace(/^7\d+/,'')}}</p>
                </a>
            </ul>
        </div>   
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel">{{food_data[index_of_click].name}}-簡介</h4>
                </div>
                <div class="modal-body">
                    {{food_data[index_of_click].introduction}}
                </div>
                <div class="modal-footer d-flex justify-content-start">
                    <span v-for='category in food_data[index_of_click].category' v-bind:key="category">{{category}}</span>
                    <button type="button" class="btn btn-secondary ml-auto font-weight-bold" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'foodPage',
  data() {
    return {
      food_data: [],
      index_of_click: 0,
        }
    },
    created(){
        axios.get("https://tomatoguy0502.github.io/FoodPanda_MobileWeb/data/shops_zh-tw.json").then(response => {this.food_data = response.data})
    },
    methods:{
    }
}
</script>

<style scoped>
#foodPage{
    font-family: '微軟正黑體';
    padding-top: 5rem;
}
.modal-body{
    max-height: 50vh;
    overflow: auto;
}
.food_item{
    box-shadow: 0 4px 14px 0 rgba(0,0,0,0.12);
}
</style>