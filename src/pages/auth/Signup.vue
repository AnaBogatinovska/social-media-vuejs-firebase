<template>
  <div
    class="q-px-md fixed full-height full-width row items-center justify-center"
  >
    <div class="col-12">
      <div class="text-center q-mb-md">
        <img src="~/assets/logo2.png" alt="" />
      </div>

      <q-form @submit="onSubmit">
        <!-- <q-input
          outlined
          label="username"
          required
          v-model="email"
          class="q-pb-md"
        /> -->
        <q-input
          outlined
          type="email"
          label="email address"
          required
          v-model="email"
          class="q-pb-md"
        />
        <q-input
          outlined
          type="text"
          label="password"
          required
          v-model="password"
          class="q-pb-md"
        />

        <q-btn
          flat
          class="bg-primary q-mt-md full-width q-py-xs"
          color="white"
          label="signup"
          type="submit"
          :disable="!email || !password"
        />
      </q-form>
    </div>

    <footer class="fixed-bottom text-dark bg-transparent">
      <div class="border-top text-center q-py-sm">
        Already have an account?
        <q-btn
          flat
          dense
          no-caps
          label="Log in"
          color="primary"
          :to="{ name: 'Login' }"
        />
      </div>
    </footer>
  </div>
</template>

<script>
import { firebaseAuth, firebaseDb } from "../../boot/firebase";

export default {
  name: "Login",
  data() {
    return {
      // username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      try {
        const cred = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        console.log(cred);
        this.$router.push({ name: 'Timeline' })
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
.border-top {
  border-top: 1px solid $dark;
}
</style>
