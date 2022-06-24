<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>

  <div class="row">
  <div class="col-md-12">
    <div class="bg-secondary elevation-2 rounded text-light m-3">
      <div class="p-3 d-flex justify-content-around">
        
        <h3>My Events</h3>
          
      </div>
    </div>
  </div>
</div>

<div class="row">
  <Event v-for="e in events" :key="e.id" :towerEvent='e'/>
</div>

  <div class="row">
  <div class="col-md-12">
    <div class="bg-secondary elevation-2 rounded text-light m-3">
      <div class="p-3 d-flex justify-content-around">
        
        <h3>Attending Events</h3>
          
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { computed, onMounted, watchEffect } from 'vue'
import { AppState } from '../AppState'
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { eventsService } from "../services/EventsService"
export default {
  name: 'Account',
  setup() {
    watchEffect(async () => {
      try {
        await eventsService.getUserEvents()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      account: computed(() => AppState.account),
      events: computed(()=> AppState.events)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
