<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Projects</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Projects</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list class="wrapper">
        <ion-row>
          <ion-col class="col-header">Title</ion-col>
          <ion-col class="col-header">Deadline</ion-col>
        </ion-row>

        <ion-item button :router-link="'/tabs/project/' + project.id" :key="project.id" v-for="project in projects">
          <ion-grid>
            <ion-row>
              <ion-col class="col-content">
                {{ project.title }}
              </ion-col>
              <ion-col class="col-content">
                {{ project.deadline }}
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>
      
      <div>
        <ion-button @click="setOpen(true)">Create Project</ion-button>
        <ion-modal
          :is-open="isOpen"
          @ionModalDidDismiss="
            () => {
              isOpen = false;
            }
          "
        >
          <ion-header>
            <ion-toolbar>
              <ion-title>Create new Project</ion-title>
              <ion-buttons slot="end">
                <ion-button @click="setOpen(false)">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <create-project @some-event="getProjects(); setOpen(false); "></create-project>
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
  IonInput,
  IonModal,
  IonButtons,
  IonDatetime
} from "@ionic/vue";
import { defineComponent, onActivated, onBeforeUpdate, onMounted, onUpdated, watchEffect } from 'vue';
import { ref } from "vue";
import { useProjects } from "../composables/useProjects";
import createProject from "@/components/createProject.vue";

const { newProject, projects, getProjects, addProject, finishProject, archiveProject } = useProjects();
const isOpen = ref(false);

watchEffect(() => {
  useProjects;
  projects;
});

onMounted(() => getProjects())

onUpdated(() => getProjects())

function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function setOpen(open: boolean) {
  //??ffnen/Schliessen + update Tasklist
  isOpen.value = open;
  getProjects();

  if(!open) {
    delay(1000).then(() => getProjects());
  }
}

</script>