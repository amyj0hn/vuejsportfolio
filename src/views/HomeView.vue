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
  <section class="row" id="skills">
<SkillsView/>
  </section>
  <section class="row" id="projects">
<ProjectsView/>
  </section>
  <section class="row" id="testimonials">
    <h2>Testimonials</h2>
<TestimonialsView/>
  </section>
  <section class="row" id="reachme">
    <h2>Reach Me</h2>
<ReachMeView/>
  </section>

</div>
</template>

<script>
// @ is an alias to /src
import LandingView from '@/components/LandingView.vue'
import AboutMeView from '@/components/AboutMeView.vue'
import ProjectsView from '@/components/ProjectsView.vue'
import TestimonialsView from '@/components/TestimonialsView.vue'
import ResumeView from '@/components/ResumeView.vue'
import ReachMeView from '@/components/ReachMeView.vue'

export default {
  name: 'HomeView',
  components:{
    LandingView, AboutMeView, ResumeView, ProjectsView, TestimonialsView, ReachMeView
  }

}
</script>
