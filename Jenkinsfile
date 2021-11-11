// node {
//     checkout scm

//     docker.withRegistry('https://registry.hub.docker.com/', 'dockerHub') {

//         def customImage = docker.build("forever338/cicd-pipeline")

//         /* Push the container to the custom Registry */
//         customImage.push()
//     }
// }


pipeline {
    stages {
        stage('SCM') {
                git 'https://gitlab.com/prakasit.56/testting.git'
        }
        stage('Build') {

            checkout scm
            docker.withRegistry('https://registry.hub.docker.com/', 'dockerHub') {
                def customImage = docker.build("forever338/cicd-pipeline")
                /* Push the container to the custom Registry */
                customImage.push()
            }
        }
        stage('SonarQube analysis') {
            def scannerHome = tool 'SonarScanner 4.0';
            withSonarQubeEnv('My SonarQube Server') { // If you have configured more than one global server connection, you can specify its name

            }
        }
    }
}
