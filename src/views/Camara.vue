<template>
  <ion-page>

    <ion-content class="ion-padding">
      <ion-button @click="getPhoto">Capturar Foto</ion-button>
      <video ref="videoElement"></video>
      <ion-button @click="startCamera">Iniciar Cámara</ion-button>
      <ion-button @click="stopCamera">Detener Cámara</ion-button>
    </ion-content>




  </ion-page>
</template>

<script>
import { Camera } from '@capacitor/camera';


export default {
  data() {
    return {
      videoStream: null
    };
  },
  methods: {
    async startCamera() {
      try {
        const videoElement = this.$refs.videoElement;

        // Obtener acceso a la cámara
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        // Mostrar la vista previa de la cámara en el elemento de video
        videoElement.srcObject = stream;
        videoElement.play();

        this.videoStream = stream;
      } catch (error) {
        console.error('Error al acceder a la cámara:', error);
      }
    },
    stopCamera() {
      const videoElement = this.$refs.videoElement;

      // Detener la vista previa de la cámara y liberar el recurso
      videoElement.pause();
      videoElement.srcObject = null;

      this.videoStream.getTracks().forEach(track => track.stop());
    }, async getPhoto() {
      const image = await Camera.getPhoto({
        quality: 90,
   
        allowEditing: false,
        resultType: 'base64'
      });

      // Aquí puedes realizar cualquier acción con la foto capturada, como guardarla o mostrarla en la vista
      console.log(image.base64String);
    }
  },
  beforeUnmount() {
    // Asegurarse de detener la cámara y liberar el recurso al salir de la vista
    this.stopCamera();
  }
};
</script>