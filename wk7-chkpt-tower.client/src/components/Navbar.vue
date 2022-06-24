<template>


  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto flex-column">

        <li>
          <Login />
        </li>
        <li>
             
          
          <router-link
            :to="{ name: 'Home' }"
            class="btn text-success lighten-30 selectable text-uppercase"
          >
            Home
          </router-link>
               
        </li>
        <li>

                    <button @click="createModal" class="btn text-success lighten-30 selectable text-uppercase">Create Event</button>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->

    </div>
  </nav>
          
</template>

<script>
import { Modal } from "bootstrap";
export default {
  setup() {
    return {
      createModal(){
        Modal.getOrCreateInstance(document.getElementById("event-modal")).show()
      }
    };
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
