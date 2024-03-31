<template>
  <div>
    <div class="w-50 bg-secondary m-auto pt-1 pb-1">
      <div class="d-flex justify-content-between p-2">
        <p>{{question.qa}}</p>
        <p class="myscore">score {{ x }}/3</p>
      </div>
      <div class="bg-dark m-2">     <!--  mydata[i].options[i].a -->
        
        <button  :disabled="myboolean" @click="myboolean=true" class="text-end p-2 w-100">{{question.opa}}</button>
        <button  :disabled="myboolean" @click="myboolean=true" class="text-end p-2 w-100">{{question.opb}}</button>
        <button  :disabled="myboolean" @click="currect" id="ans2" class="text-end p-2 w-100">{{question.opc}}</button>
      </div>
      
    </div>
  </div>
</template>
<script setup>
import {ref,computed} from "vue";
import {useStore} from "vuex";
  
  let ownstore = useStore();
 let myboolean=ref(false)

  let x= computed(()=> {
    return ownstore.getters.mygetter;      //important
  })

  let question= computed(()=> {
    return ownstore.getters.questionTwo;
  })

function currect() {
    document.querySelector("#ans2").style.background="Chartreuse";

    ownstore.commit('mymutation')
    myboolean.value=true;
  }

</script>
 <style scoped>
h1,p,li {
  color: white;
  list-style: none;
  font-family: Montserrat;
}
@media (max-width:320px) {      
			.qa_scr{
				display:unset !important ; 
			}
      .myscore {
        display: none;
      }
		}
</style>
