<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Task Details </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <h1 class="h1">Task Details </h1>
        <ion-item>
        <ion-grid>
          <ion-row>
            <ion-col> Title:</ion-col>
            <ion-col> {{ specificTask?.title }} </ion-col>
          </ion-row>
          <ion-row>
            <ion-col> Category:</ion-col>
            <ion-col> {{ specificTask?.category }} </ion-col>
          </ion-row>
          <ion-row>
            <ion-col> Start-Date:</ion-col>
            <ion-col> {{ specificTask?.startDate }} </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>End-Date:</ion-col>
            <ion-col> {{ specificTask?.endDate }} </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>Text:</ion-col>
            <ion-col> {{ specificTask?.text }} </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>Project:</ion-col>
            <ion-col> {{ specificTask?.project?.title }} </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>Status:</ion-col>
            <ion-col>
                <ion-button color="danger" v-if="!specificTask?.done && !specificTask?.archived"
                  @click="finishTask(specificTask)">Finish</ion-button>
                <ion-button color="success" v-if="!specificTask?.done && !specificTask?.archived"
                  @click="archiveTask(specificTask)">Archive</ion-button>
              </ion-col> 
          </ion-row>
        </ion-grid>
        </ion-item>
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
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/vue";
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useTasks } from "../composables/useTasks";
import { ref } from "vue";

const { newTask, tasks, specificTask, getTasks, finishTask, archiveTask, getSpecificTaskById } =
  useTasks();

  const route = useRoute();

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




  onMounted( () => {getSpecificTaskById(+id)})

const id = route.params.id;
</script>
  
<style scoped>
ion-col {
  background-color: #71a4f1;
  border: solid 1px #fff;
  color: #fff;
  text-align: left;
}
.h1 {
  text-align: center;
}
</style>