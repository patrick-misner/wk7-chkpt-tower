<template>
  <div class="row bg-secondary">
    <div class="col-12 p-3">
      <div
        class="row wrapper rounded"
        :style="`background-image: linear-gradient( rgba(0, 0, 0, 1.5), rgba(0, 0, 0, 0.5) ), url('${event.coverImg}'); background-size: cover; overflow: hidden;`"
      >
        <div class="col-md-5">
          <div><img :src="event.coverImg" class="img-fluid p-4 cover-img" alt="" /></div>
        </div>
        <div class="col-md-7 text-light text-shadow">
          <div
            class="
              pt-3
              d-flex
              text-shadow
              align-items-center
              justify-content-between
            "
          >
            <div>
              <h3>{{ event.name }}</h3>
            </div>
            <div>
              <h5>{{ event.startDate }}</h5>
            </div>
          </div>
          <div
            class="
              d-flex
              text-shadow
              align-items-center
              justify-content-between
            "
          >
            <div>
              <span
                ><b>Location: {{ event.location }}</b></span
              >
            </div>
            <div>
              <span
                ><b>{{ event.startTime }}</b></span
              >
            </div>
          </div>

          <div class="pt-3">
            <p>
              <b>Description: {{ event.description }}</b>
            </p>
          </div>

          <div v-if="!event.isCanceled" class="d-flex justify-content-between">
            <span
              ><b>Spots left: {{ event.capacity }}</b></span
            >
            <button
              @click="getTicket"
              :disabled="hasTicket"
              type="button"
              class="btn btn-success"
            >
              Attend
            </button>
          </div>

          <div
            v-if="event.isCanceled"
            class="d-flex justify-content-center bg-danger"
          >
            <h3>Event is Cancelled</h3>
          </div>

                    <div
            v-if="event.capacity == 0"
            class="d-flex justify-content-center bg-danger"
          >
            <h3>Event is sold out</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="event.creatorId == account.id && event.isCanceled == false"
    class="row bg-secondary justify-content-center"
  >
    <div class="col-8 col-md-4">
      <div
        class="
          bg-dark
          text-light
          rounded
          elevation-2
          m-3
          px-2
          d-flex
          justify-content-center
        "
      >
        <button
          @click="cancelEvent"
          :disabled="event.isCanceled"
          type="button"
          class="btn btn-danger m-3"
        >
          Cancel event
        </button>
      </div>
    </div>
  </div>

  <div v-if="!event.isCanceled" class="row bg-secondary">
    <div class="col-12">
      <div class="bg-dark text-light rounded elevation-2 m-3 px-2">
        <span>Attending:</span>
        <img
          v-for="t in tickets"
          :key="t.id"
          :src="t.account.picture"
          :title="t.account.name"
          class="attend-img m-3 selectable"
          alt=""
        />
      </div>
    </div>
  </div>

  <div class="row bg-secondary justify-content-center">
    <div class="col-md-8">
      <div
        class="
          bg-dark
          text-light
          rounded
          elevation-2
          m-3
          d-flex
          flex-column
          p-3
          align-items-center
        "
      >
        <!--  comments  -->
        <div class="d-flex align-items-center w-100">
          <div class="bg-light text-dark elevation-2 rounded w-100 m-3 p-2">
            <form @submit.prevent="postComment">
              <div class="mb-3">
                <div class="text-end pb-3 text-success text-shadow">
                  Join the discussion!
                </div>
                <textarea
                  v-model="commentData.body"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Post a comment..."
                  rows="3"
                ></textarea>
              </div>
              <div class="text-end px-3">
                <button type="submit" class="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row bg-secondary">
    <div class="col-12">
      <div
        v-for="c in comments"
        :key="c.id"
        class="
          bg-dark
          text-light
          rounded
          elevation-2
          m-3
          d-flex
          flex-column
          p-3
          align-items-center
        "
      >
        <!--  comments  -->
        <div class="d-flex align-items-center w-100">
          <img :src="c.creator.picture" class="attend-img" alt="" />
          <div
            class="bg-light text-dark elevation-2 rounded w-100 m-3 p-2"
          >
            <div class="d-flex justify-content-between">
              <p>
                <b> {{ c.creator.name }}</b>
              </p>
              <i
                v-if="account.id == c.creatorId"
                @click="deleteComment(c.id)"
                class="mdi mdi-delete text-danger selectable"
              ></i>
            </div>
            <p>{{ c.body }}</p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
import { eventsService } from "../services/EventsService"
import { commentsService } from "../services/CommentsService"
import { ticketsService } from "../services/TicketsService"
export default {
  setup() {
    const route = useRoute()
    const commentData = ref({})
    watchEffect(async () => {
      try {
        if (route.name == 'EventDetails') {
          await eventsService.getEvent(route.params.id)
          await commentsService.getComments(route.params.id)
          await ticketsService.getTickets(route.params.id)
        }
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      event: computed(() => AppState.activeEvent),
      comments: computed(() => AppState.comments),
      account: computed(() => AppState.account),
      tickets: computed(() => AppState.tickets),
      hasTicket: computed(() => AppState.tickets.find(t => t.accountId == AppState.account.id)),
      commentData,
      async postComment() {
        try {
          commentData.value.eventId = route.params.id
          await commentsService.postComment(commentData.value)
          Pop.toast("Comment Submitted!", "success")
          commentData.value = {}
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async getTicket() {
        try {
          if (!AppState.account.id) {
            Pop.toast('you must be logged in to attend')
            return
          }
          const ticketData = {}
          ticketData.accountId = AppState.account.id
          ticketData.eventId = route.params.id
          await ticketsService.getTicket(ticketData)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async cancelEvent() {
        try {
          if (await Pop.confirm('Are you sure you want to cancel this event?')) {
            await eventsService.cancelEvent(AppState.activeEvent)
            Pop.toast('Event has been canceled.')
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async deleteComment(id) {
        if (await Pop.confirm('Are you sure you want to delete this comment?')) {
          await commentsService.deleteComment(id)
        }
      }

    }
  }
}
</script>

<style>
.wrapper {
  position: relative;
  height: 300px;
  max-height: 300px;
}

.event-card {
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;

  background: #656565d1;
}

.grow {
  transition: all 0.2s ease-in-out;
}

.grow:hover {
  transform: scale(1.05);
}

.attend-img {
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
}

.cover-img{
  width: 300px
}
</style>