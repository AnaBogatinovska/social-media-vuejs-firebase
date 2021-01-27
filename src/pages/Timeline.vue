<template>
  <div>YOuho</div>
</template>

<script>
import { firebaseAuth } from "boot/firebase";
export default {
  name: "Timeline",
  mounted() {
    firebaseAuth.onAuthStateChanged((user) => {
      if(!user) {
          this.$router.push({ name: 'Login' })
      }
    });
  },
};
</script>

<style>
</style>