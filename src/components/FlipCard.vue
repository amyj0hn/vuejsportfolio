<template>
  <div class="container">
    <div class="card">
        <div class="card-front">Card</div>
        <div class="card-back">Back of Card</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    position: relative;
    width: 18rem;

}

.card{
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: all 0.5 ease;

}

.card:hover{
    transform: rotate(180deg);
}

.card-front{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: green;
    color: bisque;
}

.card-back{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: bisque;
    color: green;
    transform: rotate(100deg);
}

</style>