<template>
  <div class="wrapper">

    <Navbar />
    <main class="container-fluid">
      <router-view/>
    </main>
<Footer />
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer.vue'
// import Carousel from '@/components/Carousel.vue';


export default{
  components:{
    Navbar, Footer 
  },
  data(){
    return {
      slides: [
            'https://amyj0hn.github.io/project-images/images/amylogo.png', 
            'https://amyj0hn.github.io/project-images/images/amylogo.png',
            'https://amyj0hn.github.io/project-images/images/amylogo.png',
            'https://amyj0hn.github.io/project-images/images/amylogo.png'



      ],
      visibleSlides : 0,
    }
  }
}
</script>



<style src="./assets/css/style.css">


</style>
