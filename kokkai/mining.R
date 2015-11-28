setwd("~/Documents/porker/")

library(XML)

lst <- dir("kokkai", ".xml", recursive = TRUE, full.name = TRUE)

path <- lst[1]

j <- 0
for (path in lst) {
  j <- j + 1
  cat(sprintf("\r%4d/%4d", j , length(lst)))
  x <- xmlToList(xmlParse(path))$records$record$recordData$meetingRecord
}
