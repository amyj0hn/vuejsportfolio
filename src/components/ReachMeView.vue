<template>
  <div class="mt-5 pt-4">
    <div class="row contact-container">
      <div class="row">
        <h2 class="display-2">Reach Me</h2>
        <a href="#landing"><i class="bi bi-house-up-fill"></i></a>
      </div>

      <div class="row justify-content-center align-items-center">
        <div class="col-md-6">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            class="col contact-left"
          >
            <div class="mb-3">
              <input
                type="hidden"
                name="access_key"
                value="bf2b82a4-3627-4108-acdf-6b3161aca3d7"
              />
              <label for="InputName" class="form-label">Name</label>
              <input
                type="text"
                name="name"
                class="form-control contact-container-inputs"
                id="InputName"
                required
              />
            </div>

            <div class="mb-3">
              <label for="InputEmail" class="form-label">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control contact-container-inputs"
                id="InputEmail emailError"
                placeholder="name@example.com"
                required
                @formchange="validateEmail"
              />
            </div>

            <div class="mb-3">
              <label for="InputMessage" class="form-label">Message</label>
              <textarea
                class="form-control contact-container-inputs"
                name="message"
                id="InputMessage"
                rows="3"
                required
              ></textarea>
            </div>
          </form>
          <div class="mb-3">
            <button type="submit" class="btn">Submit</button>
            <button type="reset" class="btn">Clear</button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="main m-auto">
            <div class="card">
              <a href="https://www.linkedin.com/in/amy-johnson-5328b924a/"
                target="_blank"><i class="bi bi-linkedin"></i
              ></a>
            </div>

            <div class="card">
              <a @click="sendEmail" target="_blank"><i class="bi bi-envelope-at-fill"></i></a>
            </div>

            <div class="card">
              <a @click="makeCall" target="_blank"><i class="bi bi-telephone-fill"></i></a>
            </div>

            <div class="card">
              <a href="https://github.com/amyj0hn" target="_blank"><i class="bi bi-github"></i></a>
            </div>
            <div class="main_back"></div>
          </div>
        </div>
      </div>
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

const phoneNumber = ref("+27693527503");

const makeCall = () => {
  window.location.href = `tel:${phoneNumber.value}`;
  return { makeCall };
};

const email = ref("amyj62450@gmail.com");

const sendEmail = () => {
  window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email.value}`;
  return { sendEmail };
};

function validateEmail() {
  let email = document.getElementById("InputEmail").value;
  let emailError = document.getElementById("emailError");

  if (!email.includes("@")) {
    emailError.style.display = "block";
    return false; // Does not allow submission
  } else {
    emailError.style.display = "none";
    return true; // Allows submission
  }
}
</script>

<style scoped>
.bi {
  font-size: 2em;
  color: var(--primary);
}

.main_back {
  position: absolute;
  border-radius: 10px;
  transform: rotate(90deg);
  width: 11em;
  height: 11em;
  background: linear-gradient(270deg, #03a9f4, #cc39a4, #ffb5d2);
  z-index: -2;
  box-shadow: inset 0px 0px 180px 5px #ffffff;
}

.main {
  display: flex;
  flex-wrap: wrap;
  width: 14em;
  align-items: center;
  justify-content: center;
  z-index: -1;
}

.card {
  width: 100px;
  height: 100px;
  border-top-left-radius: 10px;
  background: lightgrey;
  transition: 0.4s ease-in-out, 0.2s background-color ease-in-out,
    0.2s background-image ease-in-out;
  background: rgba(255, 255, 255, 0.596);
  backdrop-filter: blur(5px);
  border: 1px solid transparent;
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card .instagram {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #cc39a4;
}

.card:nth-child(2) {
  border-radius: 0px;
}

.card:nth-child(2) .twitter {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #03a9f4;
}

.card:nth-child(3) {
  border-top-right-radius: 10px;
  border-top-left-radius: 0px;
}

.card:nth-child(3) .dribble {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #ffb5d2;
}

.card:nth-child(4) {
  border-radius: 0px;
}

.card:nth-child(4) .codepen {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: black;
}

.card:nth-child(5) {
  border-radius: 0px;
}

.card:nth-child(5) .uiverse {
  position: absolute;
  margin-left: 0.2em;
  margin-top: 0.2em;
  opacity: 0;
  transition: 0.2s ease-in-out;
}

.card:nth-child(6) {
  border-radius: 0px;
}

.card:nth-child(6) .discord {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #8c9eff;
}

.card:nth-child(7) {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 0px;
}

.card:nth-child(7) .github {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: black;
}

.card:nth-child(8) {
  border-radius: 0px;
}

.card:nth-child(8) .telegram {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #29b6f6;
}

.card:nth-child(9) {
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
}

.card:nth-child(9) .reddit {
  opacity: 0;
  transition: 0.2s ease-in-out;
}

.main:hover {
  width: 14rem;
  cursor: pointer;
}

.main:hover .main_back {
  opacity: 0;
}

.main:hover .card {
  margin: 0.2em;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
}

.main:hover .card:nth-child(5) {
  border: transparent;
}

.main:hover .text {
  opacity: 0;
  z-index: -3;
}

.main:hover .instagram {
  opacity: 1;
}

.main:hover .twitter {
  opacity: 1;
}

.main:hover .dribble {
  opacity: 1;
}

.main:hover .codepen {
  opacity: 1;
}

.main:hover .uiverse {
  opacity: 1;
}

.main:hover .discord {
  opacity: 1;
}

.main:hover .github {
  opacity: 1;
}

.main:hover .telegram {
  opacity: 1;
}

.main:hover .reddit {
  opacity: 1;
}

.card:nth-child(1):hover {
  background-color: #cc39a4;
}

.card:nth-child(1):hover .instagram {
  fill: white;
}

.card:nth-child(2):hover {
  background-color: #03a9f4;
}

.card:nth-child(2):hover .twitter {
  fill: white;
}

.card:nth-child(3):hover {
  background-color: #ffb5d2;
}

.card:nth-child(3):hover .dribble {
  fill: white;
}

.card:nth-child(4):hover {
  background-color: #1e1f26;
}

.card:nth-child(4):hover .codepen {
  fill: white;
}

.card:nth-child(5):hover {
  animation: backgroundIMG 0.1s;
  animation-fill-mode: forwards;
}

.card:nth-child(5):hover .uiverse #paint0_linear_501_142 stop {
  stop-color: white;
}

.card:nth-child(5):hover .uiverse #paint1_linear_501_142 stop {
  stop-color: white;
}

.card:nth-child(5):hover .uiverse #paint2_linear_501_142 stop {
  stop-color: white;
}

@keyframes backgroundIMG {
  100% {
    background-image: linear-gradient(#bf66ff, #6248ff, #00ddeb);
  }
}

.card:nth-child(6):hover {
  background-color: #8c9eff;
}

.card:nth-child(6):hover .discord {
  fill: white;
}

.card:nth-child(7):hover {
  background-color: black;
}

.card:nth-child(7):hover .github {
  fill: white;
}

.card:nth-child(8):hover {
  background-color: #29b6f6;
}

.card:nth-child(8):hover .telegram > path:nth-of-type(1) {
  fill: white;
}

.card:nth-child(8):hover .telegram > path:nth-of-type(2) {
  fill: #29b6f6;
}

.card:nth-child(8):hover .telegram > path:nth-of-type(3) {
  fill: #29b6f6;
}

.card:nth-child(9):hover {
  background-color: rgb(255, 69, 0);
}

.card:nth-child(9) .reddit > g circle {
  fill: rgb(255, 69, 0);
}

.card:nth-child(9) .reddit > g path {
  fill: white;
}

.text {
  position: absolute;
  font-size: 0.7em;
  transition: 0.4s ease-in-out;
  color: black;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.33em;
  z-index: 3;
}

button {
  position: relative;
  padding: 10px 20px;
  border-radius: 7px;
  border: 1px solid rgb(61, 106, 255);
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  background: transparent;
  color: #fff;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

button:hover {
  background: rgb(61, 106, 255);
  box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

button:hover::before {
  -webkit-animation: sh02 0.5s 0s linear;
  -moz-animation: sh02 0.5s 0s linear;
  animation: sh02 0.5s 0s linear;
}

button::before {
  content: "";
  display: block;
  width: 0px;
  height: 86%;
  position: absolute;
  top: 7%;
  left: 0%;
  opacity: 0;
  background: #fff;
  box-shadow: 0 0 50px 30px #fff;
  -webkit-transform: skewX(-20deg);
  -moz-transform: skewX(-20deg);
  -ms-transform: skewX(-20deg);
  -o-transform: skewX(-20deg);
  transform: skewX(-20deg);
}

@keyframes sh02 {
  from {
    opacity: 0;
    left: 0%;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    left: 100%;
  }
}

button:active {
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: box-shadow 0.2s ease-in;
  -moz-transition: box-shadow 0.2s ease-in;
  transition: box-shadow 0.2s ease-in;
}

/* Media queries */
@media screen {
  .contact-inputs {
    width: 800dvh;
  }
}

/* @media screen and (width > 700px) {
  .main{
    align-items: center;
  }
} */
</style>
