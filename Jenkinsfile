String cron_string = ""
if (BRANCH_NAME == "master")
    cron_string = "0 15 * * *"

def COLOR_MAP = [
    'SUCCESS': 'good',
    'FAILURE': 'danger',
]

def build_dev_guide = false
def build_dev_atc = false
def build_test_guide = false
def build_test_atc = false

pipeline {
    agent {
        node {
            label 'docker'
        }
    }
    triggers { cron(cron_string) }
    stages {

        // stage('Run Dev Guide') {
        //     steps {
        //         catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
        //             sh "TARGET_ENVIRONMENT=dev TARGET_APP=guide bash bootstrapper.sh"
        //             slackSend color: COLOR_MAP[currentBuild.currentResult], message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n Jenkins job at: ${env.BUILD_URL}\n *ENV:* Dev \n *MS:* Guide \nQA Automation Cypress passed !!!"
        //             script {
        //                 build_dev_guide = true
        //             }
        //         }
        //     }
        // }
        // stage ('Failed notification Dev Guide') {
        //     when {
        //         expression { build_dev_guide == false }
        //     }
        //     steps {
        //         slackSend color: COLOR_MAP[currentBuild.currentResult], message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n Jenkins job at: ${env.BUILD_URL}\n *ENV:* Dev \n *MS:* Guide \nQA Automation Cypress failed !!!"
        //     }
        // }
        stage('Run Dev ATC') {
            steps {
                catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                    sh "TARGET_ENVIRONMENT=dev TARGET_APP=atc bash bootstrapper.sh"
                    slackSend color: COLOR_MAP["SUCCESS"], message: "*SUCCESS:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n Jenkins job at: ${env.BUILD_URL}\n *ENV:* Dev \n *MS:* Atc \nQA Automation Cypress passed !!!"
                    script {
                        build_dev_atc = true
                    }
                }
            }
        }
        stage ('Failed notification Dev ATC') {
            when {
                expression { build_dev_atc == false }
            }
            steps {
                slackSend color: COLOR_MAP["FAILURE"], message: "*FAILURE:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n Jenkins job at: ${env.BUILD_URL}\n *ENV:* Dev \n *MS:* ATC \nQA Automation Cypress failed !!!"
            }
        }
        stage('Run Test Guide') {
            steps {
                catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                    sh "TARGET_ENVIRONMENT=test TARGET_APP=guide bash bootstrapper.sh"
                    slackSend color: COLOR_MAP[currentBuild.currentResult], message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n Jenkins job at: ${env.BUILD_URL}\n *ENV:* Test \n *MS:* Guide \nQA Automation Cypress passed !!!"
                    script {
                        build_test_guide = true
                    }
                }
            }
        }
        stage ('Failed notification Test Guide') {
            when {
                expression { build_test_guide == false }
            }
            steps {
                slackSend color: COLOR_MAP[currentBuild.currentResult], message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n Jenkins job at: ${env.BUILD_URL}\n *ENV:* Test \n *MS:* Guide \nQA Automation Cypress failed !!!"
            }
        }
        stage('Run Test ATC') {
            steps {
                catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                    sh "TARGET_ENVIRONMENT=test TARGET_APP=atc bash bootstrapper.sh"
                    slackSend color: COLOR_MAP["SUCCESS"], message: "*SUCCESS:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n Jenkins job at: ${env.BUILD_URL}\n *ENV:* Test \n *MS:* ATC \nQA Automation Cypress passed !!!"
                    script {
                        build_test_atc = true
                    }
                }
            }
        }
        stage ('Failed notification Test Atc') {
            when {
                expression { build_test_atc == false }
            }
            steps {
                slackSend color: COLOR_MAP["FAILURE"], message: "*FAILURE:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n Jenkins job at: ${env.BUILD_URL}\n *ENV:* Test \n *MS:* ATC \nQA Automation Cypress failed !!!"
            }
        }
    }
}
