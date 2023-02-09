/* <template>
<ion-content class="ion-padding">
    <ion-button @click="setOpen(true)">Create Task (Neu)</ion-button>
    <ion-modal :is-open="isOpen" @ionModalDidDismiss="() => {isOpen = false;}">
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="setOpen(false)">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <create-projecttask></create-projecttask>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script lang="ts">
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
import { ref } from "vue";

const isOpen = ref(false);

function setOpen(open: boolean) {
  isOpen.value = open;
}
</script>

<style scope>
</style> */