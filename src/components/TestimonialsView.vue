<template>
    <div class="testimonials-container d-flex">
      <div class="row gap-2">
  
        <Card v-for="testimonial in testimonials" :key="testimonial.id" class="card">
            <template #cardHeader>
              <img :src="testimonial.image" alt="testimonials" loading="lazy">
            </template>
    
            <template #cardBody>
              <p>{{ testimonial.name }} {{ testimonial.surname }}</p>
              <p>{{ testimonial.testimonial }}</p>

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
  const testimonials = computed(() => store.state.testimonials);
  function repeat() {
    try {
      if (cnt.value == testimonials.value?.length) cnt.value = 0;
      store.value = testimonials.value?.at(cnt.value)?.testimonials;
      setTimeout(repeat, 2000);
      cnt.value++;
    } catch (e) {
      //
    }
  }
  
  onMounted(() => {
    store.dispatch("fetchTestimonials");
    repeat();
  });
  </script>
  
  <style scoped>
  .button {
    /* padding: 1em 2em; */
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    color: var(--secondary);
    transition: all 1000ms;
    font-size: 15px;
    position: relative;
    overflow: hidden;
    outline: 2px solid var(--tertiary);
  }
  
  button:hover {
    color: var(--secondary);
    transform: scale(1.1);
    outline: 2px solid var(--secondary);
    box-shadow: 4px 5px 17px -4px  var(--alterative);
  }
  
  button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: var(--tertiary);
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
  }
  
  button:hover::before {
    width: 250%;
  }
  
  /* Media queries */
  @media screen and (width < 900px){
    Card{
      display: flex;
      
    }
  }
  </style>