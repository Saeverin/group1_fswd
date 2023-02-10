<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>Project Details</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Blank</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <h1>Project Details</h1>
        <br />
        <ion-list>
          <ion-grid>
            <ion-row>
              <ion-col> ID:</ion-col>
              <ion-col> {{ specificProject?.id }} </ion-col>
            </ion-row>
            <ion-row>
              <ion-col> Titel:</ion-col>
              <ion-col> {{ specificProject?.title }} </ion-col>
            </ion-row>
              <ion-row>
                <ion-col> Done:  </ion-col>
                <ion-col> {{ specificProject?.done }} </ion-col>
              </ion-row>
              <ion-row>
              <ion-col> Deadline:</ion-col>
              <ion-col> {{ specificProject?.deadline }} </ion-col>
            </ion-row>
          </ion-grid>
        </ion-list>

        <h1>Project Tasks</h1>
        <ion-list>
        <ion-row>
          <ion-col>Title</ion-col>
          <ion-col>Category</ion-col>
          <ion-col>Enddate</ion-col>
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
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>

      <div>
        <ion-button @click="setOpen(true)">Create Project Task</ion-button>
        <ion-modal :is-open="isOpen" @ionModalDidDismiss="
          () => {
            isOpen = false;
          }
        ">
          <ion-header>
            <ion-toolbar>
              <ion-title>Create new Project Task</ion-title>
              <ion-buttons slot="end">
                <ion-button @click="setOpen(false)">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <create-projecttask @some-event="setOpen(false); getTasksByProject(+id);"></create-projecttask>
          </ion-content>
        </ion-modal>
      </div>

      <ion-button @click="deleteProject(+id)" :router-link="'/tabs/projects'" color="danger">Delete Project</ion-button>

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
    IonModal,
    IonToolbar,
    IonRow,
    IonGrid,
    IonCol
  } from "@ionic/vue";
  import { defineComponent } from 'vue';
  import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";
  import { useProjects } from "../composables/useProjects";
  import { useTasks } from "../composables/useTasks";
  import createProjecttask from "@/components/createProjecttask.vue";
  
  const { specificProject, getSpecificProjectById, deleteProject } = useProjects();
  const { tasks, getTasksByProject } = useTasks();
  const isOpen = ref(false);

  const route = useRoute();
  
  const id = route.params.id;

  function setOpen(open: boolean) {
  //Öffnen/Schliessen + update Tasklist
  isOpen.value = open;
  getTasksByProject(+id);
}

  onMounted( () => {
    getSpecificProjectById(+id)
    getTasksByProject(+id)
  })

  </script>
    
    <style scoped>
  </style>