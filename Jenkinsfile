pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/rajbeer1/nextjs-first', branch: 'main')
      }
    }

    stage('build') {
      steps {
        sh 'npm i && npm run build '
      }
    }

  }
}