<template>
<div class="row">
  <div class="col-md-12">
    <div class="bg-secondary elevation-2 rounded text-light m-3">
      <div class="p-3 d-flex justify-content-between">
        
        <h5>All</h5>
        <h5>Expos</h5>
        <h5>Conventions</h5>
        <h5>Exhibits</h5>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <Event v-for="e in events" :key="e.id" :towerEvent='e'/>
</div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core"
import { eventsService } from '../services/EventsService'
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
export default {
  name: 'Home',
  setup() {
    onMounted(async () => {
      try {
        await eventsService.getEvents()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
      
    })
    return {
      events: computed(() => AppState.events)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.wrapper {
  position: relative;
  height: 250px;
  max-height: 250px;
}

.event-card{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;

  background: #656565d1
}
</style>
