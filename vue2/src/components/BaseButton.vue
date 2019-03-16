<template>
    <label>
        <button :disabled="loading">
            {{ loading ? "loading...": "done" }}
        </button>
    </label>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    loading: Boolean
  }
};
</script>
