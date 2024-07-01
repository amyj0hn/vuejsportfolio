<template>
  <div class="testimonials-container d-flex">
    <div class="row gap-2">
      <FlipCard v-for="skill in skills" :key="skill.id" class="flip-card">

        <template #card-front>
          <img :src="skill.img_url" alt="skills" loading="lazy">
        </template>

        <template #card-back>
          <h2>{{ skill.skill }}</h2>
          <p>{{ skill.description}}</p>
        </template>
      </FlipCard>
    </div>
  </div>
</template>
  
<script setup>
import FlipCard from '@/components/FlipCard.vue';

  import { computed, onMounted, ref } from "vue";
  import { useStore } from "vuex";

  const store = useStore();
  const cnt = ref(-1);
  //This line of code accesses your data as object
  const skills = computed(() => store.state.skills);
  function repeat() {
    try {
      if (cnt.value == skills.value?.length) cnt.value = 0;
      store.value = skills.value?.at(cnt.value)?.skills;
      setTimeout(repeat, 2000);
      cnt.value++;
    } catch (e) {
      //
    }
  }
  
  onMounted(() => {
    store.dispatch("fetchSkills");
    repeat();
  });
</script>

<style>


</style>