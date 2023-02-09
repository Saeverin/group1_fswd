<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tasks</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tasks</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-row>
          <ion-col>Title</ion-col>
          <ion-col>Kategorie</ion-col>
          <ion-col>End-Datum</ion-col>
          <ion-col>Projekt</ion-col>
        </ion-row>
        <ion-item
          button
          :router-link="'/tabs/task/' + task.id"
          :key="task.id"
          v-for="task in tasks">
          <ion-grid>
            <ion-row>
              <ion-col>
                {{ task.title }}
              </ion-col>
              <ion-col>
                {{ task.category }}
              </ion-col>
              <ion-col>
                {{ task.endDate }}
              </ion-col>
              <ion-col>
                <ion-button
                  color="danger"
                  v-if="!task.done && !task.archived"
                  @click="finishTask(task)"
                  >Finish</ion-button>
                <ion-button
                  color="success"
                  v-if="task.done && !task.archived"
                  @click="archiveTask(task)"
                  >Archive</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>
     
      <div>
        <ion-button @click="setOpen(true)">Create Task</ion-button>
        <ion-modal :is-open="isOpen" @ionModalDidDismiss="() => {isOpen = false;}">
          <ion-header>
            <ion-toolbar>
              <ion-title>Create new Task</ion-title>
              <ion-buttons slot="end">
                <ion-button @click="setOpen(false)">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content>
          <create-projecttask></create-projecttask>
          </ion-content>
        </ion-modal>
      </div>
<!--
@TODO
- Modal als component nutzen
<modal-create-projecttask></modal-create-projecttask>

- "Success" in createProjecttask (ion-toast?) bei Erstellung

- Nach createProjecttask modal schliessen
-->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonRow,
  IonGrid,
  IonItem,
  IonList,
  IonButton,
  IonButtons,
  IonModal,
  IonInput,
} from "@ionic/vue";
import { useTasks } from "../composables/useTasks";
import { ref } from "vue";
import createProjecttask from '@/components/createProjecttask.vue';
/* import modalCreateProjecttask from '../components/modalCreateProjecttask.vue'; */

const isOpen = ref(false);

function setOpen(open: boolean) {
  isOpen.value = open;
}

const { newTask, tasks, getTasks, addTask, finishTask, archiveTask } =
  useTasks();
</script>