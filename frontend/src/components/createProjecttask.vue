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
      <ion-label>Projekt</ion-label>
      <ion-select placeholder="Projekt auswählen" :value="newProjectTask.project"
        @ionChange="newProjectTask.project = $event.target.value">
        <ion-select-option :key="project.id" v-model="newProjectTask.project"
          v-for="project in projects" :value="project.id">{{project.title}}</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
  <ion-button @click="addProjectTask()">Add New Task</ion-button>

  <ion-modal :keep-contents-mounted="true">
    <ion-datetime v-model="newProjectTask.startDate" id="datetimestart"></ion-datetime>
  </ion-modal>
  <ion-modal :keep-contents-mounted="true">
    <ion-datetime v-model="newProjectTask.endDate" id="datetimeend"></ion-datetime>
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
import { useProjects } from "../composables/useProjects";

const { newProjectTask, addProjectTask } = useTasks();
const { getProjects, projects } = useProjects();
</script>
  
<style scoped>
</style>