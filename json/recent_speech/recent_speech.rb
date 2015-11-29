#!/usr/bin/env ruby

require 'rexml/document'
require 'json'

doc = REXML::Document.new(open(ARGV.shift))

count = 0
recent_speech = []
REXML::XPath.match(doc, "//speechRecord").each do |record|
  speech = {}

  speech['date'] = REXML::XPath.match(record, "date")[0].text
  speech['text'] = REXML::XPath.match(record, "speech")[0].text
  speech['text100'] = speech['text'][0..99]
  speech['meetingURL'] =  REXML::XPath.match(record, "meetingURL")[0].text

  recent_speech.push(speech)
  count = count.succ
  break if count > 5
end
puts JSON.dump(recent_speech)
