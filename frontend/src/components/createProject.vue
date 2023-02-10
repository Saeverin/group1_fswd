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
    <ion-button @click="addProject(); $emit('someEvent')">Add New Project</ion-button>
  
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
    IonItem
  } from "@ionic/vue";
  import { defineComponent } from 'vue';
  import { useProjects } from "../composables/useProjects";

  const { newProject, addProject } = useProjects();

  </script>
  <script lang="ts">
  
  export default {
    emits: ['someEvent']
  }
  </script>
  
    
  <style scoped>
  </style>