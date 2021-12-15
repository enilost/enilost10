<template>
    <li class="test__flex__left__item-accordion__arrow-check-content__ul__li">
        <div class="li-flex">
            <div class="li-flex__check">
                <input class="li-flex__check__input" 
                type="checkbox" 
                name="" 
                :id="item.id" 
                v-model="isChecked"
                @change="isItemChecked(isChecked)"
                >
                <label class="li-flex__check__label" :for="item.id">{{item.name}}</label>
            </div>
            <div class="li-flex__count">
                <input type="number" 
                class="li-flex__count__numder" 
                v-model="counter"
                @input="inputCount"
                onkeydown="return event.keyCode !== 69 && event.keyCode !== 189 && event.keyCode !== 187">

                <input type="color" 
                class="li-flex__count__color" 
                v-model="color"
                @change="ChangeColor"
                >
            </div>
        </div>
    </li>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "item",
  components: {
  },
  props:{
    item:{
        type: Object,
        default(){
            return {}
        }
    }
  },
  data() {
    return {
        isChecked: undefined,
        color: '#ffffff',
        counter: null
    };
  },
  methods: {
      ...mapActions(["CHECK_ITEM_ACTION","COUNT_ITEM_ACTION","COLOR_ITEM_ACTION"]),
      //экшен при изменении цвета, изменяет vuex state
      isItemChecked(isChecked){
        this.CHECK_ITEM_ACTION({check: isChecked, list: this.item.list, id: this.item.id})
      },
      //экшен при изменении цвета, изменяет vuex state
      inputCount(){
        if ( this.counter < 0 ) { this.counter = 0; return }
        this.COUNT_ITEM_ACTION({count: this.counter, list: this.item.list, id: this.item.id});
      },
      //экшен при изменении цвета, изменяет vuex state
      ChangeColor(){
        this.COLOR_ITEM_ACTION({color: this.color, list: this.item.list, id: this.item.id});
      },
  },
  computed: {

  },
  watch: {
    // подставляет обновенные значения стейта из геттера при изменении стейта 
    "item.checked"(){
      this.isChecked = this.item.checked
    },
    // подставляет обновенные значения стейта из геттера при изменении стейта 
    "item.color"(){
      this.color = this.item.color
    },
    // подставляет обновенные значения стейта из геттера при изменении стейта 
    "item.count"(){
      this.counter = this.item.count
    }
  },
  mounted(){
    //начальные значения переменных из геттера
    this.isChecked = this.item.checked
    this.color = this.item.color
    this.counter = this.item.count
  }
};
</script>

<style lang="scss">

</style>