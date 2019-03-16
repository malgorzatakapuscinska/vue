
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <BaseButton :loading=false />
    <BaseInput 
      :value=value
      :rows=rows
      v-bind = "$attrs"
    
    />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseInput from "@/components/BaseInput"
import BaseButton from "@/components/BaseButton"
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    BaseButton,
    BaseInput
  }
};
</script>
