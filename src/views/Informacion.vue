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


    <ion-button class="google-login-button" @click='cerrarSesion'>
      <img src="../cerrar sesion icon.png" alt="Google Icon" class="logout-icon">
      Cerrar sesión
    </ion-button>
 
  </ion-page>
</template>

<style>
.google-login-button {
  --background: red;
  --color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logout-icon {
  width: 30px;
  height: 20px;
  margin-right: 30px;

}
</style>

<script>
// ...
import { onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { getDatabase, ref, set } from "firebase/database";
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

      const database = getDatabase();
const dataRef = ref(database, "Nombres");

const clave = numeroAleatorio;
const valor = this.nombre;
set(dataRef, { [clave]: valor })
  .then(() => {
    console.log("Datos guardados correctamente");
  })
  .catch((error) => {
    console.error("Error al guardar los datos:", error);
  });
    },registrar() {

      
      const datos = {
        id: this.id,
        nombre: this.nombre
      };
      const personasRef = ref(db, 'Personas');
      push(personasRef, datos)
        .then(() => {
          console.log('Registro exitoso');
        })
        .catch((error) => {
          console.error('Error al registrar:', error);
        });
    },

    cerrarSesion() {
      console.log('Boton cerrar sesion');
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // La sesión se cerró exitosamente
          this.$router.push('/HomePage');
          console.log('Sesión cerrada correctamente');
        })
        .catch((error) => {
          // Ocurrió un error al cerrar la sesión
          console.log('Error al cerrar la sesión:', error);
        });
    }


  },
}


//<img :src="user.photoURL" alt="Foto de perfil">
  //    <p>{{ user.displayName }}</p>
</script>