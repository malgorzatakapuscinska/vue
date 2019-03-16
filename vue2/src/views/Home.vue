
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <BaseButton :loading=false />
    <BaseInput 
      v-model=textValue
      value=value
      v-bind = "$attrs"
      label="Input"
      @change="logChange()"
    />
    <p>
      {{textValue}}
    </p>
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
  },
  data: () => ({
    textValue: ''
  }),
  methods: {
    logChange() {
      console.log('change');
    },
  },
};
</script>
