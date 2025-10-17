pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Murugan6892/fullstack.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy Containers') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful! Frontend on port 80, Backend on port 5000.'
        }
        failure {
            echo '❌ Deployment failed. Check Jenkins logs.'
        }
    }
}
