<template>
  <v-app>
    <Header v-on:logout="logout" />
    <div v-if="isLogout"><br><br><b></b><br>
      <Login v-on:login="login"/>
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
import Login from "./views/Login.vue";


export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Login
  },
  data() {
    return {
      isLogout: true
    };
  },
  computed:{
    loggedIn(){
      return this.$store.getter.loggedIn
    }
  },
  beforeUpdate(){
    this.routeWatcher = this.$watch(
    function () {  return this.$route },
    function(route) {
      if (route.name === 'login') {
        this.isLogout = true
      }
    }
  )
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
