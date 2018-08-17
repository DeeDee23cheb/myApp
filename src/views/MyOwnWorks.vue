<template lang="pug">
	
  .container
    page-title.py-4(:pageTitle="'Это страница моих работ'")
    .row
      .col-12
        nav.navbar.rounded
          ul.nav.d-flex
            li.nav-item
              router-link(:to="{ name: 'Slider' }").nav-link Слайдер
      .col-12
        transition(name="fade" mode="out-in")
          router-view
  
</template>

<style lang="scss">
.navbar {
  .nav-link {
    color: rgba(35, 87, 137, 1);
    &:after {
      background-color: rgba(35, 87, 137, 1);
    }
  }
}
</style>
