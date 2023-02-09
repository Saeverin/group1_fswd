<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Task Details </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      Task Details 
        <ion-item
         >
        <ion-grid>
          <ion-row>
            <ion-col size="1"> Title:</ion-col>
            <ion-col size="4"> {{ specificTask?.title }} </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="1"> Category:</ion-col>
            <ion-col size="4"> {{ specificTask?.category }} </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="1"> Start-Date:</ion-col>
            <ion-col size="4"> {{ specificTask?.startDate }} </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="1">End-Date:</ion-col>
            <ion-col size="4"> {{ specificTask?.endDate }} </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="1">Text:</ion-col>
            <ion-col size="4"> {{ specificTask?.text }} </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="1">Status:</ion-col>
            <ion-col size="4"> {{ done }} </ion-col>            
          </ion-row>
        </ion-grid>
        </ion-item>
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
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useTasks } from "../composables/useTasks";

const { newTask, tasks, specificTask, getTasks, finishTask, archiveTask, getSpecificTaskById } =
  useTasks();

  const route = useRoute();


  onMounted( () => {getSpecificTaskById(+id)})

const id = route.params.id;
const title = route.params.title;
const done = route.params.done;
const category = route.params.category;
const text = route.params.text;
const startDate = route.params.startDate;
const endDate = route.params.endDate;
</script>
  
<style scoped>
ion-col {
  background-color: #135d54;
  border: solid 1px #fff;
  color: #fff;
  text-align: center;
}
</style>