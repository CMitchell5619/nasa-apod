<template>
  <div class="app">

    <header class="container-fluid bg-dark text-light">
      <div class="row">
        <div class="col text-center">
          <h1>SpacePicz!</h1>
        </div>
      </div>
    </header>

    <main class="container">
      <div class="row mt-2">
        <div class="col">
          <form @submit.prevent="search">
            <input type="date"  v-model="state.query" name="search-date" id="">
            <button type="submit" class="btn btn-dark ">Search</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <img src="http://placehold.it/100x100" alt="">
        </div>
      </div>
    </main>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col">

          </div>
        </div>
      </div>
    </footer>

  </div>

</template>

<script>
import { reactive } from 'vue'
import { nasaPicsService } from './services/NasaPicsService'

export default {
  name: 'App',
  setup () {
    const state = reactive({
      query: ''

    })
    return {
      state,
      async search () {
        try {
          await nasaPicsService.searchPics(state.query)
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
