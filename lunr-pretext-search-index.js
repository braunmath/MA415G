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
  "body": " Proofs  Some of you have had good experiences with proofs in the past, and some of you have had bad experiences with proofs, and some of you have not really had to engage in reading and writing proofs. In general, the idea of mathematical proof is generally misunderstood by students. This is partially because it is not well-understood even by professional mathematicians. The key issue is that different people have different answers to the following three questions:  What is Mathematics?  What is the purpose of Mathematics?  What are the criteria for Mathematics to be good or bad?     How would you answer the second question?   In this class, we will use two frameworks to guide our answers to these questions in the context of combinatorics and graph theory. The first framework is Formal Functionalism , a philosophy of Mathematics described by Saunders MacLane. His starting point is:  [Mathematical] activities... involve counting, timing, measuring, and moving, using numbers, intervals, distances, and shapes. Facts about these operations and ideas are gradually assembled, calculations are made, until finally there develops an extensive body of knowledge, based on a few central ideas and providing formal rules for calculation. Eventually this body of knowledge is organized by a formal system of concepts, axioms, definitions, and proofs.  The following table is from MacLane's book \"Mathematics: Form and Function\", illustrating this progression for different human activities.   Table of human activities from MacLane's book.    The second framework is David Tall's Three Worlds of mathematics framework. Tall asserts that there are three different ways of doing mathematics, three \"worlds\", and each is related but independent. These worlds are the Embodied , Symbolic , and Formal worlds of mathematics.   Figure illustrating Tall's Three Worlds framework, from this page .    As we proceed to learn about combinatorics and graph theory, we will also discuss the ways in which various concepts are related to simple everyday activities (as in MacLane's table) and we will also discuss how our work fits within Tall's Three Worlds.  "
},
{
  "id": "sec-Proofs-3",
  "level": "2",
  "url": "sec-Proofs.html#sec-Proofs-3",
  "type": "Checkpoint",
  "number": "1.2.1",
  "title": "",
  "body": " How would you answer the second question?  "
},
{
  "id": "fig-maclane",
  "level": "2",
  "url": "sec-Proofs.html#fig-maclane",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Table of human activities from MacLane's book.   "
},
{
  "id": "fig-tall",
  "level": "2",
  "url": "sec-Proofs.html#fig-tall",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " Figure illustrating Tall's Three Worlds framework, from this page .   "
},
{
  "id": "sec-binomial-coefficients",
  "level": "1",
  "url": "sec-binomial-coefficients.html",
  "type": "Section",
  "number": "2.1",
  "title": "Binomial Coefficients",
  "body": " Binomial Coefficients  Explain exercises.  "
},
{
  "id": "ch-classification",
  "level": "1",
  "url": "ch-classification.html",
  "type": "Chapter",
  "number": "3",
  "title": "Classification",
  "body": " Classification  "
},
{
  "id": "ch-expectation",
  "level": "1",
  "url": "ch-expectation.html",
  "type": "Chapter",
  "number": "4",
  "title": "Expectation",
  "body": " Expectation  "
},
{
  "id": "ch-optimization",
  "level": "1",
  "url": "ch-optimization.html",
  "type": "Chapter",
  "number": "5",
  "title": "Optimization",
  "body": " Optimization  "
},
{
  "id": "ch-ethics",
  "level": "1",
  "url": "ch-ethics.html",
  "type": "Chapter",
  "number": "6",
  "title": "Ethics",
  "body": " Ethics  "
},
{
  "id": "ch-samplingandconstruction",
  "level": "1",
  "url": "ch-samplingandconstruction.html",
  "type": "Chapter",
  "number": "7",
  "title": "Sampling and Construction",
  "body": " Sampling and Construction  "
},
{
  "id": "ch-existence",
  "level": "1",
  "url": "ch-existence.html",
  "type": "Chapter",
  "number": "8",
  "title": "Existence",
  "body": " Existence  "
},
{
  "id": "ch-estimation",
  "level": "1",
  "url": "ch-estimation.html",
  "type": "Chapter",
  "number": "9",
  "title": "Estimation",
  "body": " Estimation  "
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
