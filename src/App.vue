<template>
  <v-app>
    <Header v-on:logout="logout" />
    <div v-if="isLogout"><br><br><b></b><br>
      <Home v-on:login="login"/>
    </div>
    <div v-else>
      <v-row>
        <v-col><br><br><br>
          <Sidebar/>
        </v-col>
        <v-col cols="9">
          <v-content>
            <router-view/>
          </v-content>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Home
  },
  data() {
    return {
      isLogout: true
    };
  },
  methods:{
    login(){
      this.isLogout = false
      this.$router.push({path: "/admin/dashboard"})
    },
    logout(){
      this.isLogout = true
      this.$router.push({path: "/"})
    }
  }
};
</script>
