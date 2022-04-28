<template>
  <div class="app">
    <Badge-form/>
  </div>
</template>

<script>
import BadgeForm from "@/components/BadgeForm";


export default {
  components: {
    BadgeForm,
  },
  name: "App",
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style>
html, body {
  height:100%;
  background-image: linear-gradient(to right top, #051937, #003b57, #005d62, #2b7d5a, #819750);

}

* {
  margin: 0px;
  padding: 5px;

}

.shadow {
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
}
</style>