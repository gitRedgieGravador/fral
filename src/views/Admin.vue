<template>
  <div class="admin">
    <!-- <v-row> -->
      <!-- <v-col>
          <Sidebar v-on:gotodashboard="gotoDashboard" v-on:gotopayment="gotopayment" v-on:gotoaddclient="gotoaddclient"/>
      </v-col> -->
      <!-- <v-col cols="9"> -->
        <div v-if="isdashboard">
          <Dashboard/>
        </div>
        <div v-if="ispayment">
          <Payment/>
        </div>
        <div v-if="isaddclient">
          <Addclient/>
        </div>
      <!-- </v-col> -->
    <!-- </v-row> -->
  </div>
</template>

<script>
//import Sidebar from "../components/Sidebar.vue";
import Dashboard from "../modules/admin/Dashboard.vue";
import Payment from "../modules/admin/Payment.vue";
import Addclient from "../modules/admin/Addclient.vue";
export default {
  name: "admin",
  components: {
    //Sidebar,
    Dashboard,
    Payment,
    Addclient
  },
  data(){
    return{
      isdashboard: false,
      ispayment: false,
      isaddclient: true
    }
  },
  methods:{
    gotoDashboard(){
      this.isdashboard = true;
      this.ispayment = false;
      this.isaddclient = false;
    },
    gotopayment(){
      this.ispayment = true
      this.isdashboard = false
      this.isaddclient = false;
    },
    gotoaddclient(){
      this.ispayment = false;
      this.isdashboard = false
      this.isaddclient = true;
    }
  }
};
</script>
