<template>
  <div class="flip-card">
    <div class="card-front">
      <slot name="card-front"></slot>
    </div>
    <div class="card-back">
      <slot name="card-back"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flip-card {
  background-color: blue;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d; 
}

/* This container is needed to position the front and back side */

.flip-card:hover {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  /* -webkit-backface-visibility: hidden; */
  backface-visibility: hidden;
}


.flip-card-front {
  background-color: white;
  color: black;
  transform: rotate(180deg);
}

.flip-card-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
}
</style>
