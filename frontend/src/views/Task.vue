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
          <ion-col>Category</ion-col>
          <ion-col>Enddate</ion-col>
          <ion-col>Project</ion-col>
        </ion-row>
        <ion-item button :router-link="'/tabs/task/' + task.id" :key="task.id" v-for="task in tasks">
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
                {{ task.project?.title }}
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>

      <div>
        <ion-button @click="setOpen(true)">Create Task</ion-button>
        <ion-modal :is-open="isOpen" @ionModalDidDismiss="
          () => {
            isOpen = false;
          }
        ">
          <ion-header>
            <ion-toolbar>
              <ion-title>Create new Task</ion-title>
              <ion-buttons slot="end">
                <ion-button @click="setOpen(false)">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-radio-group :allow-empty-selection="false">
                <ion-item>
                  <ion-label>Project Task</ion-label>
                  <ion-radio slot="end" value="project" @click="setProjectTrue"></ion-radio>
                </ion-item>

                <ion-item>
                  <ion-label>Single Task</ion-label>
                  <ion-radio slot="end" value="single" @click="setProjectFalse"></ion-radio>
                </ion-item>
              </ion-radio-group>
            </ion-list>
            <create-projecttask v-if="projectTask"></create-projecttask>
            <create-singletask v-if="projectTask == false"></create-singletask>
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
  IonItem,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonLabel,
  IonRow,
  IonGrid,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonButton,
  IonButtons,
  IonModal,
  IonInput,
} from "@ionic/vue";
import { useTasks } from "../composables/useTasks";
import { ref } from "vue";
import createProjecttask from "@/components/createProjecttask.vue";
import createSingletask from "@/components/createSingletask.vue";
/* import modalCreateProjecttask from '../components/modalCreateProjecttask.vue'; */

const isOpen = ref(false);
const projectTask = ref<any>(null);

function setProjectFalse() {
  projectTask.value = false;
}

function setProjectTrue() {
  projectTask.value = true;
}

function setOpen(open: boolean) {
  //Öffnen/Schliessen + update Tasklist
  isOpen.value = open;
  getTasks();
}

const { newTask, tasks, getTasks, finishTask, archiveTask, } =
  useTasks();
</script>