<template>
  <div>
    <div class="pa-12">
      <v-form @submit.prevent="findpayment">
        <v-text-field v-model="loanid" outlined placeholder="Search" :append-icon="'mdi-magnify'"/>
      </v-form>
      <div v-show="findit">
        <div class="text-left">
          <v-simple-table dark>
            <template v-slot:default>
              <thead class="text-left">
                <tr>
                  <th>Loan#: {{loanref}}</th>
                  <th>Disburstment Date: {{disb_date}}</th>
                </tr>
                <tr>
                  <th>Principal Amount: {{prin_amount}}</th>
                  <th>Principal Interest: {{prin_interest}}</th>
                </tr>
                <tr>
                  <th>Name: {{borrower}}</th>
                </tr>
              </thead>
            </template>
          </v-simple-table>
        </div>
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
                  <v-btn
                    @click="openpaydialog(emi.eminum , emi.date, emi.amount, emi.penalty, emi.tpayable)"
                  >Pay Now</v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="600">
            <v-card>
              <v-card-title class="headline">Payment for EMI# {{payit}}</v-card-title>
              <v-card-text>
                <div>
                  <v-row class="text-center">
                    <v-col>
                      <h3>{{paydate}}</h3>
                      <v-divider></v-divider>
                      <h3>Date</h3>
                    </v-col>
                    <v-col>
                      <h3>{{payamount}}</h3>
                      <v-divider></v-divider>
                      <h3>Principal Amount</h3>
                    </v-col>
                    <v-col>
                      <h3>{{paypenalty}}</h3>
                      <v-divider></v-divider>
                      <h3>Penalty</h3>
                    </v-col>
                  </v-row>
                  <br>
                  <center>
                    <h2>Total Payable: {{totalpayable}}</h2>
                  </center>
                  <br>
                  <v-row>
                    <v-col>
                      <h2 class="mt-4">
                        <span>Pay Amount</span>
                      </h2>
                    </v-col>
                    <v-col cols="9">
                      <v-text-field
                        outlined
                        label="Payment Amount"
                        type="number"
                        :prepend-icon="'mdi-currency-usd'"
                      />
                    </v-col>
                  </v-row>
                </div>
                <div class="text-center">
                  <h4>Date Today: {{today}}</h4>
                </div>
                <hr>
                <div>
                  <v-row>
                    <v-col>
                      <v-btn block color="error" @click="dialog = false">Cancel</v-btn>
                    </v-col>
                    <v-col cols="8">
                      <v-btn block color="primary" @click="dialog = false">Pay Now</v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-row>
      </div>
      <div v-show="!findit">
        <br><br>
        <center><h1>No Borrower Selected</h1></center>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "payment",
  data() {
    return {
      today: new Date().toDateString(),
      paydate: "",
      payamount: 0,
      paypenalty: 0,
      totalpayable: 0,
      payable: [],
      dialog: false,
      payit: 0,
      findit: false,
      loanid: "",
      borrower:"",
      loanref: "",
      disb_date:"",
      prin_amount:0,
      prin_interest:0
    };
  },
  methods: {
    openpaydialog(id, date, amount, penalty, total) {
      this.payit = id;
      this.paydate = date;
      this.payamount = amount;
      this.paypenalty = penalty;
      this.totalpayable = total;
      this.dialog = true;
    },
    findpayment() {
      axios.post("http://localhost:3000/getloan", this.loanid).then(response => {
        var rec = response.data;
        this.payable = rec.detail
        this.borrower = rec.borrower
        this.disb_date = rec.disb_date
        this.prin_amount = rec.prin_amount
        this.prin_interest = rec.prin_interest
        this.loanref = rec.id
        this.findit = true
      });
    }
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
