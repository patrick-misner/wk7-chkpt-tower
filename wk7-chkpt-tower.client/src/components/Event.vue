<template>
  
    <div class="col-md-3">
    <div @click="selectEvent" class="bg-secondary elevation-2 rounded text-light m-3 p-2 wrapper selectable grow" :style="`background-image: url('${towerEvent.coverImg}'); background-size: cover; overflow: hidden;`">
      <div class="event-card">
        <div>
            <span><b>{{ towerEvent.name }}</b></span>
      </div>
            <div>
        <span><b>{{ towerEvent.location }}</b></span>
      </div>
            <div>
        <span><b>{{ towerEvent.startDate }}</b></span>
      </div>
      <div class="text-end">
        <span><b>{{ towerEvent.capacity }} spots left</b></span>
      </div>
      <div v-if="towerEvent.isCanceled" class="bg-danger text-light text-shadow text-center">
        <b>Event is Cancelled</b>
      </div>
            <div v-if="towerEvent.capacity == 0" class="bg-danger text-light text-shadow text-center">
        <b>Event is sold out</b>
      </div>
      </div>
        
      
    
      
    </div>
  </div>

</template>

<script>
import { useRouter } from "vue-router"
export default {
  props: { towerEvent: { type: Object, required: true } },
  setup(props){
    const router = useRouter()
    return {
      selectEvent() {
        router.push({ name: 'EventDetails', params: { id: props.towerEvent.id}})
      }
    }
  }
}
</script>

<style>
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
  height: 40%;
  backdrop-filter: blur(2px);
  background: #656565d1
}

.grow { 
transition: all .2s ease-in-out; 
}

.grow:hover { 
transform: scale(1.05); 
}
</style>