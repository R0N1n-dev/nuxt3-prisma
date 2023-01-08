<template>
  <div>
    <h2>Home Page</h2>
    <p v-if="!data">Loading</p>
    <div v-else>
      <ul>
        <li v-for="game in data" :key="game.id">{{game.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { data } = useFetch("/api/games");
</script>

<style scoped></style>
