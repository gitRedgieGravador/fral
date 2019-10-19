<template>
  <div>
    <v-list nav dense>
      <v-list-item class="ml-6">
        <v-list-item-icon>
          <br>
          <v-icon>mdi-magnify</v-icon>
          <v-form @submit.prevent>
            <v-text-field placeholder="Search"/>
          </v-form>
        </v-list-item-icon>
        <v-list-item-title>
          <v-btn color="green" dark>Search</v-btn>
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-simple-table fixed-header height="700px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Emi#</th>
            <th class="text-left">Date</th>
            <th class="text-left">Amount</th>
            <th class="text-left">Penalty</th>
            <th class="text-left">Total Payable</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="emi in payable" :key="emi.eminum">
            <td>{{emi.eminum}}</td>
            <td>{{emi.date}}</td>
            <td>{{emi.amount}}</td>
            <td>{{emi.penalty}}</td>
            <td>{{emi.tpayable}}</td>
            <td>
              <v-btn>Pay Now</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  name: "payment",
  data() {
    return {
      payable: [
        {
          eminum: 1,
          date: "10-19-2019",
          amount: 1000,
          penalty: 0,
          tpayable: 1000
        },
        {
          eminum: 2,
          date: "10-19-2019",
          amount: 1000,
          penalty: 0,
          tpayable: 1000
        },
        {
          eminum: 3,
          date: "10-19-2019",
          amount: 1000,
          penalty: 0,
          tpayable: 1000
        },
        {
          eminum: 4,
          date: "10-19-2019",
          amount: 1000,
          penalty: 0,
          tpayable: 1000
        },
        {
          eminum: 5,
          date: "10-19-2019",
          amount: 1000,
          penalty: 0,
          tpayable: 1000
        },
        {
          eminum: 6,
          date: "10-19-2019",
          amount: 1000,
          penalty: 0,
          tpayable: 1000
        },
        {
          eminum: 7,
          date: "10-19-2019",
          amount: 1000,
          penalty: 0,
          tpayable: 1000
        },
        {
          eminum: 8,
          date: "10-19-2019",
          amount: 1000,
          penalty: 0,
          tpayable: 1000
        }
      ],
      dialog: false
    };
  }
};
</script>
<style scoped>
.wi-90 {
  width: 95%;
}
.wi-100 {
  width: 30%;
}
</style>
