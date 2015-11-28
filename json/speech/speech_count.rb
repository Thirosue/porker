#!/usr/bin/env ruby
# -*- coding: utf-8 -*-
#
require 'nokogiri'
require 'uri'
require 'open-uri'
require 'fileutils'

###search_uri = "http://kokkai.ndl.go.jp/api/1.0/speech?startRecord%3D1%26maximumRecords%3D5%26any%3D%E3%82%A2%E3%83%99%E3%83%8E%E3%83%9F%E3%82%AF%E3%82%B9%26speaker%3D%E5%AE%89%E5%80%8D%E6%99%8B%E4%B8%89"

speakers = [
  #"逢沢一郎",
  #"青柳陽一郎",
  #"浅尾慶一郎",
  #"安倍晋三",
  #"池内さおり",
  #"石井啓一",
  #"稲田朋美",
  #"井上英孝",
  #"今井雅人",
  #"上西小百合",
  #"うえの賢一郎",
  #"江崎鐵磨",
  #"枝野幸男",
  #"江藤拓",
  #"遠藤利明",
  #"大串正樹",
  "大島理森",
  #"大西健介",
  #"小川淳也",
  #"小野寺五典",
]
#speaker_count = 1
speaker_count = 17
speakers.each do |speaker|
  path = "#{speaker_count}"
  FileUtils.mkdir_p(path)
  #(2014..2014).each do |year|
  (1981..1990).each do |year|
  #(2000..2015).each do |year|
    query_string = "speaker%3D#{URI.encode(speaker)}%26from%3D#{year}-01-01%26until%3D#{year}-12-31"

    search_uri = "http://kokkai.ndl.go.jp/api/1.0/speech?#{query_string}"
    puts speaker_count, year, search_uri
    data = open(search_uri, "User-Agent" => "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36").read
    
    File.write("#{path}/#{year}.xml", data)
    sleep 4
  end
  speaker_count = speaker_count.succ
end
