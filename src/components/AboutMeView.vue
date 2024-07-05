<template>
  <div class="row">
    <div class="col">
      <div id="details" data-aos="fade-right" data-aos-duration="3000">
        <h3 class="display-5">So, Who is Amy?</h3>
        <p v-if="aboutMe?.length">
          <span>{{ aboutMe[0]?.description }}</span>
        </p>
        <Spinner v-else />
      </div>
    </div>
    <div class="col">
      <FlipCard class="flip-card col-md-6 col-lg-4 mb-4">
      <template #flipCardFront>
        <img src="https://amyj0hn.github.io/project-images/images/aboutmepic.jpg" alt="aboutme" loading="lazy" />
      </template>

      <template #flipCardBack>
        <img src="https://amyj0hn.github.io/project-images/images/aboutmepic2.jpg" alt="aboutme" loading="lazy" />

      </template>
    </FlipCard>
    </div>
  </div>
</template>

<script setup>
import Spinner from "@/components/Spinner.vue";
import FlipCard from "./FlipCard.vue";

import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const cnt = ref(-1);
//This line of code accesses your data as object
const aboutMe = computed(() => store.state.aboutMe);
function repeat() {
  try {
    if (cnt.value == aboutMe.value?.length) cnt.value = 0;
    store.value = aboutMe.value?.at(cnt.value)?.aboutMe;
    setTimeout(repeat, 2000);
    cnt.value++;
  } catch (e) {
    //
  }
}

onMounted(async () => {
  
  store.dispatch("fetchAbout");
  repeat();
});
</script>

<style scoped>
img[alt="aboutme"] {
  height: 100%;
  width: 100%;
  margin: auto;
  aspect-ratio: 1;
  object-fit: contain;
}

.flip-card{
  height: 30rem;
}

.section{
  scroll-margin-block: 5rem;
  position: sticky;
  top: 0;
  
  height: 100vh;
  padding-top: 4rem; 
 
}


</style>
