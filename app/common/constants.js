const httpConstants = {
  METHOD_TYPE: {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    PATCH: 'PATCH'
  },
  HEADER_TYPE: {
    URL_ENCODED: 'application/x-www-form-urlencoded',
    APPLICATION_JSON: 'application/json'
  },
  RESPONSE_STATUS: {
    SUCCESS: true,
    FAILURE: false
  },
  RESPONSE_CODES: {
    UNAUTHORIZED: 401,
    SERVER_ERROR: 500,
    NOT_FOUND: 404,
    OK: 200,
    NO_CONTENT_FOUND: 204,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    GONE: 410,
    UNSUPPORTED_MEDIA_TYPE: 415,
    TOO_MANY_REQUEST: 429
  },
  LOG_LEVEL_TYPE: {
    INFO: 'info',
    ERROR: 'error',
    WARN: 'warn',
    VERBOSE: 'verbose',
    DEBUG: 'debug',
    SILLY: 'silly',
    FUNCTIONAL: 'functional',
    HTTP_REQUEST: 'http request'
  },
}

const stringConstants = {
  SERVICE_STATUS_HTML:
    '<body style="font-family: Helvetica !important; background-color: black">' +
    '<div style="display: flex; flex:1; height: 100% ; justify-content: center; align-items: center; min-height: 100vh !important; font-size: 24px !important; color: #605DFF !important;">' +
    '⚡  Basic  🔋 Node-Project-Structure is working fine</div></body>'
}

const genericConstants = {
  DEVICE_TYPE: {}
}

const apiSuccessMessage = {
  FETCH_SUCCESS: 'Information fetched successfully',
  FOLLOW_SUCCESS : "Follow success",
  UNFOLLOW_SUCCESS: "Unfollow success",
  CHANGE_PASSWORD_SUCCESS: "Password changed Successfully"
}

const apiEndpoints = {
  GET_METERS: '/get-meters',
  AUTH0_OAUTH_TOKEN: "oauth/token",
  AUTH0_USER_BY_EMAIL: "api/v2/users-by-email?email=",
  AUTH0_USER_BY_ID: "api/v2/users/",
}

const apiFailureMessage = {
  INVALID_PARAMS: 'Invalid Parameters',
  INVALID_REQUEST: 'Invalid Request',
  INVALID_SESSION_TOKEN: 'Invalid session token',
  INTERNAL_SERVER_ERROR: 'Internal server Error',
  BAD_REQUEST: 'Bad Request!',
  DEVICE_ID_OR_SESSION_TOKEN_EMPTY: 'Device id or session token can\'t be empty or null',
  SESSION_GENERATION: 'Unable to generate session!',
  SESSION_EXPIRED: 'Session Expired!',
  NOT_FOUND: 'Requested data not found',
  EMAIL_REQUIRED: "Email id is required field",
  ID_REQUIRED: "User id is required field",
  AUTHENTICATION_ERROR: "Authentication Error"
}
const NOTIFICATION_EVENTS = {
  CREATE_PROFILE: 'create-profile-notification',
  UPDATE_PROFILE: 'update-profile-notification',
  RATE_PARTY: 'rate-party-notification',
  FOLLOW: 'follow-notification',
  UNFOLLOW: 'unfollow-notification',

}
const constants = {
  AMQP: {
    EXCHANGE_TYPE: {
      FANOUT: 'fanout',
      TOPIC: 'topic'
    },
    QUEUE_TYPE: {
        PUB_SUB: 'publisher_subscriber_queue',
        ROUTING_QUEUE: 'routing_queue',
    },
    PAYLOAD_DATA: {
      SENT_FROM: 'MOODAY',
      NOTIFICATION_FOR: {
        CREATE_PROFILE: 'Create Profile',
        UPDATE_PROFILE: 'Update Profile',
        RATE_PARTY: 'Rate Party',
        FOLLOW: 'Follow',
        UNFOLLOW: 'Unfollow',
      },
      NOTIFICATION_TITLE: {
        CREATE_PROFILE: 'Created profile suceesfully',
        UPDATE_PROFILE: 'Updated Profile succesfully',
        RATE_PARTY: 'Party rated suceesfully',
        FOLLOW: 'Follow',
        UNFOLLOW: 'Unfollow',
      },
      NOTIFICATION_TYPE_PUSH: 'push',
      NOTIFICATION_TYPE_EMAIL: 'email',
      NOTIFICATION_TYPE_SMS: 'sms',
      NOTIFICATION_TYPE_SLACK: 'slack',
    }
  }
}

module.exports.httpConstants = httpConstants;
module.exports.constants = constants;
module.exports.apiFailureMessage = apiFailureMessage;
module.exports.apiEndpoints = apiEndpoints;
module.exports.apiSuccessMessage = apiSuccessMessage;
module.exports.genericConstants = genericConstants;
module.exports.stringConstants = stringConstants;
