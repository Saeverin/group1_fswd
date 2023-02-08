<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="task" href="/tabs/task">
          <ion-icon :icon="flash" />
          <ion-label>Task</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="projects" href="/tabs/projects">
          <ion-icon :icon="apps" />
          <ion-label>Projects</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="timerecord" href="/tabs/timerecord">
          <ion-icon :icon="send" />
          <ion-label>Timerecord</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { flash, apps, send } from 'ionicons/icons';
</script>