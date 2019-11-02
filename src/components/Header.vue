<template>
  <div>
    <v-app-bar fixed app>
      <v-toolbar-title>
        <v-btn text>
          <v-icon>mdi-home</v-icon>
          <span>FRAL Lending Services</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="red" v-on:click="$emit('logout')">
        <span class="mr-2">Log-out</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>