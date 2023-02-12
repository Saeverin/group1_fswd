<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Archive</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Archive</ion-title>
        </ion-toolbar>
      </ion-header>
      <h1 class="ueberschrift">Archived Tasks</h1>

      <ion-list class="wrapper">
        <ion-row>
          <ion-col class="col-header">Title</ion-col>
          <ion-col class="col-header">Status</ion-col>
        </ion-row>
        <ion-item :key="task.id" v-for="task in archivedTasks">
          <ion-grid>
            <ion-row>
              <ion-col class="col-content">
                {{ task.title }}
              </ion-col>
              <ion-col class="col-content">
                Finished: {{ task.done }}
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>
      <h1>Archived Projects</h1>
      <ion-list class="wrapper">
        <ion-row>
          <ion-col class="col-header">Title</ion-col>
          <ion-col class="col-header">Status</ion-col>
        </ion-row>
        <ion-item :key="project.id" v-for="project in archivedProjects">
          <ion-grid>
            <ion-row>
              <ion-col class="col-content">
                {{ project.title }}
              </ion-col>
              <ion-col class="col-content">
                Finished: {{ project.done }}
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList,IonItem, IonGrid,IonRow,IonCol } from '@ionic/vue';
import { onMounted } from 'vue';
import { useProjects } from '../composables/useProjects';

import { useTasks } from "../composables/useTasks";

const { archivedTasks, getArchivedTasks } = useTasks();
const { archivedProjects, getArchivedProjects } = useProjects();

onMounted(() => {
  getArchivedTasks();
  getArchivedProjects();
})

</script>