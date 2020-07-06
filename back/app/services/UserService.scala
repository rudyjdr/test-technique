package services

import javax.inject.Inject
import models.Result
import repositories.UserRepository

import scala.concurrent.{ExecutionContext, Future}


class UserService @Inject()(userRepository: UserRepository)(implicit ec: ExecutionContext) {

  def get(field: String): Future[Seq[Result]] =
    userRepository.get(field)
}