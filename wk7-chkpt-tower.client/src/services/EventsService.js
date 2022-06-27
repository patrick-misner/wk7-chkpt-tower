import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class EventsService {

  async getEvents(query = ''){
    logger.log('hit the service')
    const res = await api.get('api/events' + query)
    logger.log('get events', res.data)
    AppState.events = res.data
  }

  async getUserEvents(accountId){
    const res = await api.get('api/events/')
    AppState.events = res.data
    AppState.events = AppState.events.filter(e => e.creatorId == accountId)
    logger.log('get user events service', res.data)
  }

  async getEvent(eventId){
    const res = await api.get('api/events/' + eventId )
    logger.log('get event service', res.data)
    AppState.activeEvent = res.data
  }

  async cancelEvent(towerEvent){
    towerEvent.isCanceled = true
    const res = await api.delete('api/events/' + towerEvent.id)
    logger.log('is cancelled?', res.data)
  }

  async createEvent(towerEvent){
    
    const res = await api.post('api/events', towerEvent)
    logger.log('create even in service', res.data)
    AppState.activeEvent = res.data
  }
}

export const eventsService = new EventsService()