name := "test-api"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.7"

libraryDependencies ++= Seq(
  jdbc,
  guice,
  "org.playframework.anorm" %% "anorm" % "2.6.4",
  "org.xerial" % "sqlite-jdbc" % "3.32.3",
  "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test,
  "ai.x" %% "play-json-extensions" % "0.42.0"
)
