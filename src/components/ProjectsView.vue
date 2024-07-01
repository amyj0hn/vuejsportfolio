<template>
    <div class="projects-container d-flex">
      <div class="row gap-2">
  
        <Card v-for="project in projects" :key="project.id" class="card">
            <template #cardHeader>
              <img :src="project.img_url" alt="projects" loading="lazy">
            </template>
    
            <template #cardBody>
              <p>{{ project.projectTitle }}</p>
              <p>{{ project.description }}</p>
              <div class="btns">
                <button class="button">Hover me</button>
                <button class="button">Hover me</button>
  
            </div>
            </template>
  
        </Card>
      </div>
    </div>
  </template>
  
  <script setup>
  import Card from '@/components/Card.vue'
  
  import { computed, onMounted, ref } from "vue";
  import { useStore } from "vuex";
  const store = useStore();
  const cnt = ref(-1);
  //This line of code accesses your data as object
  const projects = computed(() => store.state.projects);
  function repeat() {
    try {
      if (cnt.value == projects.value?.length) cnt.value = 0;
      store.value = projects.value?.at(cnt.value)?.projects;
      setTimeout(repeat, 2000);
      cnt.value++;
    } catch (e) {
      //
    }
  }
  
  onMounted(() => {
    store.dispatch("fetchProjects");
    repeat();
  });
  </script>
  
  <style scoped>
  .button {
    /* padding: 1em 2em; */
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    color: var(--secondary);
    transition: all 1000ms;
    font-size: 15px;
    position: relative;
    overflow: hidden;
    outline: 2px solid var(--tertiary);
  }
  
  button:hover {
    color: var(--secondary);
    transform: scale(1.1);
    outline: 2px solid var(--secondary);
    box-shadow: 4px 5px 17px -4px  var(--alterative);
  }
  
  button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: var(--tertiary);
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
  }
  
  button:hover::before {
    width: 250%;
  }
  
  /* Media queries */
  @media screen and (width < 900px){
    Card{
      display: flex;
      
    }
  }
  </style>