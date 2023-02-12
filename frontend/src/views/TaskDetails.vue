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

      <h1 class="ueberschrift">Task Details </h1>
      <ion-icon button @click="toggleEdit()" class="task_details_edit" :icon="createOutline"></ion-icon>
      <ion-icon button @click="changeTask(+id); toggleEdit()" :icon="checkmarkOutline" class="task_details_edit" :class="{editMode: !editMode}"></ion-icon>
      <ion-icon button @click="toggleEdit()" :icon="closeOutline" class="task_details_edit" :class="{editMode: !editMode}"></ion-icon>
        
        <ion-item>
        <ion-grid class="wrapper">
          <ion-row>
            <ion-col> Title:</ion-col>
            <ion-col> <ion-item><ion-input v-model="newTask.title" :value="specificTask?.title" :disabled="!editMode"></ion-input></ion-item> </ion-col>
          </ion-row>
          <ion-row>
            <ion-col> Type:</ion-col>
            <ion-col> <ion-item><ion-input v-model="newTask.type" :value="specificTask?.type" :disabled="true"></ion-input></ion-item> </ion-col>
          </ion-row>
          <ion-row>
            <ion-col> Category:</ion-col>
            <ion-col> <ion-item><ion-input v-model="newTask.category" :value="specificTask?.category" :disabled="!editMode"></ion-input></ion-item> </ion-col>
          </ion-row>
          <ion-row>
            <ion-col> Start-Date:</ion-col>
            <ion-col> {{ specificTask?.startDate }}    </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>End-Date:</ion-col>
            <ion-col> {{ specificTask?.endDate }} </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              Text:
            </ion-col>
            <ion-col> <ion-item><ion-textarea v-model="newTask.text" :value="specificTask?.text" :disabled="!editMode"></ion-textarea></ion-item><br>
              <ion-button @click="writeToClipboard(specificTask?.text as string)">To Clipboard</ion-button> </ion-col>
          </ion-row>
          <ion-row button :router-link="'/tabs/project/'+specificTask.project?.id" v-if="specificTask?.type == 'ProjectTask'" style="cursor: pointer;">
            <ion-col>Project:</ion-col>
            <ion-col> {{ specificTask?.project?.title }} </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>Action:</ion-col>
            <ion-col>
                <ion-button color="danger" v-if="!specificTask?.done"
                  @click="finishTask();">Finish</ion-button>
                <ion-button color="success" v-if="!specificTask?.archived"
                @click="archiveTask()" :router-link="'/tabs/task'">Archive</ion-button>
              </ion-col> 
          </ion-row>
          <ion-row>
            <ion-col>Finished:</ion-col>
            <ion-col> {{ specificTask?.done }} </ion-col>
          </ion-row>
        </ion-grid>
        </ion-item>
        <ion-button @click="deleteTask(+id)" :router-link="'/tabs/task'" color="danger">Delete Task</ion-button>
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
  IonModal,
  IonDatetimeButton,
  IonDatetime,
  IonRow,
  IonCol,
  IonInput,
  IonTextarea,
  IonIcon
} from "@ionic/vue";
import {createOutline,checkmarkOutline,closeOutline} from 'ionicons/icons';
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useTasks } from "../composables/useTasks";
import { ref } from "vue";
import { Clipboard } from '@capacitor/clipboard';

const { newTask, tasks, specificTask, getTasks, finishSingleTask, finishProjectTask, archiveSingleTask, archiveProjectTask, getSpecificTaskById, changeTask, deleteTask } =
  useTasks();

  const writeToClipboard = async (text: string) => {
  await Clipboard.write({
    string: text
  });
};

  const route = useRoute();

  const TaskId = route.params.id;

  const isOpen = ref(false);
const projectTask = ref<any>(null);
  const editMode = ref(false);

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

function toggleEdit() {
    editMode.value = !editMode.value;
  }

function finishTask() {
  if(specificTask.value?.type == "SingleTask") {
    finishSingleTask(+TaskId);
  } else {
    (specificTask.value?.type == "ProjectTask") 
    finishProjectTask(+TaskId)
  }
}

function archiveTask() {
  if(specificTask.value?.type == "SingleTask") {
    archiveSingleTask(+TaskId)
  } else {
    (specificTask.value?.type == "ProjectTask") 
    archiveProjectTask(+TaskId)
}
}



  onMounted( () => {getSpecificTaskById(+id)})

const id = route.params.id;
</script>
  
<style scoped>

.task_details_edit{
  margin-left: 20px;
  height: 25px;
  width: 25px;;
  cursor: pointer;
}

.editMode{
  display: none;
}
</style>