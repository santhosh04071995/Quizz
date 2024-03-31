<template>
 <div class="mt-4">
  <h1 class="text-white text-center">The Quizz</h1>
 <QaOne v-show="one" />
 <QaTwo v-show="two" />
 <QaThree v-show="three" />

 

 <div class="mt-2 w-50 m-auto ">
        <button v-show="mybtn" @click="myfunc()" type="button" class="btn btn-success btn-sm text-uppercase">
          next question
        </button>
</div>
 <ResultPage v-show="result" /> 
</div>
</template>

<script setup>
 import QaOne from './components/QaOne.vue'
 import QaTwo from './components/QaTwo.vue'
 import QaThree from './components/QaThree.vue'
 import ResultPage from './components/ResultPage.vue';
 import {ref} from 'vue';
 

let one = ref(true);
let two = ref(false);
let three = ref(false);
let result = ref(false);
let mybtn = ref(true);

function myfunc() {
  if(one.value == true)
  {
    one.value = false;
    two.value=true
  }
  else if(two.value == true){
  two.value = false;
  three.value=true;
 } 
 else{
  three.value=false;
  mybtn.value = false;
  result.value = true;

  }
}
</script>

<style>
body{
  background-color: black;
}

</style>
