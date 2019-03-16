<template>
    <label>
        {{label}}
        <input
            :value="value"
            v-bind="$attrs"
            @input="customInput"
            v-on="listeners"
        />
    </label>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
        type: String,
        default: 'Hello'
    },
    label: {
        type: String,
        default: 'Default label'
    }
  },
    computed: {
    //5/ 7. To make sure that every listener works (e.g. @click, @focus),
    // we will bind all listeners except input listener
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
  },
  mounted() {
    //1/ 6. We will log our $attrs to check if it works
    console.log('$attrs:', this.$attrs);
  },
  methods: {
    //3/ 8. Input is explicitly defined to properly update value binded as v-model
    customInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
