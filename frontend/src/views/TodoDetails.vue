<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
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
        <br>
        ID: {{ id }}
        

      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonButton, IonList, IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'; 
  import {useRoute} from 'vue-router';

  const route = useRoute();

  const id = route.params.id;
  </script>
  
  <style scoped>
  
  </style>