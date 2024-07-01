<template>
<div class="container">
  <section class="row" id="landing">
<LandingView/>
  </section>
  <section class="row" id="about">
<AboutMeView/>
  </section>
  <section class="row" id="resume">
<ResumeView/>
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
import AboutMeView from '@/components/AboutMeView.vue'

import ProjectsView from '@/components/ProjectsView.vue'
import ResumeView from '@/components/ResumeView.vue'

export default {
  name: 'HomeView',
  components:{
    LandingView, AboutMeView, ResumeView, ProjectsView
  }

}
</script>
