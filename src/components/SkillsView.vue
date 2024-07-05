<template>
  <h2 class="display-2">Skills</h2>
  <div class="row gap-1">

    <FlipCard
      v-for="skill in skills"
      :key="skill.id"
      class="flip-card col-md-4 mb-4 ">
      <template #flipCardFront>
        <img :src="skill.img_url" alt="skills" loading="lazy" />
      </template>

      <template #flipCardBack>
        <h2>{{ skill.skill }}</h2>
        <p class="lead">{{ skill.description }}</p>
      </template>
    </FlipCard>
  </div>

</template>

<script setup>
import FlipCard from "@/components/FlipCard.vue";

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

<style scoped>
[html] {
  font-size: 40rem;
  color: black;
}

.flip-card{
  background-color:white;
  border: 3px solid #F7879A;
  border-radius: 20px;
  color: #0F67B1;
}

.lead{
 font-size: 13px;
 padding-left: 12px;
 text-align: center;
}
</style>
