#define docker image
FROM openjdk:17
LABEL maintainer="haritha"
ADD target/BookStore2-0.0.1-SNAPSHOT.jar BookStore2.jar
ENTRYPOINT ["java","-jar","BookStore2.jar"]
