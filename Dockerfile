FROM openjdk:15

MAINTAINER 2bbetter <yan.perez@2bbetter.de>

ADD backend/target/2bbetter.jar app.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.datasource.url=$AWS_DATABASE_URL -Dspring.datasource.username=$AWS_DATABASE_USERNAME -Dspring.datasource.password=$AWS_DATABASE_PASSWORD -jar /app.jar"]

