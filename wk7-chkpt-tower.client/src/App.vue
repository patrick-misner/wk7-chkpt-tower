<template>
  <header>
    
  </header>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 order-md-1 bg-dark">
           <Navbar />
           <!-- <Login /> -->
        </div>
        <div class="col-md-10 order-md-0 bg-dark vh-100">
          <router-view />
        </div>
      </div>
    </div>
    
  </main>

  <Modal id="event-modal">
    <template #header> Create Event </template>
    <template #body>
      <EventForm />
    </template>
  </Modal>

  <footer>

  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import { Modal } from "bootstrap"
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
