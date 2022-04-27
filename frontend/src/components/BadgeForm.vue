<template>
  <div class="container">
    <div class="maincard">
      <div class="front shadow">
        <form @submit.prevent @submit="checkForm" novalidate="true">
          <header class="cardHeader">Add new Badge</header>
          <div class="inputForm">
            <input
              v-model="Badge.name"
              class="input-text"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <input
              v-model="Badge.company"
              class="input-text"
              type="text"
              name="company"
              placeholder="Enter your company"
            />
          </div>
          <button class="button glow-on-hover" @click="checkForm" type="submit">
            Create Badge
          </button>
        </form>
      </div>

      <div class="back shadow">
        <img class="logo" src="../assets/img/logo.svg" />
        <div class="cardContent">
          <button class="iconBtn" @click="flipToFront" type="submit">
            <font-awesome-icon fal icon="arrow-rotate-left" />
          </button>
          <!-- <div class="logo"></div> -->

          <div class="badgeInfo">
            <p class="thick">{{ this.Badge.name }}</p>
            <p class="thin">{{ this.Badge.company }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/style/BadgeForm.css";
import { toast } from "bulma-toast";

export default {
  data() {
    return {
      errors: [],
      Badge: {
        name: "",
        company: "",
      },
    };
  },
  methods: {
    addBadge() {
      console.log(this.Badge);
    },

    flipToBack() {
      let card = document.querySelector(".maincard");
      card.classList.toggle("is-flipped");
    },

    async flipToFront() {
      let card = document.querySelector(".maincard");
      card.classList.toggle("is-flipped");
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      await sleep(300);
      this.Badge.name = "";
      this.Badge.company = "";
    },

    checkForm(e) {
      this.errors = [];

      if (!this.Badge.name) {
        this.errors.push("Name required.");
      }
      if (!this.Badge.company) {
        this.errors.push("Badge text required.");
      }
      if (this.errors.length) {
        this.errors.forEach((error) => {
          toast({
            message: error,
            type: "is-primary",
            dismissible: true,
            pauseOnHover: true,
            animate: { in: "fadeIn", out: "fadeOut" },
          });
        });
      }
      if (!this.errors.length) {
        this.errors = [];
        this.addBadge();
        this.flipToBack();
      }

      e.preventDefault();
    },
  },
};
</script>
