<template>
<div id="carouselFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
         <slot name="carousel-item"></slot>
    </div>

    <div class="carousel-caption">
        <slot name="carousel-caption"></slot>
    </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</template>

<script>
export default {
name: 'CarouselComp'
}
</script>

<style>

</style>