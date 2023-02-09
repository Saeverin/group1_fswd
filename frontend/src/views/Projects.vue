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
      <ion-list>
        <ion-item :key="project.id" v-for="project in projects">
          <ion-grid>
            <ion-row>
              <ion-col>
                {{ project.title }}
              </ion-col>
              <ion-col>
                <ion-button color="danger" v-if="!project.done && !project.archived"
                  @click="finishProject(project)">Finish</ion-button>
                <ion-button color="success" v-if="project.done && !project.archived"
                  @click="archiveProject(project)">Archive</ion-button>
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
            <create-project></create-project>
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
} from "@ionic/vue";
import { ref } from "vue";
import { useProjects } from "../composables/useProjects";
import createProject from "@/components/createProject.vue";

const { newProject, projects, getProjects, addProject, finishProject, archiveProject } = useProjects();
const isOpen = ref(false);

function setOpen(open: boolean) {
  //Öffnen/Schliessen + update Tasklist
  isOpen.value = open;
  getProjects();
}

</script>