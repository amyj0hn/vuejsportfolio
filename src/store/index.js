import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://amyj0hn.github.io/VueEOMP/data/ '
export default createStore({
  state: {
    jobTitle: null,
    aboutMe: null,
    education:null,
    experience: null,
    skills: null,
    testimonials: null,
    projects: null,


  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value){
      state.jobTitle = value
    },
    setAboutMe(state, value){
      state.aboutMe = value
    },
    setEducation(state, value){
      state.education= value
    },
    setExperience(state, value){
      state.experience = value
    },
    setSkills(state, value){
      state.skills = value
    },
    setTestimonials(state, value){
      state.testimonials = value
    },
    setProjects(state, value){
      state.projects = value
    }
  } ,
  actions: {
    async fetchJobTitle(context){
      try{
        let {jobTitle} = await (await axios.get(portfolioURL)).data
        console.log(jobTitle);
        context.commit("setJobTitle", jobTitle)

      }
      catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchAbout(context){
      try{
        let {aboutMe} = await (await axios.get(portfolioURL)).data
        context.commit("setAboutMe", aboutMe)

      }
      catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchEducation(context){
      try{
        let {education} = await (await axios.get(portfolioURL)).data
        context.commit("setEducation", education)

      }
      catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchExperience(context){
      try{
        let {experience} = await (await axios.get(portfolioURL)).data
        context.commit("setExperience", experience)

      }
      catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchSkills(context){
      try{
        let {skills} = await (await axios.get(portfolioURL)).data
        context.commit("setSkills", skills)

      }
      catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchTestimonials(context){ 
      try{
        let {testimonials} = await (await axios.get(portfolioURL)).data
        context.commit("setTestimonials", testimonials)

      }
      catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchProjects(context){
      try{
        let {projects} = await (await axios.get(portfolioURL)).data
        context.commit("setProjects", projects)

      }
      catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    }


  },
  modules: {
  }
})
