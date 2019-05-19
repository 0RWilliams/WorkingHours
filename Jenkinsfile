pipeline {
  agent any
  stages {
    stage('Testing') {
      steps {
        sh 'echo "testing goes here!"'
      }
    }
    stage('Ionic Build') {
      steps {
        sh 'npm install'
        sh 'ionic build'
      }
    }
  }
}