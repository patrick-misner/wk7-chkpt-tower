<template>


<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <slot name="header"></slot>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
           <slot name="body"></slot> 
          </div>
          
        </div>
      </div>
     
    </div>
  </div>
</div>


  
</template>

<script>
import { Modal } from "bootstrap"
export default {

}
</script>

<style>

</style>


