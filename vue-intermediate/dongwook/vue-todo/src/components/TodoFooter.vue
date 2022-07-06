<template>
  <div>
      <span v-on:click="clearTodo">
          clear all
      </span>
  </div>
</template>

<script>
export default {
    clearTodo: function() {
       this.$emit('clearAll');
    }
}
</script>

<style scoped>
</style>