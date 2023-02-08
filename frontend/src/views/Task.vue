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
          <ion-col>Done?</ion-col>
          <ion-col>Category</ion-col>
          <ion-col>Project</ion-col>
        </ion-row>
        <ion-item
          button
          :router-link="'/tabs/task/' + task.id"
          :key="task.id"
          v-for="task in tasks"
        >
          <ion-grid>
            <ion-row>
              <ion-col>
                {{ task.title }}
              </ion-col>
              <ion-col>
                <ion-button
                  color="danger"
                  v-if="!task.done && !task.archived"
                  @click="finishTask(task)"
                  >Finish</ion-button
                >
                <ion-button
                  color="success"
                  v-if="task.done && !task.archived"
                  @click="archiveTask(task)"
                  >Archive</ion-button
                >
              </ion-col>
              <ion-col>
                <!--{{ task.category }}-->
                Kategorie d. Tasks
              </ion-col>
              <ion->
                <!--{{ task.project }}-->
                Zugehöriges Projekt
              </ion->
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>
      <ion-item>
        <ion-input
          type="text"
          placeholder="New Task Title"
          v-model="newTask.title"
        ></ion-input>
      </ion-item>
      <div padding>
        <ion-button @click="addTask()">Add New Task</ion-button>
      </div>

      <div>
        <ion-button @click="setOpen(true)">Create Task (Neu)</ion-button>
        <!-- MODAL -->

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
            <p>ASDF TEST TEST INHALT MODAL</p>
          </ion-content>
        </ion-modal>
      </div>
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

const isOpen = ref(false);

function setOpen(open: boolean) {
  isOpen.value = open;
}

const { newTask, tasks, getTasks, addTask, finishTask, archiveTask } =
  useTasks();
</script>