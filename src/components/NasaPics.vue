<template>
  <div class="nasa-pics border border-light">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'NasaPics',
  setup () {
    const state = reactive({
      photos: computed(() => AppState.photos)

    })
    return {
      state
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
