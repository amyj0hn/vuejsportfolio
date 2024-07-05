<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#landing">
        <img src="https://amyj0hn.github.io/project-images/images/amylogo.png" alt="logo" class="img-fluid" loading="lazy">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="#landing"><i class="bi bi-house"></i> Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about"> <i class="bi bi-person-circle"></i> About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#resume"> <i class="bi bi-file-earmark-person"></i>Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills"> <i class="bi bi-stars"></i>Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects"><i class="bi bi-folder2"></i> Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimonials"><i class="bi bi-people-fill"></i>Testimonials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#reachme"><i class="bi bi-person-lines-fill"></i>Reach Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',

  }
  </script>
  
  
  <style scoped>

  </style>
  