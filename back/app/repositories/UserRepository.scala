package repositories

import anorm._
import javax.inject.{Inject, Singleton}
import models.Result
import play.api.db.Database

import scala.concurrent.{ExecutionContext, Future}
@Singleton
class UserRepository @Inject()(database: Database)(
    implicit ec: ExecutionContext) {

  def get(field: String): Future[Seq[Result]] = {
    Future {
      database.withConnection { implicit c =>
        SQL"""SELECT "#$field" as field, COUNT(*) as count, AVG(age) as avg FROM census_learn_sql WHERE "#$field" is not null GROUP BY "#$field" """
          .as(Result.simpleParser.*)
      }
    }
  }

}
