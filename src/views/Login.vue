<template>
  <div>
    <center>
      <br>
      <br>
      <v-card elevation="10" width="500" height="300">
        <v-card color="info">
          <div>
            <h1>LOGIN</h1>
          </div>
        </v-card>
        <hr>
        <div class="custom">
          <v-text-field outlined label="Username"/>
          <v-text-field outlined label="Password"/>
        </div>
        <v-footer absolute dark>
          <v-btn block large color="primary" v-on:click="$emit('login')">login</v-btn>
        </v-footer>
      </v-card>
    </center>
  </div>
</template>
<script>
export default {
  name: "home",
  created() {
    //this.$router.push({path: "/admin"})
  }
};
</script>
<style scoped>
.custom {
  margin-top: 30px;
  width: 450px;
}
</style>
