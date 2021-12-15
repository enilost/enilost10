<template>
    <li class="test__flex__left__item-accordion">
        <div class="test__flex__left__item-accordion__arrow-check-title">
            <div class="arrow">
                <span class="arrow-right"
                    v-show="!isArrow"
                    @click="toggleArrow"
                >&rarr;
                </span>
                <span class="arrow-bot"
                    v-show="isArrow"
                    @click="toggleArrow"
                >&darr;
                </span>
            </div>
            <div class="check">
                <input type="checkbox" name="" :id="list.name" 
                @change="checkList" 
                v-model="isListCheck"
                :indeterminate.prop="this.indeterminate"
                >
            </div>
            <label class="title" :for="list.name">{{list.name}}</label>
        </div>
        <div class="test__flex__left__item-accordion__arrow-check-content">
            <ul class="test__flex__left__item-accordion__arrow-check-content__ul" >
                <transition-group name="fade" :duration="300" >
                    <item
                    v-for="(item, index) in list.items" :key="index"
                    v-bind:item="item"
                    v-show="isArrow"
                    >
                    </item>
                </transition-group>
            </ul>
        </div>
    </li>
</template>

<script>
import item from "@/components/left/components/item.vue";
import { mapActions } from 'vuex';

export default {
  name: "list",
  components: {
      item,
  },
  props:{
    list:{
        type: Object,
        default(){
            return {}
        }
    }
  },
  data() {
    return {
        isListCheck: undefined,
        indeterminate: undefined,
        isArrow: true
    };
  },
  methods: {
      ...mapActions(["CHECK_LIST_ACTION"]),
      //* метод чекбокса листа
      //* в зависимости от выбора запускает экшен
      //* который снимает или ставит всем итемам галки
      checkList(){
          if (this.isListCheck == true) {
              this.CHECK_LIST_ACTION({check: true, id: this.list.id})
          }else{
              this.CHECK_LIST_ACTION({check: false, id: this.list.id})
          }
      },
      //* сворачивание листов
      toggleArrow(){
          this.isArrow = !this.isArrow
      }
  },
  computed: {
    //* следит за чекбоксами итемов
    //* тру - все чекнуты, фолс - все не чекнуты, андефайнд - вперемешку
    evreyItemChecksComputed(){
        let everyCheck = this.list.items.every(e => {
            return e.checked == true
        });
        let everyUncheck = this.list.items.every(e => {
            return e.checked == false
        });
        if(everyCheck == true){
            return true
        }
        else if(everyUncheck == true){
            return false
        }
        else {
            return undefined
        } 
    },
  },
  watch: {
      //*при изменении в стейте vuex передает новое значение из геттера в переменную компонента,
      // которая подставлена в v-modal 
      // сам не знаю, зачем наворотил, впринципе все и так работало реактивно,  
      // если в v-modal компонентов просто прописать геттер из vuex
      // но тогда изменения не сохраняются в state vuex
      "list.checked"(){
          this.isListCheck = this.list.checked
      },
      // следит за изменением значения вычисляемого свойства чекбоксов
      // запускает тот же самый экшен, чтобы изменить чекбокс листа,
      // если все итемы в листе чекнуты, то и он чекнется и наоборот
      // +отвечает за состояние неопределенности чекбокса листа
      evreyItemChecksComputed(newVal){
          if (newVal === true) {
              this.indeterminate = false
              this.CHECK_LIST_ACTION({check: true, id: this.list.id})
          }else if (newVal === false){
              this.indeterminate = false
              this.CHECK_LIST_ACTION({check: false, id: this.list.id})
          }else{
              this.indeterminate = true
          }
      }
  },
  mounted(){
      //берет начальные данные из геттера и вычислемого свойства
      this.isListCheck = this.list.checked 
      if(this.evreyItemChecksComputed === undefined){
        this.indeterminate = true
      }
  }

};
</script>

<style lang="scss">
    .arrow-right, .arrow-bot{
        cursor: pointer;
    }
    .fade-enter{
        height: 0;
        overflow: hidden;
    }
    .fade-enter-active{
        animation: heightBox 0.3s linear;
        overflow: hidden;
    }
    .fade-enter-to{
        height: auto;
        overflow: hidden;
    }
    .fade-leave-active{
        animation: heightBox 0.3s linear reverse;
        overflow: hidden;
    }
    .fade-leave-to{
        height: 0;
        overflow: hidden;
    }
    .fade-leave{
    height: auto;
    overflow: hidden;
    }

    @keyframes heightBox {
        0%{
            height: 0px;
        }
        50%{
            height: 15px;
        }
        100%{
            height: 30px;
        }
    } 

</style>