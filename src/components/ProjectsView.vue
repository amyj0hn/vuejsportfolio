<template>
    <div class="projects-container d-flex">
      <div class="row display-2">
        Projects
      </div>
      <div class="row gap-2">
  
        <Card v-for="project in projects" :key="project.id" class="card">
            <template #cardHeader>
              <img :src="project.img_url" alt="projects" loading="lazy">
              <div class="btns d-flex justify-content-evenly">
                <a :href="project.vercel_link"  target="blank">
                  <i class="bi bi-broadcast"></i>
                </a>

                <a :href="project.gitHub-link" class="button" target="_blank">
                  <i class="bi bi-github"></i>
                </a> 
              </div>
               
            </template>
    
            <template #cardBody>
              <p>{{ project.projectTitle }}</p>
              <p>{{ project.description }}</p>


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

.bi{
  font-size: 30px;
  color: black;
}

/* .Btn:hover .BG {
  transform: rotate(35deg);
  transform-origin: bottom;
}   */

.card:hover{
background-color: #FCD1D1;

}
  .button {

  align-items: center;
  gap: 15px;
  outline-offset: -3px;
  cursor: pointer;
  transition: 400ms;
  width: 50%;
}


.button:hover {
  background-color: transparent;
}

.projects-container{
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;

}

.card img{
  width: 100%;
  height: auto;
  object-fit: contain;
}

.card img:hover{
    transform: scale(1.2);
}
template{
  position: relative;
  overflow: hidden;
}

.row{
  margin: 0;
  justify-content: center;
}


  /* Media queries */
  @media screen and (width > 800px){
    Card{
     flex-direction: column;
      
    }
  }
  </style>