<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>Project Details</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Blank</ion-title>
          </ion-toolbar>
        </ion-header>
  
        Project Details
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
  </script>
    
    <style scoped>
  </style>