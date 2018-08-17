<template lang="pug">
  #app
    #nav.container-fluid
      nav
        router-link.nav-link(to="/") Главная
        router-link.nav-link(:to="{ name: 'about' }") Обо мне
        router-link.nav-link(:to="{ name: 'myOwnWorks'}") Мои проекты
    transition(name="fade" mode="out-in")
      router-view.router-view(:key="$router.path")
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Exo+2:300,400,700");

$color1: hsla(100%, 100%, 99%, 1);
$color2: hsla(209%, 59%, 34%, 1);
$color3: hsla(358%, 65%, 46%, 1);
$color4: hsla(52%, 98%, 48%, 1);
$color5: hsla(228%, 25%, 12%, 1);

$color1: rgba(253, 255, 252, 1);
$color2: rgba(35, 87, 137, 1);
$color3: rgba(193, 41, 46, 1);
$color4: rgba(241, 211, 2, 1);
$color5: rgba(22, 25, 37, 1);

body {
  margin: 0;
}

#app {
  font-family: "Exo 2", sans-serif;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#nav {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $color2;
  z-index: 15;
  nav {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}

.nav-link {
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  color: $color1;
  position: relative;
  &:hover {
    color: $color1;
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:after {
    position: absolute;
    content: "";
    width: calc(100% - 2rem);
    height: 2px;
    background-color: $color1;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    opacity: 0;
    transform: scale(0);
    transition: 0.3s;
  }
}

.router-view {
  opacity: 1;
  z-index: 5;
}

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
