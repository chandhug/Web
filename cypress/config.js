const getCypressVariable = (name) => {
  const value = Cypress.env(name);
  if (value) {
    return value;
  }
  console.warn("No value for CYPRESS Env variable", name);
  return undefined;
};

const config = getCypressVariable('ENVIRONMENT_NAME', 'test')

const DEV_CONFIG = {
  CYPRESS_USER_USERNAME: 'qa@withmehealth.com',
  CYPRESS_USER_PASSWORD: 'Auto@wme#2',
  CYPRESS_USER_LOGIN_UUID: '8510ef7f-5399-4109-8093-c34f892a7bd9-dev',
  CYPRESS_USER_TEST_USERID: '8271',
  CYPRESS_USER_SERVICE_BASE_URL: 'http://user-dev-service.dev.svc.cluster.local:5000/user/api/v1/',
  CYPRESS_MLAPI_BASE_URL: 'http://kong-dev-kong-proxy.kong-dev.svc.cluster.local/',
  CYPRESS_LOGIN_PAGE_BASE_URL: 'http://atc-dev-service.dev.svc.cluster.local',
  CYPRESS_AUTHENTICATION_TEST_USERID: '8271',
  CYPRESS_AUTHENTICATION_TEST_USERNAME: 'qa@withmehealth.com',
  CYPRESS_USER_FULL_NAME: 'Auto User',
}

const TEST_CONFIG = {
  CYPRESS_USER_USERNAME: 'qa@withmehealth.com',
  CYPRESS_USER_PASSWORD: 'Auto@wme#2',
  CYPRESS_USER_LOGIN_UUID: 'a109029e-8012-417b-80e6-6bb9e5f93-auto',
  CYPRESS_USER_TEST_USERID: '8357',
  CYPRESS_USER_SERVICE_BASE_URL: 'https://apps.test.withmehealth.com/appsvc/user/api/v1/',
  //'http://user-test-service.test.svc.cluster.local:5000/user/api/v1/',
  CYPRESS_MLAPI_BASE_URL: 'http://kong-test-kong-proxy.kong-test.svc.cluster.local/',
  CYPRESS_LOGIN_PAGE_BASE_URL: 'https://apps.test.withmehealth.com/',
  CYPRESS_AUTHENTICATION_TEST_USERID: '8357',
  CYPRESS_AUTHENTICATION_TEST_USERNAME: 'qa@withmehealth.com',
  CYPRESS_USER_FULL_NAME: 'Auto User',
  CYPRESS_URL: 'https://guide.apps.test.withmehealth.com/'
}

const getConfiguration = (envName) => {
  switch (envName) {
    case ('dev'): {
      return DEV_CONFIG;
    }
    case ('test'): {
      return TEST_CONFIG;
    }
    default: {
      return DEV_CONFIG
    }
  }
}

const configurationForEnv = getConfiguration(config)

export const CYPRESS_AUTHENTICATION_TEST_USERID = configurationForEnv.CYPRESS_AUTHENTICATION_TEST_USERID
export const CYPRESS_AUTHENTICATION_TEST_USERNAME = configurationForEnv.CYPRESS_AUTHENTICATION_TEST_USERNAME
export const CYPRESS_LOGIN_PAGE_BASE_URL = configurationForEnv.CYPRESS_LOGIN_PAGE_BASE_URL
export const CYPRESS_USER_LOGIN_UUID = configurationForEnv.CYPRESS_USER_LOGIN_UUID
export const CYPRESS_USER_SERVICE_BASE_URL = configurationForEnv.CYPRESS_USER_SERVICE_BASE_URL
export const CYPRESS_USER_USERNAME = configurationForEnv.CYPRESS_USER_USERNAME
export const CYPRESS_USER_PASSWORD = configurationForEnv.CYPRESS_USER_PASSWORD
export const CYPRESS_USER_TEST_USERID = configurationForEnv.CYPRESS_USER_TEST_USERID
export const CYPRESS_MLAPI_BASE_URL = configurationForEnv.CYPRESS_MLAPI_BASE_URL
export const CYPRESS_URL = configurationForEnv.CYPRESS_URL