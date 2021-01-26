<template>
  <div class="q-px-md fixed full-height full-width row items-center justify-center">
    <div class="col-12">
    <div class="text-center q-mb-md">
      <img src="~/assets/logo2.png" alt="" />
    </div>

    <q-form @submit="onSubmit">
      <q-input outlined label="email address or username" required v-model="email" class="q-pb-md"/>
      <q-input outlined label="password" required v-model="password" class="q-pb-md"/>

      <q-btn
        flat
        class="bg-primary q-mt-md full-width"
        color="white"
        label="login"
        type="submit"
        :disable="!email || !password"
      />
    </q-form>
    </div>

    <q-footer class="text-dark bg-transparent">
      <div class="border-top text-center q-py-sm">
        Don't have an account?
        <q-btn flat dense no-caps label="Sign up" color="primary" />
      </div>
    </q-footer>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style lang="scss">
.border-top {
  border-top: 1px solid $dark;
}
</style>
