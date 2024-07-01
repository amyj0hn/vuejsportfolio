<template>
  <div>

  </div>
</template>

<script setup>
  
  import { computed, onMounted, ref } from "vue";
  import { useStore } from "vuex";
  const store = useStore();
  const cnt = ref(-1);
  //This line of code accesses your data as object
  const testimonials = computed(() => store.state.testimonials);
  function repeat() {
    try {
      if (cnt.value == testimonials.value?.length) cnt.value = 0;
      store.value = testimonials.value?.at(cnt.value)?.testimonials;
      setTimeout(repeat, 2000);
      cnt.value++;
    } catch (e) {
      //
    }
  }
  
  onMounted(() => {
    store.dispatch("fetchTestimonials");
    repeat();
  });
</script>

<style>

</style>