<template>
    <div class="container">
      <div class="row vh-100 align-items-center">
        <div class="col">
          <img
            src="https://amyj0hn.github.io/project-images/images/20240422_091901.jpg"
            alt="portfolio-picture"
            class="img-fluid w-75 shadow rounded-top"
          />
        </div>
  
        <div class="col">
          <div id="details">
            <h1 class="display-1">Amy Johnson</h1>
            <p v-if="jobTitle?.length">
              I am a
              <span>{{ jobTitle[0]?.title }}</span>
            </p>
            <Spinner v-else />
          </div>
          <button type="button"><a href="/reachme">Reach Me</a></button>
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
  //This line of code accesses your data as an array
  const jobTitle = computed(() => store.state.jobTitle);
  function repeat() {
    try {
      if (cnt.value == jobTitle.value?.length) cnt.value = 0;
      store.value = jobTitle.value?.at(cnt.value)?.title;
      setTimeout(repeat, 2000);
      cnt.value++;
    } catch (e) {
      //
    }
  }
  
  onMounted(() => {
    store.dispatch("fetchJobTitle");
    repeat();
  });
  </script>
  
  <style scoped>
  a{
    text-decoration: none;
    color: var(--tertiary);
  }
  </style>
  