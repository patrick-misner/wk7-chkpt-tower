<template>
  <form @submit.prevent="createEvent">
    <h1 class="text-dark">Create Event</h1>
    <div class="col-12">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Event Name</label
        >
        <input
          v-model="towerEvent.name"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Event name..."
        />
      </div>
    </div>

    <div class="col-12">
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Event Description</label
        >
        <textarea
          v-model="towerEvent.description"
          class="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Event description..."
          rows="3"
        ></textarea>
      </div>
    </div>

    <div class="col-12">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">ImgUrl</label>
        <input
          v-model="towerEvent.coverImg"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Img Url..."
        />
      </div>
    </div>

    <div class="col-12">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Event Date</label
        >
        <input
          v-model="towerEvent.startDate"
          type="date"
          class="form-control"
          id="exampleFormControlInput1"
        />
      </div>
    </div>

    <div class="col-12">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Location</label
        >
        <input
          v-model="towerEvent.location"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
        />
      </div>
    </div>

    <div class="col-12">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Capacity</label
        >
        <input
          v-model="towerEvent.capacity"
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
        />
      </div>
    </div>

    <div class="col-12">
      <div class="mb-3">
        <select
          v-model="towerEvent.type"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Select Type</option>
          <option value="concert">Concert</option>
          <option value="convention">Convention</option>
          <option value="sport">Sport</option>
          <option value="digital">Digital</option>
        </select>
      </div>
    </div>

    <div class="col-12">
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="submit" class="btn btn-primary">Create</button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { eventsService } from "../services/EventsService";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";
import { AppState } from "../AppState";
export default {
  setup(props) {
    const towerEvent = ref({});
    const router = useRouter()
    return {
      towerEvent,
      async createEvent() {
        try {
          await eventsService.createEvent(towerEvent.value)
          Modal.getOrCreateInstance(document.getElementById("event-modal")).hide()
          router.push({ name: 'EventDetails', params: { id: AppState.activeEvent.id } })
          Pop.toast("event successfully created!", 'success')
          towerEvent.value = {}
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }

}
</script>

<style>
</style>