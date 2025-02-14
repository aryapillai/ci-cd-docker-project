pipeline {
    agent any

    environment {
        IMAGE_NAME = "myapp" // Docker image name
        CONTAINER_PORT = "8081"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', 
                    credentialsId: 'gitnewid', 
                    url: 'https://github.com/aryapillai/ci-cd-docker-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Run Docker Container') {
            steps {
                sh "docker stop ${IMAGE_NAME} || true && docker rm ${IMAGE_NAME} || true"
                sh "docker run -d -p 8081:8081 --name ${IMAGE_NAME} ${IMAGE_NAME}"
            }
        }
    }
}

