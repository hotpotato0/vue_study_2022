<template>
  <div>
      <span>
          clear all
      </span>
  </div>
</template>

<script>
export default {
    clearTodo: function() {
        localStorage.clear();
    }
}
</script>

<style scoped>
</style>