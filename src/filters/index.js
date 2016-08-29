import $ from '../lib/zepto'

const urlParser = document.createElement('a')

export function domain (url) {
  urlParser.href = url
  return urlParser.hostname
}

export function fromNow (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

export function dataMatchFormatter (data) {
  let list = []
  $.each(data, (index, item) => {
    list.push(item.role_id)
  })
  return list
}

export function formatTimestamp (timestamp) {
  let date = new Date(timestamp)
  let dateFormat = require('dateformat')
  return dateFormat(date, 'yyyy-mm-dd hh:MM:ss')
}

let pluralize = (time, label) => {
  if (time === 1) {
    return time + label
  }

  return time + label + 's'
}
