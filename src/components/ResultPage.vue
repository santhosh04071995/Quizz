<template>
  <div class="w-50 m-auto text-center mt-3">
    <p>You have funished the quizz!!!</p> 
    <h1>your scroe is {{result}}/3</h1>
    <p>Thank you!!!</p>
  </div>
</template>
<script setup>
import {computed} from "vue";
import {useStore} from "vuex";
let ownstore = useStore();
let result = computed(()=> {
    return ownstore.getters.mygetter;
})
  
</script>
 <style scoped>
h1,p,li {
  color: white;
  list-style: none;
  font-family: Montserrat;
}
</style>
