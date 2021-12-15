<template>
        <div class="test__flex__right__box">
            <div class="test__flex__right__box__title">
                {{list.name}}
            </div>
            <div class="test__flex__right__box__content">
                <ul class="test__flex__right__box__content__ul">

                    <li class="test__flex__right__box__content__ul__li"
                    v-for="(box, index) in checkedList" :key="index"
                    >
                      <span class="test__flex__right__box__content__ul__li__span"
                      v-for="(count, idx) of +box.count" :key="idx"
                      v-bind:style="{ 'background-color': box.color }"
                      @click="deleteBox(list.id, box )"
                      >
                      {{box.name}}</span>

                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
  name: "box",
  components: {
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

    };
  },
  methods: {
    ...mapActions(['DELETE_BOX_ACTION']),
    //экшен на удаление квадратика при клике
    //изменяет state, уменьшает счетчик в итеме на единицу
    deleteBox(id, box){
      this.DELETE_BOX_ACTION({id, box});
    }
  },
  computed: {
    //отвечает за отображение только тех квадратиков, чьи итемы чекнуты галками
    checkedList(){
      return this.list.items.filter(e => {
         return e.checked 
      })
    }
  },
  watch: {

  },

};
</script>

<style>

</style>