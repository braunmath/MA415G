var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-foundational-questions",
  "level": "1",
  "url": "sec-foundational-questions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Eight Foundational Questions",
  "body": " Eight Foundational Questions  We will be studying combinatorics and graph theory. We will be addressing the following eight foundational questions of combinatorics and graph theory:  Enumeration: How many ____ are there?  Classification: Which objects have ____ property?  Expectation: How likely is ____?  Optimization: What is the best ____?  Sampling and Construction: How do I generate examples of ____?  Existence: Does ____ exist?  Estimation: Approximately how many ____ are there?  Ethics: What are the ethical implications that arise when applying ____ to the physical, biological, health, or social sciences?    Rules for small group discussions:   First, begin the discussion by going around your group and having each person give a 10-second answer to the question.    Second, go around the group again and give a 10-second follow-up answer. This allows everyone to have a chance to offer their thoughts before the general discussion begins.    Third, have a general discussion.      What is an example of an enumeration problem you have seen in a previous course?    What is an example of an optimization problem you have seen in a previous course?   "
},
{
  "id": "sec-foundational-questions-4",
  "level": "2",
  "url": "sec-foundational-questions.html#sec-foundational-questions-4",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "",
  "body": " What is an example of an enumeration problem you have seen in a previous course?  "
},
{
  "id": "sec-foundational-questions-5",
  "level": "2",
  "url": "sec-foundational-questions.html#sec-foundational-questions-5",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "",
  "body": " What is an example of an optimization problem you have seen in a previous course?  "
},
{
  "id": "sec-Proofs",
  "level": "1",
  "url": "sec-Proofs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Proofs",
  "body": " Proofs  The idea of mathematical proof is generally misunderstood by students. This is partially because it is not well-understood even by professional mathematicians. The key issue is that different people have different answers to the following three questions:  What is Mathematics?  What is the purpose of Mathematics?  What are the criteria for Mathematics to be good or bad?     How would you answer each of these three questions?   "
},
{
  "id": "sec-Proofs-3",
  "level": "2",
  "url": "sec-Proofs.html#sec-Proofs-3",
  "type": "Checkpoint",
  "number": "1.2.1",
  "title": "",
  "body": " How would you answer each of these three questions?  "
},
{
  "id": "sec-binomial-coefficients",
  "level": "1",
  "url": "sec-binomial-coefficients.html",
  "type": "Section",
  "number": "2.1",
  "title": "Binomial Coefficients",
  "body": " Binomial Coefficients  Explain exercises.  "
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
