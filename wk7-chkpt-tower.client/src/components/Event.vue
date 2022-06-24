<template>
  
    <div class="col-md-3">
    <div @click="selectEvent" class="bg-secondary elevation-2 rounded text-light m-3 p-2 wrapper selectable grow" :style="`background-image: url('${towerEvent.coverImg}'); background-size: cover; overflow: hidden;`">
      <div class="event-card">
        <div>
            <span>{{ towerEvent.name }}</span>
      </div>
            <div>
        <span>{{ towerEvent.location }}</span>
      </div>
            <div>
        <span>{{ towerEvent.startDate }}</span>
      </div>
      <div class="text-end">
        <span>{{ towerEvent.capacity }} spots left</span>
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