package controllers

import javax.inject._
import play.api.libs.json.Json
import play.api.mvc._
import services.UserService

import scala.concurrent.ExecutionContext


@Singleton
class UserController @Inject()(val controllerComponents: ControllerComponents, val userService: UserService)
  (implicit val ec: ExecutionContext) extends BaseController {

  def get(field: String): Action[AnyContent] = Action.async { _ =>
    userService.get(field).map(result => Ok(Json.toJson(result)  ))
  }
}
