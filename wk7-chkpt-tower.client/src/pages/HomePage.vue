<template>
  <div class="row">
    <div class="col-md-12">
      <div class="bg-secondary elevation-2 rounded text-light m-3">
        <div class="p-3 d-flex justify-content-around">
          <h5 @click="filterEvent = ''" class="selectable">All</h5>
          <h5 @click="filterEvent = 'concert'" class="selectable">Concerts</h5>
          <h5 @click="filterEvent = 'convention'" class="selectable">
            Conventions
          </h5>
          <h5 @click="filterEvent = 'sport'" class="selectable">Sports</h5>
          <h5 @click="filterEvent = 'digital'" class="selectable">Digital</h5>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <Event v-for="e in events" :key="e.id" :towerEvent="e" />
  </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core"
import { eventsService } from '../services/EventsService'
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
export default {
  name: 'Home',
  setup() {
    const filterEvent = ref('')
    onMounted(async () => {
      try {
        await eventsService.getEvents()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }

    })
    return {
      filterEvent,
      events: computed(() => AppState.events.filter(e => filterEvent.value ? e.type == filterEvent.value : true))

    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
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

.event-card {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;

  background: #656565d1;
}
</style>
