# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

script = ->
  $('.count').click counter
  $('.text').change counter
  $('.text').keydown counter
  $('.text').keypress counter
  $('.text').keyup counter
  $('.text').blur counter
  $('.text').focus counter
  return

counter = ->
  value = $('.text').val()
  if value.length == 0
    $('#wordCount').html 0
    return
  regex = /\s+/gi
  wordCount = value.trim().replace(regex, ' ').split(' ').length
  $('#wordCount').css("color", "red") if wordCount >250
  $('#wordCount').css("color", "black") if wordCount <= 250
  $('#wordCount').html wordCount
  return


$(document).ready(script)
$(document).on('turbolinks:load', script)