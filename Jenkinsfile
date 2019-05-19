pipeline {
  agent any
  stages {
    stage('Pull Project') {
      steps {
        git(branch: 'master', url: 'https://github.com/Misterqu/WorkingHours')
      }
    }
    stage('Testing') {
      steps {
        sh 'echo "testing goes here!"'
      }
    }
    stage('Ionic Build') {
      steps {
        sh 'ionic build'
      }
    }
  }
}