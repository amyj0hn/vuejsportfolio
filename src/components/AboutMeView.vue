<template>
    <div class="container">
  
  
  <div class="row">
  
      <div class="col">
          <div id="details">
              <h3 class="display-5">So, Who is Amy?</h3>
                  <p v-if="aboutMe?.length">
              
              <span>{{ aboutMe[0]?.description }}</span>
            </p>
            <Spinner v-else />
          </div>
        </div>
  
        <div class="col">
   <img src="" alt="...">
        </div>
  </div>
    </div>
  
  </template>
  
  <script setup>
  import Spinner from "@/components/Spinner.vue";
  
  import { computed, onMounted, ref } from "vue";
  import { useStore } from "vuex";
  const store = useStore();
  const cnt = ref(-1);
  //This line of code accesses your data as object
  const aboutMe = computed(() => store.state.aboutMe);
  function repeat() {
    try {
      if (cnt.value == aboutMe.value?.length) cnt.value = 0;
      store.value = aboutMe.value?.at(cnt.value)?.aboutMe;
      setTimeout(repeat, 2000);
      cnt.value++;
    } catch (e) {
      //
    }
  }
  
  onMounted(() => {
    store.dispatch("fetchAbout");
    repeat();
  });
  </script>
  
  
  
  
  
  <style>
  
  </style>