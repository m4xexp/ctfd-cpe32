// node {
//     checkout scm

//     docker.withRegistry('https://registry.hub.docker.com/', 'dockerHub') {

//         def customImage = docker.build("forever338/cicd-pipeline")

//         /* Push the container to the custom Registry */
//         customImage.push()
//     }
// }


// pipeline {
//     agent none
//     stages {
//         stage('Clone SCM for sonar') {
//             steps {
//                 // Clean before build
//                 cleanWs()
//                 git branch: 'main',
//                 credentialsId: 'gitlabID',
//                 url: 'https://gitlab.com/prakasit.56/testting.git'
//             }
//         }
//         stage('SonarQube analysis') {
//             steps {
                
//                     script {
//                         def scannerHome = tool 'SonarScanner4.4';
//                         withSonarQubeEnv('My SonarQube Server') { // If you have configured more than one global server connection, you can specify its name
//                             sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=reactapp -Dsonar.projectName=reactapp"
//                         }
//                     }
                
//             }
//         }
//         stage('Build') {
//             steps {
                
//                     script {
//                         checkout scm
//                         docker.withRegistry('https://registry.hub.docker.com/', 'dockerHub') {
//                             def customImage = docker.build("forever338/cicd-pipeline")
//                             /* Push the container to the custom Registry */
//                             customImage.push()
//                         }
//                     }
                
//             } 
//         }
//     }
// }

node {
  stage('SCM') {
    cleanWs()
    git branch: 'main',
    credentialsId: 'gitlabID',
    url: 'https://gitlab.com/prakasit.56/testting.git'
  }
  stage('SonarQube analysis') {
    def scannerHome = tool 'SonarScanner4.4';
    withSonarQubeEnv('My SonarQube Server') { // If you have configured more than one global server connection, you can specify its name
      def sonarOptions = []
      sonarOptions.add("-Dsonar.projectKey=SonarQube") // SET PROJECT KEY
      sonarOptions.add("-Dsonar.projectName=react-testing-cicd") // SET PROJECT NAME
      sonarOptions.add("-Dsonar.host.url=localhost:9000")
      sonarOptions.add("-Dsonar.login=admin")
      sonarOptions.add("-Dsonar.password=36251498756")
      sonarOptions = sonarOptions.join(' ')
      sh "${scannerHome}/bin/sonar-scanner  ${sonarOptions}"
    }
  }
}