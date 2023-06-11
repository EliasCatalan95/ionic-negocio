<template>
    
    <ion-page>

        <ion-header :translucent="false">
            <ion-toolbar>
                <ion-title class="ion-text-center">Login</ion-title>
            </ion-toolbar>
        </ion-header>


       
        <div class="Nombre">

            <ion-item>
                <ion-title class="ion-text-center">Cafeteria Cafe en la Nuve</ion-title>

            </ion-item>
        </div>
        <div class="container">

            <ion-item>
                <img class="centrar-imagen" src="../cafe-americano.png" width="300" height="300" alt="Imagen Cafe">

            </ion-item>
        </div>

        <ion-button class="google-login-button" @click='iniciarSesionConGoogle'>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Icon"
                class="google-icon">
            Iniciar sesión con Google

        </ion-button>



    </ion-page>
</template>

<style scoped>
 
.google-login-button {
    --background: #fff;
    --color: #444;
    display: flex;
    align-items: center;
    justify-content: center;
}

.google-icon {
    width: 60px;
    height: 40px;
    margin-right: 8px;
   
}
</style>



<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
   
}

.Nombre {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  
    -webkit-text-fill-color: white;


}

</style>
  
<script >
import { IonPage, IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
export default {
    name: 'HomePage',
    created() {
        this.checkAuthState();
    },
    components: { IonPage, IonButton, IonHeader, IonToolbar, IonTitle, IonContent },
    // Lógica y métodos de la vista aquí

    data() {
        return {
            isSignInCompleted: false // Variable de estado para verificar si el inicio de sesión ya se ha realizado
        };
    },
    methods: {
        iniciarSesionConGoogle() {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();

            signInWithPopup(auth, provider)
                .then((result) => {
                    const displayName = result.user.displayName;
                    console.log('Nombre de usuario:', displayName);
                    
      
                

              this.$router.push('/Pestañas/Informacion');
                    this.isSignInCompleted = true; // Establecer la variable de estado como verdadera
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        checkAuthState() {
            const auth = getAuth();

            onAuthStateChanged(auth, (user) => {
                if (user && !this.isSignInCompleted) { // Verificar si el inicio de sesión ya se ha realizado
                    const displayName = user.displayName;
                    console.log('Nombre de usuario:', displayName);
              this.$router.push('/Pestañas/Informacion');
            
         
            
            
                } else {
                    this.isSignInCompleted = false;
                }
            });
        }
    },
}
</script>
<style scoped></style>