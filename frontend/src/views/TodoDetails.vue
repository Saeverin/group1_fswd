<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>ToDo Details</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      ToDo Details
      <br />
      <ion-list>
        <ion-grid>
          <ion-row>
            <ion-col> ID: {{ id }} </ion-col>
            <ion-col> Titel: {{ title }} </ion-col>
            <ion-col> Done? {{ done }} </ion-col>
            <ion-col> Kategorie: {{ category }} </ion-col>
          </ion-row>
        </ion-grid>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
  
  <script setup lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonList,
  IonItem,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { useRoute } from "vue-router";

const route = useRoute();

const id = route.params.id;
const title = route.params.title;
const done = route.params.done;
const category = route.params.category;
const text = route.params.text;
const startDate = route.params.startDate;
const endDate = route.params.endDate;
</script>
  
  <style scoped>
</style>