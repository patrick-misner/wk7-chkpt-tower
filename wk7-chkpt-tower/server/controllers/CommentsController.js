import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService";
import BaseController from "../utils/BaseController";


export class CommentsController extends BaseController {

  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .delete('/:id', this.delete)
      .post('', this.create)
  }

  async create(req, res, next){
    try {
      req.body.creatorId = req.userInfo.id
      const comment = await commentsService.create(req.body)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }


  async delete(req, res, next){
    try {
      const message = await commentsService.delete(req.params.id, req.userInfo.id)
      res.send(message)
    } catch (error) {
      next(error)
    }
  }
}