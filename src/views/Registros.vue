<template>
        
  <div >
    <ul>
      <li v-for="item in data" :key="item.id">
        (Nombre:  {{ item.nombre }}) (ID: {{ item.id }})
      </li>
    </ul>
  </div>

</template>


<script>
import { ref, onMounted } from 'vue';
import { getDatabase, ref as databaseRef, onValue } from 'firebase/database';

export default {
  setup() {
    const database = getDatabase();
    const data = ref([]);

    onMounted(() => {
      // Obtener los datos de Realtime Database
      const dbRef = databaseRef(database, 'Nombres');
      onValue(dbRef, (snapshot) => {
        const dataSnapshot = snapshot.val();
        const dataArray = [];
        for (let key in dataSnapshot) {
          const item = {
            id: key,
            nombre: dataSnapshot[key].nombre,
           
          };
          dataArray.push(item);
        }
        data.value = dataArray;
      });
    });

    return {
      data
    };
  }
};
</script>