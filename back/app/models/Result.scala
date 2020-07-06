package models

import anorm.{RowParser, SqlParser, _}
import play.api.libs.json.Json

case class Result(
    value: String,
    number: Int,
    avgAge: Double
)

object Result {
  implicit val format = Json.format[Result]

  val simpleParser: RowParser[Result] = (
    SqlParser.get[String]("field") ~
      SqlParser.get[Int]("count") ~
      SqlParser.get[Double]("avg")
  ) map {
    case value ~ count ~ avg =>
      Result(
        value,
        count,
        Math.floor(avg)
      )
  }
}
