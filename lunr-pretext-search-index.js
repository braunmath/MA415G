var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction   We will be studying combinatorics, which is the art of counting. We will be addressing the following seven questions.   Enumeration    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
