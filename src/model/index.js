import $ from '../lib/zepto'
import utils from '../lib/utils'

let apiBaseUrl = 'http://localhost:8081'
let headers = {}
let contentType = 'application/json'

export default {
  /**
   * Fetch all tasks
   */
  fetchAllTasks: () => {
    return $.ajax({
      type: 'GET',
      headers: headers,
      cache: false,
      url: apiBaseUrl + '/api/tasks',
      contentType: contentType
    })
  },

  fetchTaskById: (uuid) => {
    return $.ajax({
      type: 'GET',
      headers: headers,
      cache: false,
      url: apiBaseUrl + '/api/tasks/' + uuid,
      contentType: contentType
    })
  },

  createTask: (data) => {
    return $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      headers: headers,
      cache: false,
      url: apiBaseUrl + '/api/tasks',
      contentType: contentType,
      dataType: 'json'
    })
  },

  fetchAllHosts: () => {
    return $.ajax({
      type: 'GET',
      headers: headers,
      cache: false,
      url: apiBaseUrl + '/api/hosts',
      contentType: contentType,
      dataType: 'json'
    })
  },

  fetchHostById: (hostId) => {
    return $.ajax({
      type: 'GET',
      headers: headers,
      cache: false,
      url: apiBaseUrl + '/api/hosts/' + hostId,
      contentType: contentType
    })
  },

  fetchLogs: (mac) => {
    if (utils.isEmpty(mac)) {
      mac = 'D0:49:00:00:C5:54'
    }
    return $.ajax({
      type: 'GET',
      headers: headers,
      cache: false,
      url: apiBaseUrl + '/analytics/logs?mac=' + mac,
      contentType: contentType
    })
  }
}
