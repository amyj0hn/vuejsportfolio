<template>
<div class="container">
  <section class="row" id="landing">
    <h2>Home</h2>
<LandingView/>
  </section>
  <section class="row" id="about">
    <h2>About</h2>
<AboutMeView/>
  </section>
  <section class="row" id="resume">
<ResumeView/>
  </section>
  <section class="row" id="skills">
    <h2>Skills</h2>
<SkillsView/>
<FlipCard/>
  </section>
  <section class="row" id="projects">
    <h2>Projects</h2>
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
import SkillsView from '@/components/SkillsView.vue';
import TestimonialsView from '@/components/TestimonialsView.vue'
import ResumeView from '@/components/ResumeView.vue'
import ReachMeView from '@/components/ReachMeView.vue'

export default {
  name: 'HomeView',
  components:{
    LandingView, AboutMeView, ResumeView, ProjectsView, TestimonialsView, ReachMeView, SkillsView
  }

}
</script>
