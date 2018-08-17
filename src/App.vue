<template lang="pug">
  #app
    
</template>

<style lang="scss">
.fade-enter {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.4s;
}
</style>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Navigation
  }
};
</script>
