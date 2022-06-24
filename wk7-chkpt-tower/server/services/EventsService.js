import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class EventsService{
  async getAll(query = {}){
    let events = await dbContext.Events.find(query).sort({ startDate: 1 })
    .populate('creator', 'name picture')
    return events
  }
  async getById(eventId){
    let towerEvent = await dbContext.Events.findById(eventId)
    .populate('creator', 'name picture')
    return towerEvent
  }
  async create(eventData){
    let towerEvent = await dbContext.Events.create(eventData)
    await towerEvent.populate('creator', 'name picture')
    return towerEvent
    }
  async edit(eventId, update){
    const original = await dbContext.Events.findById(eventId).populate('creator', 'name picture')
    if (original.creatorId.toString() != update.creatorId) {
      throw new BadRequest("You do not have permission to edit this Event")
    }
    if (original.isCanceled){
      throw new BadRequest("You cannot edit an event that has been cancelled.")
    }
    original.name = update.name || original.name
    original.description = update.description || original.description
    original.coverImg = update.coverImg || original.coverImg
    original.location = update.location || original.location
    original.capacity = update.capacity || original.capacity
    original.startDate = update.startDate || original.startDate
    original.type = update.type || original.type
    original.save()
    return update
  }

  async delete(eventId, userId){
    const towerEvent = await  dbContext.Events.findById(eventId)
    if (towerEvent.creatorId.toString() != userId){
      throw new BadRequest("You don't have permission to delete this event")
    }
    towerEvent.isCanceled = true
    await towerEvent.save()
    // return `deleted event ${towerEvent.name}`
  }
  }


export const eventsService = new EventsService()