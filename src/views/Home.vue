<template>
  <div>
    <center>
      <h1>Home</h1>
      <v-btn v-on:click="$emit('login')">LogIn</v-btn>
    </center>
  </div>
</template>
<script>
export default {
  name: "home",
  created() {
    //this.$router.push({path: "/admin"})
  },
};
</script>
