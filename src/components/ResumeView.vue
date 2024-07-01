<template>
    <div class="container">
      <div class="row">
        <h3 class="display-5 heading">Resume</h3>
      </div>
  
      <div class="row">
        <div id="details">
          <div v-if="experience?.length">
              <div class="row">
      <div class="d-flex gap-3">
        <a
          class="btn "
          data-bs-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
          ><i class="bi bi-mortarboard"></i>
          Education
          </a>
        <button
          class="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
        <i class="bi bi-briefcase"></i> 
        Experience
        </button>
        <button
          class="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample3"
          aria-expanded="false"
          aria-controls="multiCollapseExample3"
        >
          References
        </button>
        <button
          class="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".multi-collapse"
          aria-expanded="false"
          aria-controls="multiCollapseExample1 multiCollapseExample2"
        >
          Toggle all
        </button>
      </div>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
              <Card>
                  <template #cardHeader>
                      <img src="https://amyj0hn.github.io/project-images/images/amylogo.png" alt="logo">
  
                  </template>
                  <template #cardBody>
                      <p>{{ experience[0].title }}</p>
                      <p>{{ experience[0].company }}</p>
                      <p>{{ experience[0].startDate }} to {{ experience[0].endDate }}</p>
                      <!-- <p>{{ experience[0] }}</p> -->
                  </template>
              </Card>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
              <Card>
                  <template #cardHeader>
                      <img src="https://amyj0hn.github.io/project-images/images/amylogo.png" alt="logo">
  
                  </template>
                  <template #cardBody>
                      <p>{{ experience[0].title }}</p>
                      <p>{{ experience[0].company }}</p>
                      <p>{{ experience[0].startDate }} to {{ experience[0].endDate }}</p>
                      <!-- <p>{{ experience[0] }}</p> -->
                  </template>
              </Card>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample3">
              <Card>
                  <template #cardHeader>
                      <img src="https://amyj0hn.github.io/project-images/images/amylogo.png" alt="logo">
  
                  </template>
                  <template #cardBody>
                      <p>{{ experience[0].title }}</p>
                      <p>{{ experience[0].company }}</p>
                      <p>{{ experience[0].startDate }} to {{ experience[0].endDate }}</p>
                      <!-- <p>{{ experience[0] }}</p> -->
                  </template>
              </Card>
          </div>
        </div>
      </div>
    </div>
          </div>
          <Spinner v-else />
        </div>
  
      </div>
    </div>
  
  
  </template>
  
  <script setup>
  import Spinner from "@/components/Spinner.vue";
  import Card from '@/components/Card.vue'
  
  import { computed, onMounted, ref } from "vue";
  import { useStore } from "vuex";
  const store = useStore();
  const cnt = ref(-1);
  //This line of code accesses your data as object
  const experience = computed(() => store.state.experience);
  function repeat() {
    try {
      if (cnt.value == experience.value?.length) cnt.value = 0;
      store.value = experience.value?.at(cnt.value)?.experience;
      setTimeout(repeat, 2000);
      cnt.value++;
    } catch (e) {
      //
    }
  }
  
  onMounted(() => {
    store.dispatch("fetchExperience");
    repeat();
  });
  </script>
  
  <style scoped>
  .heading {
    background-image: url("https://amyj0hn.github.io/project-images/images/resume-background.jpg");
    color: rgb(197, 126, 33);
  }
  </style>
  