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
}
}

export const ticketsService = new TicketsService()