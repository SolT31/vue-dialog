<template>
  <div class="confirm">
    <button @click="$emit('resolve')">Confirm</button>
    <button @click="$emit('reject')">Cancel</button>
  </div>
</template>
