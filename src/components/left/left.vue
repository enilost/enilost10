<template>
    <div class="test__flex__left">
        <ul>
            <list 
            v-for="list, index in DATA_GETT" :key="index"
            v-bind:list="list"
            >
            </list>
        </ul>
    </div>
</template>

<script>
import list from "@/components/left/components/list.vue";

import { mapGetters } from "vuex";

//тут просто v-for по геттеру, и в каждый пробрасывается пропсом свои данные
export default {
  name: "left",
  components: {
      list,
  },
  data() {
    return {

    };
  },
  methods: {

  },
  computed: {
      ...mapGetters(['DATA_GETT']),
  },
  watch: {

  },

};
</script>

<style>

</style>