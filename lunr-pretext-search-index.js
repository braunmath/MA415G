var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-foundational-questions",
  "level": "1",
  "url": "sec-foundational-questions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Eight Foundational Questions",
  "body": " Eight Foundational Questions  We will be studying combinatorics and graph theory. We will be addressing the following eight foundational questions of combinatorics and graph theory:  Enumeration: How many ____ are there?  Classification: Which objects have ____ property?  Expectation: How likely is ____?  Optimization: What is the best ____?  Ethics: What are the ethical implications that arise when applying ____ to the physical, biological, health, or social sciences?  Sampling and Construction: How do I generate examples of ____?  Existence: Does ____ exist?  Estimation: Approximately how many ____ are there?    Rules for small group discussions:   First, begin the discussion by going around your group and having each person give a 10-second answer to the question.    Second, go around the group again and give a 10-second follow-up answer. This allows everyone to have a chance to offer their thoughts before the general discussion begins.    Third, have a general discussion.      What is an example of an enumeration problem you have seen in a previous course?    What is an example of an optimization problem you have seen in a previous course?   "
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
  "body": " Proofs  Some of you have had good experiences with proofs in the past, and some of you have had bad experiences with proofs, and some of you have not really had to engage in reading and writing proofs. In general, the idea of mathematical proof is misunderstood by students. This is partially because the concept of proof is subtle and subject to human interpretation, which leads to disagreements even among professional mathematicians (though there are many aspects of proof that are widely agreed on!). The key issue is that different people have different answers to the following three questions:  What is Mathematics?  What is the purpose of Mathematics?  What are the criteria for Mathematics to be good or bad?     How would you answer the second question?   In this class, we will use two frameworks to guide our answers to these questions in the context of combinatorics and graph theory. The first framework is Formal Functionalism , a philosophy of Mathematics described by Saunders MacLane. His starting point is:  [Mathematical] activities... involve counting, timing, measuring, and moving, using numbers, intervals, distances, and shapes. Facts about these operations and ideas are gradually assembled, calculations are made, until finally there develops an extensive body of knowledge, based on a few central ideas and providing formal rules for calculation. Eventually this body of knowledge is organized by a formal system of concepts, axioms, definitions, and proofs.  The following table is from MacLane's book \"Mathematics: Form and Function\", illustrating this progression for different human activities.   Table of human activities from MacLane's book.    The second framework is David Tall's Three Worlds of Mathematics framework. Tall asserts that there are three different ways of doing mathematics, three \"worlds\", and each is related but independent. These worlds are the Embodied , Symbolic , and Formal worlds of mathematics.   Figure illustrating Tall's Three Worlds framework, from this page .    As we proceed to learn about combinatorics and graph theory, we will also discuss the ways in which various concepts are related to simple everyday activities (as in MacLane's table) and we will also discuss how our work fits within Tall's Three Worlds.  "
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
  "id": "sec-binarystrings",
  "level": "1",
  "url": "sec-binarystrings.html",
  "type": "Section",
  "number": "2.1",
  "title": "Binary Strings",
  "body": " Binary Strings    A binary string of length is an ordered list of values which are either or .    We can define binary strings another way, using products of sets. When we define notation, we will use the symbol \" \"\" to indicate that it is a definition. This helps to distinguish between when we are defining new notation and when we are proving equality between two objects.    Given two sets and , the product of these two sets is defined to be which is the set of all ordered pairs where the first element is from and the second element is from . The size , or cardinality , of a set is the number of elements in that set, which we denote by .    We can iterate products, so for example, consists of all ordered lists consisting of elements from .   List the binary strings in .    How do you know that your list is complete?    Suppose that you were asked to make a list of all the binary strings in .   What would your strategy be for listing them? In other words, how would you systematically list all possible binary strings?    How do you know that your strategy would result in a complete list of all binary strings of length ?     These exercises lead us to the following observation.   There are binary strings of length .    We will give two proofs. The first proof uses combinatorial reasoning . Combinatorial reasoning is where you make an argument based on the structure of the set of outcomes that you are studying -- in this case, we are considering the set of binary strings.   Combinatorial Reasoning Proof of   A binary string is a list of entries . Each is either or . Thus, there are independent choices to make of either or , one choice for each entry, to determine the binary string. This gives outcomes, hence our result is proved.    Discuss the combinatorial reasoning proof with your group. Does the proof make sense? Why or why not?   The second proof is a proof using recursion . In a recursive proof , we establish a logical argument that uses a known structure to produce a new structure. For this proof, we will need the following.    The multiplication principle states that for two finite sets and we have     We will also need the following definitions. We use , called the empty set , to denote a set with no elements.    Given two sets and , the union of these two sets is defined to be The intersection of these two sets is defined to be If , then we write the union as and call it a disjoint union .     Recursive Proof of  Let denote the set of binary strings of length . Our goal is to prove that . It is straightforward to check that and and .  Our strategy will be to show that if we know , then we can prove . If we show this general statement, then using , we can conclude that . Then, knowing , we can conclude that . This chain of logical implications continues, so that we have our desired result for any length of binary strings.  Our strategy is the following observation: Once we know that holds, then the result follows because     Check that is true when . Work together to generate an argument (a proof!) showing that this is true for every .    Discuss with your group why the logical implications in this proof shows that for every positive integer .   "
},
{
  "id": "def-binarystring",
  "level": "2",
  "url": "sec-binarystrings.html#def-binarystring",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  A binary string of length is an ordered list of values which are either or .   "
},
{
  "id": "def-setproduct",
  "level": "2",
  "url": "sec-binarystrings.html#def-setproduct",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "  Given two sets and , the product of these two sets is defined to be which is the set of all ordered pairs where the first element is from and the second element is from . The size , or cardinality , of a set is the number of elements in that set, which we denote by .   "
},
{
  "id": "sec-binarystrings-6",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-6",
  "type": "Checkpoint",
  "number": "2.1.3",
  "title": "",
  "body": " List the binary strings in .  "
},
{
  "id": "sec-binarystrings-7",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-7",
  "type": "Checkpoint",
  "number": "2.1.4",
  "title": "",
  "body": " How do you know that your list is complete?  "
},
{
  "id": "sec-binarystrings-8",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-8",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "",
  "body": " Suppose that you were asked to make a list of all the binary strings in .   What would your strategy be for listing them? In other words, how would you systematically list all possible binary strings?    How do you know that your strategy would result in a complete list of all binary strings of length ?     "
},
{
  "id": "thm-binarystringenumeration",
  "level": "2",
  "url": "sec-binarystrings.html#thm-binarystringenumeration",
  "type": "Theorem",
  "number": "2.1.6",
  "title": "",
  "body": "  There are binary strings of length .   "
},
{
  "id": "sec-binarystrings-11",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-11",
  "type": "Proof",
  "number": "2.1.1",
  "title": "Combinatorial Reasoning Proof of Theorem 2.1.6.",
  "body": " Combinatorial Reasoning Proof of   A binary string is a list of entries . Each is either or . Thus, there are independent choices to make of either or , one choice for each entry, to determine the binary string. This gives outcomes, hence our result is proved.  "
},
{
  "id": "sec-binarystrings-12",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-12",
  "type": "Checkpoint",
  "number": "2.1.7",
  "title": "",
  "body": " Discuss the combinatorial reasoning proof with your group. Does the proof make sense? Why or why not?  "
},
{
  "id": "fact-multiplicationprinciple",
  "level": "2",
  "url": "sec-binarystrings.html#fact-multiplicationprinciple",
  "type": "Fact",
  "number": "2.1.8",
  "title": "",
  "body": "  The multiplication principle states that for two finite sets and we have    "
},
{
  "id": "def-union",
  "level": "2",
  "url": "sec-binarystrings.html#def-union",
  "type": "Definition",
  "number": "2.1.9",
  "title": "",
  "body": "  Given two sets and , the union of these two sets is defined to be The intersection of these two sets is defined to be If , then we write the union as and call it a disjoint union .   "
},
{
  "id": "sec-binarystrings-17",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-17",
  "type": "Proof",
  "number": "2.1.2",
  "title": "Recursive Proof of Theorem 2.1.6.",
  "body": " Recursive Proof of  Let denote the set of binary strings of length . Our goal is to prove that . It is straightforward to check that and and .  Our strategy will be to show that if we know , then we can prove . If we show this general statement, then using , we can conclude that . Then, knowing , we can conclude that . This chain of logical implications continues, so that we have our desired result for any length of binary strings.  Our strategy is the following observation: Once we know that holds, then the result follows because   "
},
{
  "id": "sec-binarystrings-18",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-18",
  "type": "Checkpoint",
  "number": "2.1.10",
  "title": "",
  "body": " Check that is true when . Work together to generate an argument (a proof!) showing that this is true for every .  "
},
{
  "id": "sec-binarystrings-19",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-19",
  "type": "Checkpoint",
  "number": "2.1.11",
  "title": "",
  "body": " Discuss with your group why the logical implications in this proof shows that for every positive integer .  "
},
{
  "id": "sec-binomialcoefficients",
  "level": "1",
  "url": "sec-binomialcoefficients.html",
  "type": "Section",
  "number": "2.2",
  "title": "Binomial Coefficients",
  "body": " Binomial Coefficients    Given a set , a subset of is a set of elements of . The collection of all subsets of is called the power set of and is denoted by . We write to denote the set of integers between and .     Suppose that we have the set . Then the set is a subset of , while is not a subset of . Thus, we would write and we would write .    Discuss the above example and the notation used in it.     There is a one-to-one correspondence between the binary strings in and the subsets of .     We will produce a map from binary strings to subsets of . We will write this map as a function Given a binary string , if , then we include in . This produces a subset of .  What do we need to check to verify that we have a one-to-one correspondence? We need to check that:   this map is well-defined (each binary string goes to only one set),    this map is one-to-one (no two strings to go the same subset), and    this map is onto (every subset is mapped to by some string).    Once these three things are checked, then the proof is complete.   With your group, make a logical argument to justfy why each of the three conditions above in the proof hold, which completes our proof that is a one-to-one correspondence.   One-to-one correspondences have a special name.    Given two sets and , a bijection is a map from to that is a one-to-one correspondence.      If there is a bijection from to , then .           Observe that we use the notation for the power set of because when is finite, we have .  We next introduce some of the best numbers in the entire universe!!!! . Seriously, they are totally awesome.    The number of subsets of of size is denoted by and is called the -binomial coefficient. We define .     Show that .    Show that .    Show that .    What is ?           We know that is the cardinality of all subsets of . Further, we know that in the sum each subset is counted once by a unique summand. Thus, each of these expressions counts the cardinality of all subsets of , hence they are equal.    Discuss this proof: does it make sense? Why or why not? Note the strategy is to count the number of subsets of in two different ways, which leads to two different symbolic formulas for the total number.     There are binary strings of length with ones.     There is a one-to-one correspondence between binary strings of length with ones and subsets of with elements. Thus, these two sets have the same cardinality, which is .   Binomial coefficients form a beautiful triangle called the arithmetical triangle , also known as Pascal's triangle , which happens because of the following arithmetic recurrence .    For all , we have      Let denote the set of all -element subset of . We can write this as a disjoint union: Therefore, we have that the cardinality of the left-hand set is the sum of the cardinalities of the two right-hand sets, which is exactly the formula claimed in the theorem.    Check that is true for . Then, give a logical argument (a proof!) that it is true for every value of and .   Review some of the illustrations at the wikipedia page for Pascal's triangle .  One of the most important roles played by the binomial coefficients, and the reason for their name, is that they appear in coefficients of polynomials that are powers of binomials.          If we distribute all the factors in but we do NOT commute any variables, then each term is an ordered sequence of variables, each either or . For example, If we replace each with a and each with a , then each of these terms corresponds to a binary string. Therefore, the coefficient of in is the number of binary strings with ones, which is , as desired.    Discuss the proof above with your group. Work out some complete examples for small values of .          Finally, you might be wondering if there is a formula for binomial coefficients, and yes, there is. However, it is important to be able to think about these numbers using both their combinatorial structure (which we have been doing) and using the following formula.         You will see a proof of this later in the course on a homework problem.  "
},
{
  "id": "def-subset",
  "level": "2",
  "url": "sec-binomialcoefficients.html#def-subset",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Given a set , a subset of is a set of elements of . The collection of all subsets of is called the power set of and is denoted by . We write to denote the set of integers between and .   "
},
{
  "id": "sec-binomialcoefficients-3",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-3",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": " Suppose that we have the set . Then the set is a subset of , while is not a subset of . Thus, we would write and we would write .  "
},
{
  "id": "sec-binomialcoefficients-4",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-4",
  "type": "Checkpoint",
  "number": "2.2.3",
  "title": "",
  "body": " Discuss the above example and the notation used in it.  "
},
{
  "id": "prop-subsetsbinarystrings",
  "level": "2",
  "url": "sec-binomialcoefficients.html#prop-subsetsbinarystrings",
  "type": "Proposition",
  "number": "2.2.4",
  "title": "",
  "body": "  There is a one-to-one correspondence between the binary strings in and the subsets of .   "
},
{
  "id": "sec-binomialcoefficients-6",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-6",
  "type": "Proof",
  "number": "2.2.1",
  "title": "",
  "body": " We will produce a map from binary strings to subsets of . We will write this map as a function Given a binary string , if , then we include in . This produces a subset of .  What do we need to check to verify that we have a one-to-one correspondence? We need to check that:   this map is well-defined (each binary string goes to only one set),    this map is one-to-one (no two strings to go the same subset), and    this map is onto (every subset is mapped to by some string).    Once these three things are checked, then the proof is complete. "
},
{
  "id": "sec-binomialcoefficients-7",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-7",
  "type": "Checkpoint",
  "number": "2.2.5",
  "title": "",
  "body": " With your group, make a logical argument to justfy why each of the three conditions above in the proof hold, which completes our proof that is a one-to-one correspondence.  "
},
{
  "id": "def-bijection",
  "level": "2",
  "url": "sec-binomialcoefficients.html#def-bijection",
  "type": "Definition",
  "number": "2.2.6",
  "title": "",
  "body": "  Given two sets and , a bijection is a map from to that is a one-to-one correspondence.   "
},
{
  "id": "fact-bijectioncardinality",
  "level": "2",
  "url": "sec-binomialcoefficients.html#fact-bijectioncardinality",
  "type": "Fact",
  "number": "2.2.7",
  "title": "",
  "body": "  If there is a bijection from to , then .   "
},
{
  "id": "cor-powersetcardinality",
  "level": "2",
  "url": "sec-binomialcoefficients.html#cor-powersetcardinality",
  "type": "Corollary",
  "number": "2.2.8",
  "title": "",
  "body": "      "
},
{
  "id": "def-binomialcoefficients",
  "level": "2",
  "url": "sec-binomialcoefficients.html#def-binomialcoefficients",
  "type": "Definition",
  "number": "2.2.9",
  "title": "",
  "body": "  The number of subsets of of size is denoted by and is called the -binomial coefficient. We define .   "
},
{
  "id": "sec-binomialcoefficients-15",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-15",
  "type": "Checkpoint",
  "number": "2.2.10",
  "title": "",
  "body": " Show that .  "
},
{
  "id": "sec-binomialcoefficients-16",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-16",
  "type": "Checkpoint",
  "number": "2.2.11",
  "title": "",
  "body": " Show that .  "
},
{
  "id": "sec-binomialcoefficients-17",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-17",
  "type": "Checkpoint",
  "number": "2.2.12",
  "title": "",
  "body": " Show that .  "
},
{
  "id": "sec-binomialcoefficients-18",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-18",
  "type": "Checkpoint",
  "number": "2.2.13",
  "title": "",
  "body": " What is ?  "
},
{
  "id": "thm-binomialsumtopower",
  "level": "2",
  "url": "sec-binomialcoefficients.html#thm-binomialsumtopower",
  "type": "Theorem",
  "number": "2.2.14",
  "title": "",
  "body": "      "
},
{
  "id": "sec-binomialcoefficients-20",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-20",
  "type": "Proof",
  "number": "2.2.2",
  "title": "",
  "body": " We know that is the cardinality of all subsets of . Further, we know that in the sum each subset is counted once by a unique summand. Thus, each of these expressions counts the cardinality of all subsets of , hence they are equal.  "
},
{
  "id": "sec-binomialcoefficients-21",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-21",
  "type": "Checkpoint",
  "number": "2.2.15",
  "title": "",
  "body": " Discuss this proof: does it make sense? Why or why not? Note the strategy is to count the number of subsets of in two different ways, which leads to two different symbolic formulas for the total number.  "
},
{
  "id": "cor-subsetsbinarystrings",
  "level": "2",
  "url": "sec-binomialcoefficients.html#cor-subsetsbinarystrings",
  "type": "Corollary",
  "number": "2.2.16",
  "title": "",
  "body": "  There are binary strings of length with ones.   "
},
{
  "id": "sec-binomialcoefficients-23",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-23",
  "type": "Proof",
  "number": "2.2.3",
  "title": "",
  "body": " There is a one-to-one correspondence between binary strings of length with ones and subsets of with elements. Thus, these two sets have the same cardinality, which is .  "
},
{
  "id": "thm-arithmeticrecurrence",
  "level": "2",
  "url": "sec-binomialcoefficients.html#thm-arithmeticrecurrence",
  "type": "Theorem",
  "number": "2.2.17",
  "title": "",
  "body": "  For all , we have    "
},
{
  "id": "sec-binomialcoefficients-26",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-26",
  "type": "Proof",
  "number": "2.2.4",
  "title": "",
  "body": " Let denote the set of all -element subset of . We can write this as a disjoint union: Therefore, we have that the cardinality of the left-hand set is the sum of the cardinalities of the two right-hand sets, which is exactly the formula claimed in the theorem.  "
},
{
  "id": "sec-binomialcoefficients-27",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-27",
  "type": "Checkpoint",
  "number": "2.2.18",
  "title": "",
  "body": " Check that is true for . Then, give a logical argument (a proof!) that it is true for every value of and .  "
},
{
  "id": "thm-binomialtheorem",
  "level": "2",
  "url": "sec-binomialcoefficients.html#thm-binomialtheorem",
  "type": "Theorem",
  "number": "2.2.19",
  "title": "",
  "body": "      "
},
{
  "id": "sec-binomialcoefficients-31",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-31",
  "type": "Proof",
  "number": "2.2.5",
  "title": "",
  "body": " If we distribute all the factors in but we do NOT commute any variables, then each term is an ordered sequence of variables, each either or . For example, If we replace each with a and each with a , then each of these terms corresponds to a binary string. Therefore, the coefficient of in is the number of binary strings with ones, which is , as desired.  "
},
{
  "id": "sec-binomialcoefficients-32",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-32",
  "type": "Checkpoint",
  "number": "2.2.20",
  "title": "",
  "body": " Discuss the proof above with your group. Work out some complete examples for small values of .  "
},
{
  "id": "cor-binomialtheoremx",
  "level": "2",
  "url": "sec-binomialcoefficients.html#cor-binomialtheoremx",
  "type": "Corollary",
  "number": "2.2.21",
  "title": "",
  "body": "      "
},
{
  "id": "thm-binomialcoefficientformula",
  "level": "2",
  "url": "sec-binomialcoefficients.html#thm-binomialcoefficientformula",
  "type": "Theorem",
  "number": "2.2.22",
  "title": "",
  "body": "      "
},
{
  "id": "sec-pauseforenumerationreflection",
  "level": "1",
  "url": "sec-pauseforenumerationreflection.html",
  "type": "Section",
  "number": "2.3",
  "title": "Pause for Reflection",
  "body": " Pause for Reflection  We have now done some math. Let's reflect a bit on how this math fits into the philosophical and psychological frameworks for Mathematics due to MacLane and Tall.   Recall the Table from MacLane's book given in . Which of the items in the table have we been engaged with, either consciously or subconsciously, so far?    Recall the picture representing Tall's Three Worlds framework given in . Where in these three worlds of mathematics have we been situated so far with the math we have done?   "
},
{
  "id": "sec-pauseforenumerationreflection-3",
  "level": "2",
  "url": "sec-pauseforenumerationreflection.html#sec-pauseforenumerationreflection-3",
  "type": "Checkpoint",
  "number": "2.3.1",
  "title": "",
  "body": " Recall the Table from MacLane's book given in . Which of the items in the table have we been engaged with, either consciously or subconsciously, so far?  "
},
{
  "id": "sec-pauseforenumerationreflection-4",
  "level": "2",
  "url": "sec-pauseforenumerationreflection.html#sec-pauseforenumerationreflection-4",
  "type": "Checkpoint",
  "number": "2.3.2",
  "title": "",
  "body": " Recall the picture representing Tall's Three Worlds framework given in . Where in these three worlds of mathematics have we been situated so far with the math we have done?  "
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
