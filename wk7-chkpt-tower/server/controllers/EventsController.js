import { eventsService } from "../services/EventsService";
import BaseController from "../utils/BaseController";


export class EventsController extends BaseController {

  constructor() {
    super('api/events')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next){
    
    try {
      const events = await eventsService.getAll(req.query)
      return res.send(events)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next){
    try {
      const towerEvent = await eventsService.getById(req.params.id)
      return res.send(towerEvent)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next){
    try {
      req.body.creatorId = req.userInfo.id
      const towerEvent = await eventsService.create(req.body)
      return res.send(towerEvent)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next){
    try {
      req.body.creatorId = req.userInfo.id
      const towerEvent = await eventsService.edit(req.params.id, req.body)
      return res.send(towerEvent)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next){
    try {
      const message = await eventsService.delete(req.params.id, req.userInfo.id)
    } catch (error) {
      next(error)
    }
  }
}