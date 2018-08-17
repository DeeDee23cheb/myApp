<template lang="pug">
  
  .navigation
    .container
      .row
        .col-12
          nav.navbar
            ul.navbar-nav
              li(v-for="item in navItems")
                router-link(:to="{ name: item.href }") {{item.name}}

</template>

<style lang="scss">
</style>

<script>
export default {
  name: "navigation",
  data() {
    return {
      navItems: [
        {
          name: "Главная",
          href: "home"
        }
      ]
    };
  }
};
</script>
