import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TicketsService {
async getTickets(query = ''){
  const res = await api.get('api/events/' + query + '/tickets')
  logger.log('get tickets service res', res.data)
  AppState.tickets = res.data
}
async getTicket(ticketData){
  const res = await api.post('api/tickets', ticketData)
  AppState.tickets.push(res.data)
  AppState.activeEvent.capacity--
}

async getUserTickets(ticketData){
  const res = await api.get('account/tickets')
  AppState.tickets = res.data
  logger.log('getusertickets', res.data)
  AppState.tickets = AppState.tickets.filter(t => t.event.isCanceled == false)
}
async cancelTicket(ticketId){
  const res = await api.delete('api/tickets/' + ticketId)
  AppState.tickets = AppState.tickets.filter(t => t.id != ticketId)

}
}

export const ticketsService = new TicketsService()