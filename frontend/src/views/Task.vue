<template>
  <ion-page v-if="renderComponent">
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
      <ion-list class="wrapper">
        <ion-row>
          <ion-col class="col-header">Title</ion-col>
          <ion-col class="col-header">Category</ion-col>
          <ion-col class="col-header">Enddate</ion-col>
          <ion-col class="col-header">Project</ion-col>
        </ion-row>
        
          
            <ion-row  button :router-link="'/tabs/task/' + task.id" :key="task.id" v-for="task in tasks">
              <ion-col :v-bind="task.title" class="col-content">
                {{ task.title }}
              </ion-col>
              <ion-col class="col-content">
                {{ task.category }}
              </ion-col>
              <ion-col class="col-content">
                {{ task.endDate }}
              </ion-col>
              <ion-col class="col-content">
                {{ task.project?.title }}
              </ion-col>
            </ion-row>
          
    
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
            <create-projecttask @some-event="someEventListener" v-if="projectTask"></create-projecttask>
            <create-singletask @some-event="someEventListener" v-if="projectTask == false" ></create-singletask>
          </ion-content>
        </ion-modal>
      </div>
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
import { defineComponent, onMounted, onBeforeUpdate, onUpdated, watchEffect, nextTick } from 'vue';
import { ref } from "vue";
import createProjecttask from "../components/createProjecttask.vue";
import createSingletask from "../components/createSingletask.vue";

const { newTask, tasks, getTasks } =  useTasks();

const renderComponent = ref(true);

watchEffect(() => {
  useTasks;
  tasks;
});


async function forceRerender() {
        // Removing my-component from the DOM
        renderComponent.value = false;

        await nextTick(() => {
          // Adding the component back in
          renderComponent.value = true;
          setOpen(false);
        });
}

const isOpen = ref(false);
const projectTask = ref<any>(null);
const componentKey = ref(0);

onMounted(() => {
  getTasks();
});

onUpdated(() => getTasks())

function someEventListener() {
  
  getTasks();
  componentKey.value += 1;
  setOpen(false); 
  
}

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
  if(!open) {
    window.location.reload();
  }
 }



</script>

<style scoped>
</style>