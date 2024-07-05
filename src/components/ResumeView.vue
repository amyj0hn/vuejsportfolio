<template>
  <div class="row">
    <h2 class="display-2">Resume</h2>
  </div>

<!-- Button trigger modal -->
 <div class="buttons d-flex justify-content-evenly">
   <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
     See Work Experience
   </button>
   <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
     See Education
   </button>

 </div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Work Experience</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-dialog modal-dialog-scrollable" v-for="work in experience" :key="work.id" >
        <div >
          <div id="cardHeader">
            <h2>{{ work.title }}</h2>
          </div>
          <div id="cardBody" >
            <h3>{{ work.company }}</h3>
            <p>{{ work.startDate }} to {{ work.endDate }}</p>
            <ul>
              <li>{{ work.responsibilities[0] }}</li>
              <li>{{ work.responsibilities[1] }}</li>
              <li>{{ work.responsibilities[2] }}</li>
              <li>{{ work.responsibilities[3] }}</li>
            </ul>
          </div>
        </div>
</div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


<!-- Education Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Education</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-dialog modal-dialog-scrollable" v-for="edu in education" :key="edu.id">
        <div>
          <div id="cardHeader">
            <h2>{{ edu.school }} ({{ edu.year }})</h2>
          </div>
          <div id="cardBody" >
            <p>{{ edu.grade }}</p>
            <p class="lead">{{ edu.subjects.toString() }}</p>
          </div>
        </div>
</div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  <div class="container text-center">
    <div class="row">
      <div class="col-md-6 col-sm-12" v-if="education">      
      </div>
    </div>
  </div>
</template>

<script setup>

import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

const experience = computed(() => store.state.experience);
const education = computed(() => store.state.education);

onMounted(() => {
  store.dispatch("fetchExperience");
  store.dispatch("fetchEducation");
  console.log(experience);
});
</script>

<style scoped>
.container {
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
}

.btn-hover {
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  height: 250px;
  margin: 20px;
  padding: 20px;
  overflow: hidden;
  border: 3px solid ;
 
}

.btn{
  border: 3px solid black;
}

.modal-dialog{
  color: black;
}
</style>