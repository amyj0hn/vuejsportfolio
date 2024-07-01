<template>
<div class="container">
  <section class="row" id="landing">
<LandingView/>
  </section>
  <section class="row" id="about">

  </section>
  <section class="row" id="resume">

  </section>
  <section class="row" id="projects">
<ProjectsView/>
  </section>
  <section class="row" id="testimonials">

  </section>
  <section class="row" id="reachme">

  </section>

</div>
</template>

<script>
// @ is an alias to /src
import LandingView from '@/components/LandingView.vue'
import ProjectsView from '@/components/ProjectsView.vue'

export default {
  name: 'HomeView',
  components:{
    LandingView, ProjectsView
  }

}
</script>
