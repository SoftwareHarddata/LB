FROM openjdk:15

MAINTAINER 2bbetter <yan.perez@2bbetter.de>

ADD backend/target/2bbetter.jar app.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.datasource.url=$CLEARDB_DATABASE_URL -jar /app.jar"]

