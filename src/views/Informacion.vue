<template>
  <ion-page>

    <div class="Nombre">

      <ion-item>
        <ion-title class="ion-text-center">Informacion</ion-title>

      </ion-item>
    </div>


    <div class="Nombre">

      <ion-item>
        <p>{{ nombre }}</p>

      </ion-item>
    </div>

    <div class="diseñoimg">

      <ion-item>
        <img :src="FotoUrl" alt="Foto de perfil">

      </ion-item>
    </div>

    <ion-button shape="round" @click="GuardarInfo">Guardar Informacion</ion-button>


  </ion-page>
</template>



<script>
// ...
import { onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import 'firebase/database'; 
export default {

  name: 'Informacion',
  created() {
    this.checkAuthState();
  },
  data() {
    return {
      nombre: '',
      FotoUrl: ''
    };
  },
  methods: {

    checkAuthState() {
      const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        if (user && !this.isSignInCompleted) { // Verificar si el inicio de sesión ya se ha realizado
          const displayName = user.displayName;
          console.log('informacion de usuario :', displayName);
          this.nombre = displayName;
          this.FotoUrl = user.photoURL;



        } else {
          this.isSignInCompleted = false;
        }
      });
    },
    GuardarInfo() {
      const numeroAleatorio = Math.floor(Math.random() * 100) + 1;


      console.log(numeroAleatorio);

      // Obtener una referencia a la ubicación de los datos en Realtime Database
      const databaseRef = firebase.database().ref('Nombres');

      // Leer los datos una vez
      databaseRef.once('value')
        .then((snapshot) => {
          // Declarar un arreglo para almacenar los IDs
          const ids = [];

          // Iterar sobre cada elemento de la instantánea de datos
          snapshot.forEach((childSnapshot) => {
            // Obtener el ID del elemento y agregarlo al arreglo
            const id = childSnapshot.key;
            ids.push(id);
          });

          console.log(ids);  // Mostrar el arreglo de IDs
        })
        .catch((error) => {
          console.log(error);
        });


    }

  },
}


//<img :src="user.photoURL" alt="Foto de perfil">
  //    <p>{{ user.displayName }}</p>
</script>