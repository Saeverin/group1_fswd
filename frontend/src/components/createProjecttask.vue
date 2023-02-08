<template>
  <ion-list>
    <ion-item>
      <ion-label position="floating">Titel</ion-label>
      <ion-input placeholder="Enter text" v-model="newProjectTask.title"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Kategorie</ion-label>
      <ion-input placeholder="Enter text" v-model="newProjectTask.category"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Text</ion-label>
      <ion-textarea
        placeholder="Type something here"
        :auto-grow="true"
        value=""
        v-model="newProjectTask.text"
      >
      </ion-textarea>
    </ion-item>
    <ion-item>
      <ion-label>Start</ion-label>
      <ion-datetime-button datetime="datetimestart"></ion-datetime-button>
    </ion-item>
    <ion-item>
      <ion-label>Ende</ion-label>
      <ion-datetime-button datetime="datetimeend"></ion-datetime-button>
    </ion-item>
    <ion-item>
      <ion-select placeholder="Projekt auswählen">
        <ion-select-option value="apples">Apples</ion-select-option>
        <ion-select-option value="oranges">Oranges</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
  <ion-button @click="addProjectTask()">Add New Task</ion-button>

  <ion-modal :keep-contents-mounted="true">
    <ion-datetime id="datetimestart"></ion-datetime>
  </ion-modal>
  <ion-modal :keep-contents-mounted="true">
    <ion-datetime id="datetimeend"></ion-datetime>
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
import { useTasks } from "../composables/useTasks";

const { newProjectTask, addProjectTask } = useTasks();
</script>
  
<style scoped>
</style>