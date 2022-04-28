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

      <div class="back shadow" :style="{backgroundColor: Badge.color}">
        <img class="logo" src="../assets/img/logo.svg" />
        <div class="cardContent">
          <button class="iconBtn" @click="flipToFront" type="submit">
            <font-awesome-icon fal icon="arrow-rotate-left" />
          </button>
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
import axios from "axios";

export default {
  data() {
    return {
      errors: [],
      Badge: {
        name: "",
        company: "",
        color: '',
      },
    };
  },
  methods: {
    async getBadgeColor() {

      let url =
        "http://localhost:8080/local/data?name=" +
        this.Badge.name +
        "&company=" +
        this.Badge.company;
      console.log(url);

      let reqOptions = {
        url: url,
        method: "GET",
        mode: "no-cors",
        headers: {},
      };
      let data = await axios.request(reqOptions);
      this.Badge.color = data.data;
      console.log(this.Badge.color);
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
      this.Badge.color = "";
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
        this.getBadgeColor();
        this.flipToBack();
      }

      e.preventDefault();
    },
  },
};
</script>
