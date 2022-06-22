import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class EventsService{
  async getAll(query = {}){
    let events = await dbContext.Events.find(query)
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
    const original = await dbContext.Events.findById(eventId)
    .populate('creator', 'name picture')
    if (original.creatorId.toString() != update.creatorId) {
      throw new BadRequest("You do not have permission to edit this Event")
    }
    original.name = update.name || original.name
    original.description = update.description || original.description
    original.coverImg = update.coverImg || original.coverImg
    original.location = update.location || original.location
    original.capacity = update.capacity || original.capacity
    original.startDate = update.startDate || original.startDate
    original.isCanceled = update.isCanceled || original.isCanceled
    original.type = update.type || original.type
    original.save()
    return update
  }

  async delete(eventId, userId){
    const towerEvent = dbContext.Events.findById(eventId)
    if (towerEvent.creatorId.toString() != userId){
      throw new BadRequest("You don't have permission to delete this event")
    }
    await towerEvent.remove()
    return `deleted event ${towerEvent.name}`
  }
  }


export const eventsService = new EventsService()