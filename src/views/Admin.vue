<template>
  <div class="admin">
    <v-row>
      <v-col>
          <Sidebar v-on:gotodashboard="gotoDashboard" v-on:gotopayment="gotopayment"/>
      </v-col>
      <v-col cols="9">
        <div v-if="isdashboard">
          <Dashboard/>
        </div>
        <div v-if="ispayment">
          <Payment/>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Dashboard from "../modules/admin/Dashboard.vue";
import Payment from "../modules/admin/Payment.vue";
export default {
  name: "admin",
  components: {
    Sidebar,
    Dashboard,
    Payment
  },
  data(){
    return{
      isdashboard: false,
      ispayment: true
    }
  },
  methods:{
    gotoDashboard(){
      this.isdashboard = true;
      this.ispayment = false;
    },
    gotopayment(){
      this.ispayment = true
      this.isdashboard = false
    }
  }
};
</script>
