import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"
import { eventsService } from "./EventsService"

class TicketsService {
  async getAll(query = {}){
    let tickets = await dbContext.Tickets.find(query).populate('account', 'name picture').populate('event')
    return tickets
  }


  async create(ticketData){
    
    const towerEvent = await eventsService.getById(ticketData.eventId)
    if (towerEvent.capacity == 0){
      throw new BadRequest("Tickets are sold out")
    }
    let ticket = await dbContext.Tickets.create(ticketData)
    await ticket.populate('account', 'name picture')
    await ticket.populate('event')
    towerEvent.capacity = towerEvent.capacity -1
    await towerEvent.save()
    return ticket
    }

  async delete(ticketId, userId){
    const ticket = await dbContext.Tickets.findById(ticketId)
    if (ticket.accountId.toString() != userId){
      throw new BadRequest("You don't have permission to delete this ticket")
    }
    await ticket.remove()
    const towerEvent = await eventsService.getById(ticket.eventId)
    towerEvent.capacity = towerEvent.capacity + 1
    await towerEvent.save()
    return 'ticket deleted'
  }
  }


export const ticketsService = new TicketsService()