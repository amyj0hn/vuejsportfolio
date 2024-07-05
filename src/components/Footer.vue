<template>
<div class="row">
    <p class="lead">Amy's portfolio &copy;
        <span>{{ cYear }}</span>
    </p>
</div> 
</template>

<script>
export default {
name: "FooterComp",
data(){
    return {
        cYear: new Date().
        getUTCFullYear()
    }
}
 
}
</script>

<style scoped>

.lead{
  color: black;
}
</style>