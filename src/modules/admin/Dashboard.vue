<template>
  <div>
    <center>
      <v-row>
        <v-col>
          <v-card height="350" class="pa-2">
            <div class="blue">
              <h2>Total Sales</h2>
            </div>
            <v-divider></v-divider>
            <br>
            <div class="text-center">
              <v-textarea
                disabled="true"
                outlined
                rows="2"
                name="input-7-4"
                label="Total Disburstment"
                value="10000"
                class="location"
              ></v-textarea>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-card height="350" class="pa-2">
            <div class="blue">
              <h2>Monthly Sales</h2>
            </div>
            <v-divider></v-divider>
            <p>lfndskfsdk</p>
          </v-card>
        </v-col>
      </v-row>
    </center>
  </div>
</template>
<script>
export default {
  name: "admindashboard"
};
</script>
<style scoped>
.label {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 30px;
  padding-top: 20px;
}
.location {
    font-size: 30px;
}
</style>
