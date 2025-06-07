


# Development docker setup.

## Build docker image 
    docker build -t node-production-app:dev -f docker/development/Dockerfile .

##  Run docker for development.
    docker run --rm -it -v ${PWD}:/usr/src/backend-app -v /usr/src/backend-app/node_module -p 5000:5000 node-production-app:dev


    docker compose -f docker-compose.dev.yml up --build