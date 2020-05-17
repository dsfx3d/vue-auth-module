<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="foo">Foo</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    foo() {
      console.log('auth', this.$auth)
      console.log('auth', this.$auth.scheme)
    }
  }
}
</script>
