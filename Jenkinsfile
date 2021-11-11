node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com/', 'dockerHub') {

        def customImage = docker.build("forever338/cicd-pipeline")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}