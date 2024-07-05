<template>
  <section class="row section" id="landing">
    <LandingView />
  </section>
  <section class="row section" id="about">
    <AboutMeView />
  </section>
  <section class="row section" id="resume">
    <ResumeView />
  </section>
  <section class="row section" id="skills">
    <SkillsView />
  </section>
  <section class="row section" id="projects">
    <ProjectsView />
  </section>
  <section class="row section" id="testimonials">
    <TestimonialsView />
  </section>
  <section class="row section" id="reachme">
    <ReachMeView />
  </section>
</template>

<script>
// @ is an alias to /src
import LandingView from "@/components/LandingView.vue";
import AboutMeView from "@/components/AboutMeView.vue";
import ProjectsView from "@/components/ProjectsView.vue";
import SkillsView from "@/components/SkillsView.vue";
import TestimonialsView from "@/components/TestimonialsView.vue";
import ResumeView from "@/components/ResumeView.vue";
import ReachMeView from "@/components/ReachMeView.vue";

export default {
  name: "HomeView",
  components: {
    LandingView,
    AboutMeView,
    ResumeView,
    ProjectsView,
    TestimonialsView,
    ReachMeView,
    SkillsView,
  },
};
</script>
