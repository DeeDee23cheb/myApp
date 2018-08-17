<template lang="pug">
  
    .slider
      .slider-wrapper(
        ref="sliderWrapper"
        :style="{ 'transform' : 'translateX(' + translateX + 'px)', 'transition-duration': options.slideSpeed + 's'  }")
        .slider-item(
          v-for="(img, index) in images" 
          :data-index="index")
          img(:src="'/sliderImages/' + img")
      button.slider-btn.slider-next(@click="slideNext") Next
      button.slider-btn.slider-prev(@click="sliderPrev") Prev
      input(v-model="options.slideSpeed")
      p {{totalCountSlide}}

</template>

<style lang="scss" scoped>
.slider {
  overflow: hidden;
  img {
    max-width: 100%;
    height: auto;
  }
}

.slider-wrapper {
  display: flex;
}

.slider-item {
  flex-basis: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  max-width: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      images: ["Slider_1.jpg", "Slider_2.jpg", "Slider_3.jpg"],
      currentSlide: 0,
      totalCountSlide: null,
      translateX: 0,
      options: {
        slideSpeed: 1
      }
    };
  },
  methods: {
    slideNext() {
      this.translateX -= this.sliderItemWidth;
    },
    sliderPrev() {
      this.translateX += this.sliderItemWidth;
    }
  },
  computed: {
    sliderItemWidth() {
      return document.querySelector(".slider-item").offsetWidth;
    }
  },
  mounted() {
    this.totalCountSlide = document.querySelectorAll(".slider-item").length;
  },
  watch: {}
};
</script>
