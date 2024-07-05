<template>
  <div class="flip-card m-auto">
    <div class="flip-card-front">
      <slot name="flipCardFront"></slot>
    </div>
    <div class="flip-card-back">
      <slot name="flipCardBack"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flip-card {
  width: 300px;
  height: 200px;
  border: none;
  perspective: 1000px;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d; 
}


.flip-card:hover {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}


.flip-card-front {
  /* background-color: white;
  color: black; */
  transform: rotate(360deg);
  size: 2rem;
  align-content: center;
}

.flip-card-back {
  /* background-color: black;
  color: white; */
  transform: rotateY(180deg);
}
</style>
