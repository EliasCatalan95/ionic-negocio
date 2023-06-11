<template>

      <div class="Nombre">

<ion-item>
    <ion-title class="ion-text-center">Informacion</ion-title>

</ion-item>
</div>
    
  </template>




<script>
// ...

export default {
  // ...
  computed: {
    user() {
      return user.value;
    },
  },
};

//<img :src="user.photoURL" alt="Foto de perfil">
  //    <p>{{ user.displayName }}</p>
</script>