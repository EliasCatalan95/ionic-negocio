<template>
    <ion-app>
      <ion-split-pane content-id="main-content">
        <ion-menu content-id="main-content" type="overlay">
          <ion-content>
  
            <ion-list id="Botones">
          <div class="Nombre">
                    <ion-item >
                      <ion-title class="ion-text-center">Cafeteria Cafe en la Nuve</ion-title>        
                      </ion-item>
                  </div>
          
          <div class="diseñoimg">
              <ion-item >
                  <img class="centrar-imagen" src="../cafe-americano.png" width="100" height="100" alt="Imagen Cafe">
                  </ion-item>
                </div>
            
              
  
              <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
                <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                  <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                  <ion-label>{{ p.title }}</ion-label>
                </ion-item>
              </ion-menu-toggle>
  
              

            </ion-list>
  
            <ion-list id="labels-list">
              <ion-list-header>Equipo truchas</ion-list-header>
  
              <ion-item v-for="(label, index) in labels" lines="none" :key="index">
                <ion-icon aria-hidden="true" slot="start" :ios="bookmarkOutline" :md="bookmarkSharp"></ion-icon>
                <ion-label>{{ label }}</ion-label>
              </ion-item>
            </ion-list>
  
  
          </ion-content>
        </ion-menu>
        <ion-router-outlet id="main-content"></ion-router-outlet>
      </ion-split-pane>
    </ion-app>
  </template>
  <style>
  
  
  .diseñoimg{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 18vh;
  
  }
  </style>
  <script setup lang="ts">
  import {
    IonApp,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonRouterOutlet,
    IonSplitPane,
  } from '@ionic/vue';
  import { ref } from 'vue';
  import {
    archiveOutline,
    archiveSharp,
    bookmarkOutline,
    bookmarkSharp,
    camera,
    document,
    documentAttach,
    documentAttachOutline,
    documentLock,
    heartOutline,
    heartSharp,
    information,
    magnet,
    magnetOutline,
    magnetSharp,
    mailOutline,
    mailSharp,
    micCircle,
    micCircleOutline,
    paperPlaneOutline,
    paperPlaneSharp,
    recording,
    trashOutline,
    trashSharp,
    warningOutline,
    warningSharp,
  } from 'ionicons/icons';
  import { receiveMessageOnPort } from 'worker_threads';
  import { RouterView, routerViewLocationKey } from 'vue-router';
  import { verify } from 'crypto';

  const selectedIndex = ref(0);
  const appPages = [
    {
      title: 'Infomacion',
      url: '/Pestañas/Informacion',
      iosIcon: information,
      mdIcon: information,
    },
    {
      title: 'Consultar Registros',
      url: '/Pestañas/Registros',
      iosIcon: documentAttach,
      mdIcon: document,
    },
    {
      title: 'Camara',
      url: '/Pestañas/Camara',
      iosIcon: camera,
      mdIcon: camera,
    }
  ];
  const labels = [ 'Elias', 'El Cochazo', 'Imanol'];
  
  const path = window.location.pathname.split('folder/')[1];
  if (path !== undefined) {
    selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
   
  }
  console.log("seleccion :"+selectedIndex.value);
  function iniciarSesionConGoogle() {
  
  }
  </script>
  
  <style scoped>
  ion-menu ion-content {
    --background: var(--ion-item-background, var(--ion-background-color, #0000));
  }
  
  ion-menu.md ion-content {
    --padding-start: 8px;
    --padding-end: 8px;
    --padding-top: 20px;
    --padding-bottom: 20px;
  }
  
  ion-menu.md ion-list {
    padding: 20px 0;
  }
  
  ion-menu.md ion-note {
    margin-bottom: 30px;
  }
  
  ion-menu.md ion-list-header,
  ion-menu.md ion-note {
    padding-left: 10px;
  }
  
  ion-menu.md ion-list#inbox-list {
    border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
  }
  
  ion-menu.md ion-list#inbox-list ion-list-header {
    font-size: 22px;
    font-weight: 600;
  
    min-height: 20px;
  }
  
  ion-menu.md ion-list#labels-list ion-list-header {
    font-size: 16px;
  
    margin-bottom: 18px;
  
    color: #3322ce;
  
    min-height: 26px;
  }
  
  ion-menu.md ion-item {
    --padding-start: 10px;
    --padding-end: 10px;
    border-radius: 4px;
  }
  
  ion-menu.md ion-item.selected {
    --background: rgba(var(--ion-color-primary-rgb), 0.14);
  }
  
  ion-menu.md ion-item.selected ion-icon {
    color: var(--ion-color-primary);
  }
  
  ion-menu.md ion-item ion-icon {
    color: #616e7e;
  }
  
  ion-menu.md ion-item ion-label {
    font-weight: 500;
  }
  
  ion-menu.ios ion-content {
    --padding-bottom: 20px;
  }
  
  ion-menu.ios ion-list {
    padding: 20px 0 0 0;
  }
  
  ion-menu.ios ion-note {
    line-height: 24px;
    margin-bottom: 20px;
  }
  
  ion-menu.ios ion-item {
    --padding-start: 16px;
    --padding-end: 16px;
    --min-height: 50px;
  }
  
  ion-menu.ios ion-item.selected ion-icon {
    color: var(--ion-color-primary);
  }
  
  ion-menu.ios ion-item ion-icon {
    font-size: 24px;
    color: #73849a;
  }
  
  ion-menu.ios ion-list#labels-list ion-list-header {
    margin-bottom: 8px;
  }
  
  ion-menu.ios ion-list-header,
  ion-menu.ios ion-note {
    padding-left: 16px;
    padding-right: 16px;
  }
  
  ion-menu.ios ion-note {
    margin-bottom: 8px;
  }
  
  ion-note {
    display: inline-block;
    font-size: 16px;
  
    color: var(--ion-color-medium-shade);
  }
  
  ion-item.selected {
    --color: var(--ion-color-primary);
  }
  </style>
  