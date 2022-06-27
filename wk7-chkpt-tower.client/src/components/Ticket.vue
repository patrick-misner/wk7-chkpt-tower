<template>
  
    <div class="col-md-3">
    <div @click="selectEvent" class="bg-secondary elevation-2 rounded text-light m-3 p-2 wrapper selectable grow" :style="`background-image: url('${ticket.event.coverImg}'); background-size: cover; overflow: hidden;`">
      <div class="event-card">
        <div>
            <span>{{ ticket.event.name }}</span>
      </div>
            <div>
        <span>{{ ticket.event.location }}</span>
      </div>
            <div>
        <span>{{ ticket.event.startDate }}</span>
      </div>
      <div class="text-end">
        <span>{{ ticket.event.capacity }} spots left</span>
      </div>

      <div v-if="ticket.event.isCanceled" class="bg-danger text-light">
        Event is Cancelled
      </div>
      </div>
        
      
    
      
    </div>
          <div v-if="!ticket.event.isCanceled" class="d-flex justify-content-center">
        <button @click="cancelTicket" type="button" class="btn btn-danger">Cancel Ticket</button>
      </div>
  </div>

</template>

<script>
import { useRouter } from "vue-router"
import { ticketsService } from "../services/TicketsService"
export default {
  props: { ticket: { type: Object, required: true } },
  setup(props){
    const router = useRouter()
    return {
      selectEvent() {
        router.push({ name: 'EventDetails', params: { id: props.ticket.event.id}})
      },
      async cancelTicket() {
        await ticketsService.cancelTicket(props.ticket.id)
      }
    }
  }
}
</script>

<style>
.wrapper {
  position: relative;
  height: 275px;
  max-height: 275px;
}

.event-card{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;

  background: #656565d1
}

.grow { 
transition: all .2s ease-in-out; 
}

.grow:hover { 
transform: scale(1.05); 
}
</style>