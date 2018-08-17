<template lang="pug">
  
  .row
    .col-12
      h2 {{pageTitle}}

</template>

<script>
export default {
  props: {
    pageTitle: String
  }
};
</script>
