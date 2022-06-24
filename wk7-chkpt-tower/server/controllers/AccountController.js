import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { commentsService } from "../services/CommentsService"
import { eventsService } from "../services/EventsService"
import { ticketsService } from "../services/TicketsService"
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/tickets', this.getTickets)
  }
async getTickets(req, res, next){
  try {
    const tickets = await ticketsService.getAll({ accountId: req.userInfo.id })
    return res.send(tickets)
  } catch (error) {
    next(error)
  }
}
  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

}
