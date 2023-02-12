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
  
        <h1 class="project_details_title">Project Details</h1>
        <ion-icon button @click="toggleEdit()" class="project_details_edit" :icon="createOutline"></ion-icon>
        <ion-icon button @click="changeProject(+id); toggleEdit()" :icon="checkmarkOutline" class="project_details_edit" :class="{editMode: !editMode}"></ion-icon>
        <ion-icon button @click="toggleEdit()" :icon="closeOutline" class="project_details_edit" :class="{editMode: !editMode}"></ion-icon>
        <br />
        <ion-list class="wrapper">
          <ion-grid>
            <ion-row>
              <ion-col> ID:</ion-col>
              <ion-col> <ion-item><ion-input :value="specificProject?.id" :disabled="true"></ion-input></ion-item> </ion-col>
            </ion-row>
            <ion-row>
              <ion-col> Titel:</ion-col>
              <ion-col> <ion-item><ion-input v-model="newProject.title" :value="specificProject?.title" :disabled="!editMode"></ion-input></ion-item>  </ion-col>
            </ion-row>
              <ion-row>
                <ion-col> Done:  </ion-col>
                <ion-col> <ion-item><ion-checkbox :value="specificProject?.done" :checked="specificProject?.done" :aria-checked="specificProject?.done"  :disabled="true"></ion-checkbox></ion-item></ion-col>
              </ion-row>
              <ion-row>
              <ion-col> Deadline:</ion-col>
              <ion-col> <ion-item><ion-datetime-button datetime="deadline" :disabled="!editMode"></ion-datetime-button></ion-item>   </ion-col>
            </ion-row>
          </ion-grid>

          <ion-modal :keep-contents-mounted="true">
            <ion-datetime v-model="newProject.deadline" :value="specificProject?.deadline" id="deadline"></ion-datetime>
         </ion-modal>
        </ion-list>

        <h1>Project Tasks</h1>
        <ion-list class="wrapper">
        <ion-row>
          <ion-col>Title</ion-col>
          <ion-col>Assignee</ion-col>
          <ion-col>Enddate</ion-col>
        </ion-row>
        <ion-item button :router-link="'/tabs/task/' + task.id" :key="task.id" v-for="task in tasks">
          <ion-grid class="wrapper">
            <ion-row>
              <ion-col>
                {{ task.title }}
              </ion-col>
              <ion-col>
                {{ task.owner }}
              </ion-col>
              <ion-col>
                {{ task.endDate }}
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>

      <ion-grid>
        <ion-row>
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
            <create-projecttask @some-event="setOpen(false); getTasksByProject(+id);"></create-projecttask>
        </ion-modal>
      </div>
      <ion-button @click="archiveProject(+id)" :router-link="'/tabs/projects'" color="warning">Archive Project</ion-button>
      <ion-button @click="deleteProject(+id)" :router-link="'/tabs/projects'" color="danger">Delete Project</ion-button>
    </ion-row>
    </ion-grid>
      </ion-content>
    </ion-page>
  </template>
    
    <script setup lang="ts">
  import {
    IonBackButton,
    IonButtons,
    IonButton,
    IonList,
    IonInput,
    IonIcon,
    IonDatetime,
    IonDatetimeButton,
    IonItem,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonModal,
    IonToolbar,
    IonCheckbox,
    IonRow,
    IonGrid,
    IonCol,
  } from "@ionic/vue";
  import {createOutline,checkmarkOutline,closeOutline} from 'ionicons/icons';
  import { defineComponent, onUpdated } from 'vue';
  import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";
  import { useProjects } from "../composables/useProjects";
  import { useTasks } from "../composables/useTasks";
  import createProjecttask from "@/components/createProjecttask.vue";
  import { Project } from "../model/project";
  
  const { specificProject, newProject, getSpecificProjectById, deleteProject, changeProject, archiveProject } = useProjects();
  const { tasks, getTasksByProject } = useTasks();
  const isOpen = ref(false);
  const editMode = ref(false);

  const route = useRoute();

  
  const id = route.params.id;

  function toggleEdit() {
    editMode.value = !editMode.value;
  }

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
    .project_details_title{
      display: inline-block;
    }

    .project_details_edit{
      margin-left: 20px;
      height: 25px;
      width: 25px;;
    }

    .editMode{
      display: none;
    }
  </style>