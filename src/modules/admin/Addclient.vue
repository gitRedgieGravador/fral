<template>
  <div>
    <center>
      <h1>Register Client Information</h1>
    </center>
    <v-card width="95%" class="pl-4 pr-4 overflow-y-auto" max-height="750" dark>
          <v-form>
            <br>
            <v-row>
              <v-col>
                <v-text-field outlined label="Firstname"/>
              </v-col>
              <v-col>
                <v-text-field outlined label="Lastname"/>
              </v-col>
            </v-row>
            <v-text-field outlined label="Address"/>
            <v-text-field outlined label="Provincial Address"/>
            <v-row>
              <v-col>
                <v-overflow-btn class="my-2" :items="civil_status" label="Civil Status"></v-overflow-btn>
              </v-col>
              <v-col>
                <v-overflow-btn class="my-2" :items="gender_down" label="Gender"></v-overflow-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field outlined label="Age" type="number"/>
              </v-col>
              <v-col cols="9">
                <v-text-field outlined label="Citizenship"/>
              </v-col>
            </v-row>
          </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "addclient",
  data() {
    return {
      civil_status: ["Single", "Married", "Widowed", "Separated"],
      gender_down: ["Male", "Female"]
    };
  }
};
</script>
