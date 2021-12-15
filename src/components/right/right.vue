<template>
    <div class="test__flex__right">
        <box
        v-for="(list, index) in DATA_GETT" :key="index"
        v-bind:list="list"
        >
        </box>
    </div>
</template>

<script>
import box from "@/components/right/components/right_box.vue";
import { mapGetters } from "vuex";

//тут просто v-for по геттеру, и в каждый пробрасывается пропсом свои данные
export default {
  name: "right",
  components: {
      box
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