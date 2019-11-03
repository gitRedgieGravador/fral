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
          <v-text-field outlined label="Username" v-model="username"/>
          <v-text-field outlined label="Password" v-model="password"/>
        </div>
        <v-footer absolute dark>
          <v-btn block large color="primary" v-on:click="login">login</v-btn>
        </v-footer>
      </v-card>
    </center>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$emit('login')
      // if (this.username != "" && this.password != "") {
      //   this.$store
      //     .dispatch("login", {
      //       username: this.username,
      //       password: this.password
      //     })
      //     .then(() => {
      //       this.$router.push({ name: "dashboard" });
      //     });
      // }else {
      //   alert("required")
      // }
    }
  }
};
</script>
<style scoped>
.custom {
  margin-top: 30px;
  width: 450px;
}
</style>
