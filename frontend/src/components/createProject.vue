<template>
    <ion-list>
      <ion-item>
        <ion-label position="floating">Titel</ion-label>
        <ion-input placeholder="Enter text" v-model="newProject.title"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Deadline</ion-label>
        <ion-datetime-button datetime="deadline"></ion-datetime-button>
      </ion-item>
    </ion-list>
    <ion-button @click="addProject()">Add New Project</ion-button>
  
    <ion-modal :keep-contents-mounted="true">
      <ion-datetime v-model="newProject.deadline" id="deadline"></ion-datetime>
    </ion-modal>
  </template>
    
  <script setup lang="ts">
  import {
    IonSelect,
    IonSelectOption,
    IonModal,
    IonDatetime,
    IonDatetimeButton,
    IonList,
    IonLabel,
    IonTextarea,
    IonButton,
    IonButtons,
    IonInput,
  } from "@ionic/vue";
  import { useProjects } from "../composables/useProjects";
  
  const { newProject, addProject } = useProjects();
  </script>
    
  <style scoped>
  </style>