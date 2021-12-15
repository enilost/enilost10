<template>
  <div id="app">
    <div class="test">
		<div class="test__flex">
			<left></left>
			<right></right>
		</div>
	</div>
  </div>
</template>

<script>
import left from "@/components/left/left.vue";
import right from "@/components/right/right.vue";

export default {
  name: "app",
  components: {
    left,
    right
  },

  data() {
    return {

    };
  },
  methods: {

  },
  computed: {

  },
  watch: {

  },

};
</script>
<style lang="scss">
</style>
