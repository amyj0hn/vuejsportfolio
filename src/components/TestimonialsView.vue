<template>
  <div class="testimonial-container">
    <div class="row">
      <h2 class="display-2">Testimonials</h2>
    </div>
    <div id="carouselExampleCaptions" class="carousel slide carousel-mobile">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: testimonial.id == 1 }"
          v-for="testimonial in testimonials"
          :key="testimonial.id"
        >
          <img
            :src="testimonial.image"
            class="d-block w-100"
            :alt="testimonial.name"
            loading="lazy"
          />
          <div class="carousel-caption d-md-block">
            <h5>{{ testimonial.name }} {{ testimonial.surname }}</h5>
            <p class="lead">{{ testimonial.company }}</p>
            <p>{{ testimonial.testimonial }}</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const cnt = ref(-1);
//This line of code accesses your data as object
const testimonials = computed(() => store.state.testimonials);
// const testimonialIDs = computed( ()=> testimonials.value?.map( test=>test.id))
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
.testimonial-container{
  padding: 3rem auto;
}

.carousel-caption {
  background-color: white;
  color: black;
  border-radius: 0px 4rem 0 4rem;
}

.carousel {
  width: 40rem;
}

.carousel-mobile {
  max-width: 100%;
  margin: 0 auto;
}

.carousel-inner > .carousel-item > img {
  height: auto;
}

.carousel-caption {
  background-color: white;
  color: black;
  border-radius: 0px 4rem 0 4rem;
  padding: 1rem;
  margin: auto;
}

/* Media queries */
@media screen and (max-width: 768px) {
  .carousel-mobile {
    max-width: 90%;
  }
  .carousel-caption {
    font-size: 0.8rem;
    height: 11rem;
    border-radius: 0px 28px;
    padding: 1px;
  }

  .carousel-caption .lead {
    display: none;
  }

  .carousel-indicators {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .carousel-mobile {
    max-width: 80%;
  }
  .carousel-caption {
    font-size: 0.6rem;
  }
}
</style>
