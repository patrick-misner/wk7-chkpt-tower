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
        
        <h3>Events I am attending</h3>
          
      </div>
    </div>
  </div>
</div>


<div class="row">
 <Ticket v-for="t in tickets" :key="t.id" :ticket="t" />
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



</template>

<script>
import { computed, onMounted, watchEffect } from 'vue'
import { AppState } from '../AppState'
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { eventsService } from "../services/EventsService"
import { ticketsService } from "../services/TicketsService"
import Ticket from "../components/Ticket.vue"
export default {
    name: "Account",
    setup() {
        (async () => {
            try {
                await eventsService.getUserEvents(AppState.account.id);
                await ticketsService.getUserTickets(AppState.account.id);
            }
            catch (error) {
                logger.error(error);
                Pop.toast(error.message, "error");
            }
        });
        return {
            account: computed(() => AppState.account),
            events: computed(() => AppState.events),
            tickets: computed(() => AppState.tickets),
        };
    },
    components: { Ticket }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
