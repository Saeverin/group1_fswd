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
      <ion-item>
        <ion-input type="text" placeholder="New Project Title" v-model="newProject.title"></ion-input>
      </ion-item>
      <div padding>
        <ion-button @click="addProject()">Add New Project</ion-button>
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
import { useProJects } from "../composables/useProjects";

const { newProject, projects, getProjects, addProject, finishProject, archiveProject } = useProJects();

</script>