import $ from '../lib/zepto'
import utils from '../lib/utils'

// let apiBaseUrl = 'http://localhost:8081'
let apiBaseUrl = 'http://localhost'
let headers = {}

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
      dataType: 'json'
    })
  },

  /**
   * Fetch tasks of this host
   */
  fetchTasks: (uuid) => {
    return $.ajax({
      type: 'GET',
      headers: headers,
      cache: false,
      url: apiBaseUrl + '/api/tasks/' + uuid,
      dataType: 'json'
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
      // url: 'https://analytics.picooc.net/analytics/logs?mac=D0:49:00:00:C5:54'
      url: apiBaseUrl + '/analytics/logs?mac=' + mac
    })
  }
}
