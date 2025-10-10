var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-foundational-questions",
  "level": "1",
  "url": "sec-foundational-questions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Eight Foundational Questions",
  "body": " Eight Foundational Questions  We will be studying combinatorics and graph theory. We will be addressing the following eight foundational questions of combinatorics and graph theory:  Enumeration: How many ____ are there?  Classification: Which objects have ____ property?  Expectation: How likely is ____?  Optimization: What is the best ____?  Ethics: What are the ethical implications that arise when applying ____ to the physical, biological, health, or social sciences?  Sampling and Construction: How do I generate examples of ____?  Existence: Does ____ exist?  Estimation: Approximately how many ____ are there?    "
},
{
  "id": "sec-Proofs",
  "level": "1",
  "url": "sec-Proofs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Proofs",
  "body": " Proofs  Some of you have had good experiences with proofs in the past, and some of you have had bad experiences with proofs, and some of you have not really had to engage in reading and writing proofs. In general, the idea of mathematical proof is misunderstood by students. This is partially because the concept of proof is subtle and subject to human interpretation, which leads to disagreements even among professional mathematicians (though there are many aspects of proof that are widely agreed on!). The key issue is that different people have different answers to the following three questions:  What is Mathematics?  What is the purpose of Mathematics?  What are the criteria for Mathematics to be good or bad?     In this class, we will use two frameworks to guide our answers to these questions in the context of combinatorics and graph theory. The first framework is Formal Functionalism , a philosophy of Mathematics described by Saunders MacLane. His starting point is:  [Mathematical] activities... involve counting, timing, measuring, and moving, using numbers, intervals, distances, and shapes. Facts about these operations and ideas are gradually assembled, calculations are made, until finally there develops an extensive body of knowledge, based on a few central ideas and providing formal rules for calculation. Eventually this body of knowledge is organized by a formal system of concepts, axioms, definitions, and proofs.  The following table is from MacLane's book ``Mathematics: Form and Function'', illustrating this progression for different human activities.   Table of human activities from MacLane's book.    The second framework is David Tall's Three Worlds of Mathematics framework. Tall asserts that there are three different ways of doing mathematics, three ``worlds'', and each is related but independent. These worlds are the Embodied , Symbolic , and Formal worlds of mathematics.   Figure illustrating Tall's Three Worlds framework, from this page .    As we proceed to learn about combinatorics and graph theory, we will also discuss the ways in which various concepts are related to simple everyday activities (as in MacLane's table) and we will also discuss how our work fits within Tall's Three Worlds.  "
},
{
  "id": "fig-maclane",
  "level": "2",
  "url": "sec-Proofs.html#fig-maclane",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Table of human activities from MacLane's book.   "
},
{
  "id": "fig-tall",
  "level": "2",
  "url": "sec-Proofs.html#fig-tall",
  "type": "Figure",
  "number": "1.2.2",
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
  "body": " Binary Strings  We will begin with one of the most fundamental sets in combinatorics.    A binary string of length is an ordered list of values which are either or .    We can define binary strings another way, using products of sets. When we define notation, we will use the symbol \" \" to indicate that it is a definition. This helps to distinguish between when we are defining new notation and when we are proving equality between two objects.    Given two sets and , the product of these two sets is defined to be which is the set of all ordered pairs where the first element is from and the second element is from . The size , or cardinality , of a set is the number of elements in that set, which we denote by . If an element is in the set , then we write . If is not in the set , then we write .    We can iterate products, so for example, consists of all ordered lists consisting of elements from .   You already have experience using product notation! For example, you are used to seeing notation such as in calculus or matrix algebra to represent an ordered list of three real numbers, i.e., a vector of length three.    Rules for checkpoints, which will either be a problem to solve or a question to discuss:   First, begin the discussion by going around your group and having each person spend 10-seconds sharing an initial strategy for solving the problem, or sharing a answer to the question if it is a discussion question.    Second, go around the group again and give a 10-second follow-up answer. This allows everyone to have a chance to offer their thoughts before the general problem-solving or discussion begins.    Third, as a group, solve the problem or engage in the discussion for the checkpoint.       List the binary strings in .    How do you know that your list is complete?    Suppose that you were asked to make a list of all the binary strings in .   What would your strategy be for listing them? In other words, how would you systematically list all possible binary strings?    How do you know that your strategy would result in a complete list of all binary strings of length ?      These exercises lead us to the following observation.    There are binary strings of length .    We will give two proofs. The first proof uses combinatorial reasoning . Combinatorial reasoning is where you make an argument based on the structure of the set of outcomes that you are studying -- in this case, we are considering the set of binary strings.   Combinatorial Reasoning Proof of   A binary string is a list of entries . Each is either or . Thus, there are independent choices to make of either or , one choice for each entry, to determine the binary string. This gives outcomes, hence our result is proved.    Discuss the combinatorial reasoning proof with your group. Does the proof make sense? Why or why not?   The second proof is a proof using recursion . In a recursive proof , we establish a logical argument that uses a known structure to produce a new structure. For this proof, we will need the following.    The multiplication principle states that for two finite sets and we have     We will also need the following definitions. We use , called the empty set , to denote a set with no elements.    Given two sets and , the union of these two sets is defined to be The intersection of these two sets is defined to be If , then we write the union as and call it a disjoint union .     Recursive Proof of  Let denote the set of binary strings of length . Our goal is to prove that . It is straightforward to check that and and .  Our strategy will be to show that if we know , then we can prove . If we show this general statement, then using , we can conclude that . Then, knowing , we can conclude that . This chain of logical implications continues, so that we have our desired result for any length of binary strings.  Our strategy is the following observation: Once we know that holds, then the result follows because     Check that is true when . Work together to generate an argument (a proof!) showing that this is true for every .    Discuss with your group why the logical implications in this proof shows that for every positive integer .   "
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
  "body": "  Given two sets and , the product of these two sets is defined to be which is the set of all ordered pairs where the first element is from and the second element is from . The size , or cardinality , of a set is the number of elements in that set, which we denote by . If an element is in the set , then we write . If is not in the set , then we write .   "
},
{
  "id": "sec-binarystrings-7",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-7",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": " You already have experience using product notation! For example, you are used to seeing notation such as in calculus or matrix algebra to represent an ordered list of three real numbers, i.e., a vector of length three.  "
},
{
  "id": "sec-binarystrings-8",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-8",
  "type": "Remark",
  "number": "2.1.4",
  "title": "",
  "body": " Rules for checkpoints, which will either be a problem to solve or a question to discuss:   First, begin the discussion by going around your group and having each person spend 10-seconds sharing an initial strategy for solving the problem, or sharing a answer to the question if it is a discussion question.    Second, go around the group again and give a 10-second follow-up answer. This allows everyone to have a chance to offer their thoughts before the general problem-solving or discussion begins.    Third, as a group, solve the problem or engage in the discussion for the checkpoint.     "
},
{
  "id": "sec-binarystrings-9",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-9",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "",
  "body": " List the binary strings in .  "
},
{
  "id": "sec-binarystrings-10",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-10",
  "type": "Checkpoint",
  "number": "2.1.6",
  "title": "",
  "body": " How do you know that your list is complete?  "
},
{
  "id": "sec-binarystrings-11",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-11",
  "type": "Checkpoint",
  "number": "2.1.7",
  "title": "",
  "body": " Suppose that you were asked to make a list of all the binary strings in .   What would your strategy be for listing them? In other words, how would you systematically list all possible binary strings?    How do you know that your strategy would result in a complete list of all binary strings of length ?     "
},
{
  "id": "thm-binarystringenumeration",
  "level": "2",
  "url": "sec-binarystrings.html#thm-binarystringenumeration",
  "type": "Theorem",
  "number": "2.1.8",
  "title": "",
  "body": "  There are binary strings of length .   "
},
{
  "id": "sec-binarystrings-15",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-15",
  "type": "Proof",
  "number": "2.1.1",
  "title": "Combinatorial Reasoning Proof of Theorem 2.1.8.",
  "body": " Combinatorial Reasoning Proof of   A binary string is a list of entries . Each is either or . Thus, there are independent choices to make of either or , one choice for each entry, to determine the binary string. This gives outcomes, hence our result is proved.  "
},
{
  "id": "sec-binarystrings-16",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-16",
  "type": "Checkpoint",
  "number": "2.1.9",
  "title": "",
  "body": " Discuss the combinatorial reasoning proof with your group. Does the proof make sense? Why or why not?  "
},
{
  "id": "fact-multiplicationprinciple",
  "level": "2",
  "url": "sec-binarystrings.html#fact-multiplicationprinciple",
  "type": "Fact",
  "number": "2.1.10",
  "title": "",
  "body": "  The multiplication principle states that for two finite sets and we have    "
},
{
  "id": "def-union",
  "level": "2",
  "url": "sec-binarystrings.html#def-union",
  "type": "Definition",
  "number": "2.1.11",
  "title": "",
  "body": "  Given two sets and , the union of these two sets is defined to be The intersection of these two sets is defined to be If , then we write the union as and call it a disjoint union .   "
},
{
  "id": "sec-binarystrings-21",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-21",
  "type": "Proof",
  "number": "2.1.2",
  "title": "Recursive Proof of Theorem 2.1.8.",
  "body": " Recursive Proof of  Let denote the set of binary strings of length . Our goal is to prove that . It is straightforward to check that and and .  Our strategy will be to show that if we know , then we can prove . If we show this general statement, then using , we can conclude that . Then, knowing , we can conclude that . This chain of logical implications continues, so that we have our desired result for any length of binary strings.  Our strategy is the following observation: Once we know that holds, then the result follows because   "
},
{
  "id": "sec-binarystrings-22",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-22",
  "type": "Checkpoint",
  "number": "2.1.12",
  "title": "",
  "body": " Check that is true when . Work together to generate an argument (a proof!) showing that this is true for every .  "
},
{
  "id": "sec-binarystrings-23",
  "level": "2",
  "url": "sec-binarystrings.html#sec-binarystrings-23",
  "type": "Checkpoint",
  "number": "2.1.13",
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
  "body": " Binomial Coefficients  Binary strings are closely related to subsets of finite sets, which is our next topic.    Given a set , a subset of is a set of elements of . The collection of all subsets of is called the power set of and is denoted by . We write to denote the set of integers between and .     Suppose that we have the set . Then the set is a subset of , while is not a subset of . Thus, we would write and we would write .    Discuss the above example and the notation used in it. Create another example of a subset and a non-subset of a set.     There is a one-to-one correspondence between the binary strings in and the subsets of .     We will produce a map from binary strings to subsets of . We will write this map as a function Given a binary string , if , then we include in . This produces a subset of .  What do we need to check to verify that we have a one-to-one correspondence? We need to check that:   this map is well-defined (each binary string goes to only one set),    this map is one-to-one (no two strings to go the same subset), and    this map is onto (every subset is mapped to by some string).   Once these three things are checked, then the proof is complete.    With your group, make a logical argument to justify why each of the three conditions above in the proof hold, which completes our proof that is a one-to-one correspondence.   One-to-one correspondences have a special name.    Given two sets and , a bijection is a function from to that is a one-to-one and onto correspondence.      If there is a bijection from to , then .           Observe that we use the notation for the power set of because when is finite, we have .  We next introduce some of the best numbers in the entire universe!!!! . Seriously, they are totally awesome.    The number of subsets of of size is denoted by and is called the -binomial coefficient. We define .     Show that .    Show that .    Show that .    What is ?           We know that is the cardinality of the power set of . Further, we know that in the sum each subset is counted once by a unique summand. Thus, each of these expressions counts the cardinality of the power set of , hence they are equal.    Discuss this proof: does it make sense? Why or why not? Check this proof with small examples. Note the strategy is to count the number of subsets of in two different ways, which leads to two different symbolic formulas for the total number.     There are binary strings of length with ones.     There is a one-to-one correspondence between binary strings of length with ones and subsets of with elements. Thus, these two sets have the same cardinality, which is .   Binomial coefficients form a beautiful triangle called the arithmetical triangle , also known as Pascal's triangle , which happens because of the following arithmetic recurrence .    For all , we have     Let denote the set of all -element subset of .   We can write this as a disjoint union: Therefore, we have that the cardinality of the left-hand set is the sum of the cardinalities of the two right-hand sets, which is exactly the formula claimed in the theorem.    Check that is true for . Then, give a logical argument (a proof!) that it is true for every value of and .    Review some of the illustrations at the wikipedia page for Pascal's triangle .   One of the most important roles played by the binomial coefficients, and the reason for their name, is that they appear in coefficients of polynomials that are powers of binomials.          If we distribute all the factors in but we do NOT commute any variables, then each term is an ordered sequence of variables, each either or . For example, If we replace each with a and each with a , then each of these terms corresponds to a binary string. Therefore, the coefficient of in is the number of binary strings with ones, which is , as desired.    Discuss the proof above with your group. Work out some complete examples for small values of .          Finally, you might be wondering if there is a formula for binomial coefficients, and yes, there is. However, it is important to be able to think about these numbers using both their combinatorial structure (which we have been doing) and using the following formula.         You will see a proof of this later in the course on a homework problem.  "
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
  "id": "sec-binomialcoefficients-4",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-4",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": " Suppose that we have the set . Then the set is a subset of , while is not a subset of . Thus, we would write and we would write .  "
},
{
  "id": "sec-binomialcoefficients-5",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-5",
  "type": "Checkpoint",
  "number": "2.2.3",
  "title": "",
  "body": " Discuss the above example and the notation used in it. Create another example of a subset and a non-subset of a set.  "
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
  "id": "sec-binomialcoefficients-7",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-7",
  "type": "Proof",
  "number": "2.2.1",
  "title": "",
  "body": " We will produce a map from binary strings to subsets of . We will write this map as a function Given a binary string , if , then we include in . This produces a subset of .  What do we need to check to verify that we have a one-to-one correspondence? We need to check that:   this map is well-defined (each binary string goes to only one set),    this map is one-to-one (no two strings to go the same subset), and    this map is onto (every subset is mapped to by some string).   Once these three things are checked, then the proof is complete.  "
},
{
  "id": "sec-binomialcoefficients-8",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-8",
  "type": "Checkpoint",
  "number": "2.2.5",
  "title": "",
  "body": " With your group, make a logical argument to justify why each of the three conditions above in the proof hold, which completes our proof that is a one-to-one correspondence.  "
},
{
  "id": "def-bijection",
  "level": "2",
  "url": "sec-binomialcoefficients.html#def-bijection",
  "type": "Definition",
  "number": "2.2.6",
  "title": "",
  "body": "  Given two sets and , a bijection is a function from to that is a one-to-one and onto correspondence.   "
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
  "id": "sec-binomialcoefficients-16",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-16",
  "type": "Checkpoint",
  "number": "2.2.10",
  "title": "",
  "body": " Show that .  "
},
{
  "id": "sec-binomialcoefficients-17",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-17",
  "type": "Checkpoint",
  "number": "2.2.11",
  "title": "",
  "body": " Show that .  "
},
{
  "id": "sec-binomialcoefficients-18",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-18",
  "type": "Checkpoint",
  "number": "2.2.12",
  "title": "",
  "body": " Show that .  "
},
{
  "id": "sec-binomialcoefficients-19",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-19",
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
  "id": "sec-binomialcoefficients-21",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-21",
  "type": "Proof",
  "number": "2.2.2",
  "title": "",
  "body": " We know that is the cardinality of the power set of . Further, we know that in the sum each subset is counted once by a unique summand. Thus, each of these expressions counts the cardinality of the power set of , hence they are equal.  "
},
{
  "id": "sec-binomialcoefficients-22",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-22",
  "type": "Checkpoint",
  "number": "2.2.15",
  "title": "",
  "body": " Discuss this proof: does it make sense? Why or why not? Check this proof with small examples. Note the strategy is to count the number of subsets of in two different ways, which leads to two different symbolic formulas for the total number.  "
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
  "id": "sec-binomialcoefficients-24",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-24",
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
  "id": "sec-binomialcoefficients-28",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-28",
  "type": "Proof",
  "number": "2.2.4",
  "title": "",
  "body": " We can write this as a disjoint union: Therefore, we have that the cardinality of the left-hand set is the sum of the cardinalities of the two right-hand sets, which is exactly the formula claimed in the theorem.  "
},
{
  "id": "sec-binomialcoefficients-29",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-29",
  "type": "Checkpoint",
  "number": "2.2.18",
  "title": "",
  "body": " Check that is true for . Then, give a logical argument (a proof!) that it is true for every value of and .  "
},
{
  "id": "sec-binomialcoefficients-30",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-30",
  "type": "Remark",
  "number": "2.2.19",
  "title": "",
  "body": " Review some of the illustrations at the wikipedia page for Pascal's triangle .  "
},
{
  "id": "thm-binomialtheorem",
  "level": "2",
  "url": "sec-binomialcoefficients.html#thm-binomialtheorem",
  "type": "Theorem",
  "number": "2.2.20",
  "title": "",
  "body": "      "
},
{
  "id": "sec-binomialcoefficients-33",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-33",
  "type": "Proof",
  "number": "2.2.5",
  "title": "",
  "body": " If we distribute all the factors in but we do NOT commute any variables, then each term is an ordered sequence of variables, each either or . For example, If we replace each with a and each with a , then each of these terms corresponds to a binary string. Therefore, the coefficient of in is the number of binary strings with ones, which is , as desired.  "
},
{
  "id": "sec-binomialcoefficients-34",
  "level": "2",
  "url": "sec-binomialcoefficients.html#sec-binomialcoefficients-34",
  "type": "Checkpoint",
  "number": "2.2.21",
  "title": "",
  "body": " Discuss the proof above with your group. Work out some complete examples for small values of .  "
},
{
  "id": "cor-binomialtheoremx",
  "level": "2",
  "url": "sec-binomialcoefficients.html#cor-binomialtheoremx",
  "type": "Corollary",
  "number": "2.2.22",
  "title": "",
  "body": "      "
},
{
  "id": "thm-binomialcoefficientformula",
  "level": "2",
  "url": "sec-binomialcoefficients.html#thm-binomialcoefficientformula",
  "type": "Theorem",
  "number": "2.2.23",
  "title": "",
  "body": "      "
},
{
  "id": "sec-fibonacci",
  "level": "1",
  "url": "sec-fibonacci.html",
  "type": "Section",
  "number": "2.3",
  "title": "Fibonacci Numbers",
  "body": " Fibonacci Numbers  Fibonacci numbers are a classic topic in combinatorics. They count many different objects, and their history is discussed at length on their wikipedia page .    Let and let . Define the sequence using these initial conditions and the recurrence This sequence is called the Fibonacci sequence and the numbers in the sequence are called the Fibonacci numbers .     With your group, calculate the first 10 Fibonacci numbers.   The Fibonacci numbers arise throughout mathematics. One of the basic problems they solve is counting integer compositions.    A composition of a positive integer is an ordered sum where each is a positive integer. We call each a part of the composition.     Each of and and are compositions of .    Systematically list all the compositions of for .   Let denote the set of compositions of using parts from the set . So, for example, the set of all compositions of is .   Systematically list all the compositions in for .     For all positive integers , we have      We use the technique of writing the set as a disjoint union. Observe that is equal to and therefore Since and , the number of compositions using parts from has the same initial conditions as the Fibonacci numbers starting at and satisfies the same recurrence. Thus, our proof is complete.    Discuss the proof above with your group. Does the disjoint union make sense? Use the lists of compositions that you generated to check this for small values of .   Our final topic for Fibonacci numbers is a connection with binomial coefficients.    For each positive integer , we have      Discuss with your group: how might you prove this? What strategy could you use? How could binomial coefficients be related to compositions using ones and twos?    The number of compositions of using copies of is given by . Since every element of uses at most parts equal to , the sum counts all the compositions.    Discuss this proof. Does it make sense? Why or why not?    Rewrite the proof above using the strategy to express the set as a disjoint union of sets of compositions with a fixed number of 's.   "
},
{
  "id": "def-fibonacci",
  "level": "2",
  "url": "sec-fibonacci.html#def-fibonacci",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  Let and let . Define the sequence using these initial conditions and the recurrence This sequence is called the Fibonacci sequence and the numbers in the sequence are called the Fibonacci numbers .   "
},
{
  "id": "sec-fibonacci-4",
  "level": "2",
  "url": "sec-fibonacci.html#sec-fibonacci-4",
  "type": "Checkpoint",
  "number": "2.3.2",
  "title": "",
  "body": " With your group, calculate the first 10 Fibonacci numbers.  "
},
{
  "id": "def-composition",
  "level": "2",
  "url": "sec-fibonacci.html#def-composition",
  "type": "Definition",
  "number": "2.3.3",
  "title": "",
  "body": "  A composition of a positive integer is an ordered sum where each is a positive integer. We call each a part of the composition.   "
},
{
  "id": "sec-fibonacci-7",
  "level": "2",
  "url": "sec-fibonacci.html#sec-fibonacci-7",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": " Each of and and are compositions of .  "
},
{
  "id": "sec-fibonacci-8",
  "level": "2",
  "url": "sec-fibonacci.html#sec-fibonacci-8",
  "type": "Checkpoint",
  "number": "2.3.5",
  "title": "",
  "body": " Systematically list all the compositions of for .  "
},
{
  "id": "sec-fibonacci-10",
  "level": "2",
  "url": "sec-fibonacci.html#sec-fibonacci-10",
  "type": "Checkpoint",
  "number": "2.3.6",
  "title": "",
  "body": " Systematically list all the compositions in for .  "
},
{
  "id": "thm-fibonaccicompositions",
  "level": "2",
  "url": "sec-fibonacci.html#thm-fibonaccicompositions",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "",
  "body": "  For all positive integers , we have    "
},
{
  "id": "sec-fibonacci-12",
  "level": "2",
  "url": "sec-fibonacci.html#sec-fibonacci-12",
  "type": "Proof",
  "number": "2.3.1",
  "title": "",
  "body": " We use the technique of writing the set as a disjoint union. Observe that is equal to and therefore Since and , the number of compositions using parts from has the same initial conditions as the Fibonacci numbers starting at and satisfies the same recurrence. Thus, our proof is complete.  "
},
{
  "id": "sec-fibonacci-13",
  "level": "2",
  "url": "sec-fibonacci.html#sec-fibonacci-13",
  "type": "Checkpoint",
  "number": "2.3.8",
  "title": "",
  "body": " Discuss the proof above with your group. Does the disjoint union make sense? Use the lists of compositions that you generated to check this for small values of .  "
},
{
  "id": "thm-fibonacciasbinomials",
  "level": "2",
  "url": "sec-fibonacci.html#thm-fibonacciasbinomials",
  "type": "Theorem",
  "number": "2.3.9",
  "title": "",
  "body": "  For each positive integer , we have    "
},
{
  "id": "sec-fibonacci-16",
  "level": "2",
  "url": "sec-fibonacci.html#sec-fibonacci-16",
  "type": "Checkpoint",
  "number": "2.3.10",
  "title": "",
  "body": " Discuss with your group: how might you prove this? What strategy could you use? How could binomial coefficients be related to compositions using ones and twos?  "
},
{
  "id": "sec-fibonacci-17",
  "level": "2",
  "url": "sec-fibonacci.html#sec-fibonacci-17",
  "type": "Proof",
  "number": "2.3.2",
  "title": "",
  "body": " The number of compositions of using copies of is given by . Since every element of uses at most parts equal to , the sum counts all the compositions.  "
},
{
  "id": "sec-fibonacci-18",
  "level": "2",
  "url": "sec-fibonacci.html#sec-fibonacci-18",
  "type": "Checkpoint",
  "number": "2.3.11",
  "title": "",
  "body": " Discuss this proof. Does it make sense? Why or why not?  "
},
{
  "id": "sec-fibonacci-19",
  "level": "2",
  "url": "sec-fibonacci.html#sec-fibonacci-19",
  "type": "Checkpoint",
  "number": "2.3.12",
  "title": "",
  "body": " Rewrite the proof above using the strategy to express the set as a disjoint union of sets of compositions with a fixed number of 's.  "
},
{
  "id": "sec-pauseforenumerationreflection",
  "level": "1",
  "url": "sec-pauseforenumerationreflection.html",
  "type": "Section",
  "number": "2.4",
  "title": "Pause for Reflection",
  "body": " Pause for Reflection  So far, we have focused our study on three types of combinatorial objects:   binary strings    subsets of a finite set    integer compositions   These objects have naturally led us to identify and study integer sequences and triangles, such as powers of two, binomial coefficients, and Fibonacci numbers.   One aspect of combinatorics and graph theory that makes it have a different feel than courses such as advanced calculus, modern algebra, topology, or geometry is that combinatorics and graph theory tend to initially feel \"broad\" instead of \"deep\". So, rather than picking one topic, such as binomial coefficients, and spending half of the course studying these, we will instead survey a broad range of combinatorial objects. Each family of combinatorial objects that we study will lead us to different integer sequences and triangles, and to different strategies for enumeration. While every subject in Mathematics eventually becomes both broad and deep, there are differences between subjects in how they are perceived by students upon a first encounter.   Let's reflect a bit on how what we have done fits into the philosophical and psychological frameworks for Mathematics due to MacLane and Tall.   Recall the Table from MacLane's book given in . Which of the items in the table have we been engaged with, either consciously or subconsciously, so far?    Recall the picture representing Tall's Three Worlds framework given in . Where in these three worlds of mathematics have we been situated so far with the math we have done?   "
},
{
  "id": "sec-pauseforenumerationreflection-3",
  "level": "2",
  "url": "sec-pauseforenumerationreflection.html#sec-pauseforenumerationreflection-3",
  "type": "Remark",
  "number": "2.4.1",
  "title": "",
  "body": " One aspect of combinatorics and graph theory that makes it have a different feel than courses such as advanced calculus, modern algebra, topology, or geometry is that combinatorics and graph theory tend to initially feel \"broad\" instead of \"deep\". So, rather than picking one topic, such as binomial coefficients, and spending half of the course studying these, we will instead survey a broad range of combinatorial objects. Each family of combinatorial objects that we study will lead us to different integer sequences and triangles, and to different strategies for enumeration. While every subject in Mathematics eventually becomes both broad and deep, there are differences between subjects in how they are perceived by students upon a first encounter.  "
},
{
  "id": "sec-pauseforenumerationreflection-5",
  "level": "2",
  "url": "sec-pauseforenumerationreflection.html#sec-pauseforenumerationreflection-5",
  "type": "Checkpoint",
  "number": "2.4.2",
  "title": "",
  "body": " Recall the Table from MacLane's book given in . Which of the items in the table have we been engaged with, either consciously or subconsciously, so far?  "
},
{
  "id": "sec-pauseforenumerationreflection-6",
  "level": "2",
  "url": "sec-pauseforenumerationreflection.html#sec-pauseforenumerationreflection-6",
  "type": "Checkpoint",
  "number": "2.4.3",
  "title": "",
  "body": " Recall the picture representing Tall's Three Worlds framework given in . Where in these three worlds of mathematics have we been situated so far with the math we have done?  "
},
{
  "id": "sec-permutations",
  "level": "1",
  "url": "sec-permutations.html",
  "type": "Section",
  "number": "2.5",
  "title": "Permutations",
  "body": " Permutations  Our next object of study is permutations of a finite set. Permutations are important in mathematics, computer science, social sciences, and beyond.    A permutation of a finite set is a bijection from to itself. The set of permutations of is denoted by and is called the symmetric group on elements .    Since a permutation in is a bijection, it is a function from to itself. There are multiple ways to represent a permutation. At first, we will use one-line notation . Given a permutation , which is a bijection we define and then the one-line notation for is    Suppose is defined by Then the one-line notation for is We would write for this permutation.    Write down all of the elements of for . How do you know that you did not miss any?    What strategy\/strategies did you develop to systematically list the elements of the symmetric group?   Recall that is the factorial of .         We will give two proofs, one using combinatorial reasoning, and one using recursion.   Combinatorial Reasoning Proof of  For any permutation , can be any of . Thus, there are choices for . Once is known, then can be any of the remaining values, and there are possible values remaining. Thus, there are possibilities for . Continuing in this way, we have possibilities for , then possibilities for , etc., and so on until there is only one possible value for . Thus, there are permutations in .    Discuss this proof. Does it make sense? Why or why not? Verify that your understanding is correct by working through one or two small examples.    Do you like this proof? Why or why not?    Recursive Proof of  First, we can check that this is true for small values of . So, we will use a strategy we have used before: use that this is true for to deduce that it is true for , then use that it is true for to deduce that it is true for , and so on. In this way, we will show it is true for every .  For each , the value is at some position in . Let be the set of permutations in with , which we can also write as: Since is in only one position in each permutation, we have that Therefore, For any , removing from each permutation in results in a copy of . Thus, is obtained by taking and inserting an in the -th position of each permutation. Thus, for every , and hence     Discuss this proof. Does the proof strategy make sense? Why or why not? Clarify any points of confusion by working through one or two small examples.    Which of these two proofs do you prefer? Why?   "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "sec-permutations.html#def-permutation",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": "  A permutation of a finite set is a bijection from to itself. The set of permutations of is denoted by and is called the symmetric group on elements .   "
},
{
  "id": "sec-permutations-5",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-5",
  "type": "Example",
  "number": "2.5.2",
  "title": "",
  "body": " Suppose is defined by Then the one-line notation for is We would write for this permutation.  "
},
{
  "id": "sec-permutations-6",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-6",
  "type": "Checkpoint",
  "number": "2.5.3",
  "title": "",
  "body": " Write down all of the elements of for . How do you know that you did not miss any?  "
},
{
  "id": "sec-permutations-7",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-7",
  "type": "Checkpoint",
  "number": "2.5.4",
  "title": "",
  "body": " What strategy\/strategies did you develop to systematically list the elements of the symmetric group?  "
},
{
  "id": "thm-symmetricgroupcardinality",
  "level": "2",
  "url": "sec-permutations.html#thm-symmetricgroupcardinality",
  "type": "Theorem",
  "number": "2.5.5",
  "title": "",
  "body": "      "
},
{
  "id": "sec-permutations-11",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-11",
  "type": "Proof",
  "number": "2.5.1",
  "title": "Combinatorial Reasoning Proof of Theorem 2.5.5.",
  "body": " Combinatorial Reasoning Proof of  For any permutation , can be any of . Thus, there are choices for . Once is known, then can be any of the remaining values, and there are possible values remaining. Thus, there are possibilities for . Continuing in this way, we have possibilities for , then possibilities for , etc., and so on until there is only one possible value for . Thus, there are permutations in .  "
},
{
  "id": "sec-permutations-12",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-12",
  "type": "Checkpoint",
  "number": "2.5.6",
  "title": "",
  "body": " Discuss this proof. Does it make sense? Why or why not? Verify that your understanding is correct by working through one or two small examples.  "
},
{
  "id": "sec-permutations-13",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-13",
  "type": "Checkpoint",
  "number": "2.5.7",
  "title": "",
  "body": " Do you like this proof? Why or why not?  "
},
{
  "id": "sec-permutations-14",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-14",
  "type": "Proof",
  "number": "2.5.2",
  "title": "Recursive Proof of Theorem 2.5.5.",
  "body": " Recursive Proof of  First, we can check that this is true for small values of . So, we will use a strategy we have used before: use that this is true for to deduce that it is true for , then use that it is true for to deduce that it is true for , and so on. In this way, we will show it is true for every .  For each , the value is at some position in . Let be the set of permutations in with , which we can also write as: Since is in only one position in each permutation, we have that Therefore, For any , removing from each permutation in results in a copy of . Thus, is obtained by taking and inserting an in the -th position of each permutation. Thus, for every , and hence   "
},
{
  "id": "sec-permutations-15",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-15",
  "type": "Checkpoint",
  "number": "2.5.8",
  "title": "",
  "body": " Discuss this proof. Does the proof strategy make sense? Why or why not? Clarify any points of confusion by working through one or two small examples.  "
},
{
  "id": "sec-permutations-16",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-16",
  "type": "Checkpoint",
  "number": "2.5.9",
  "title": "",
  "body": " Which of these two proofs do you prefer? Why?  "
},
{
  "id": "sec-cycles",
  "level": "1",
  "url": "sec-cycles.html",
  "type": "Section",
  "number": "2.6",
  "title": "Permutations: Cycle Structure and Derangements",
  "body": " Permutations: Cycle Structure and Derangements  When we write permutations in one-line notation, some feature of the permutation are brought to the surface. However, other features are obscured. Thus, it is useful to have multiple representations of a permutation. Our next representation is called cycle notation .    A cycle in a permutation is a sequence of elements with each satisfying for all and . The length of the cycle is the number of elements in the cycle.     In the permutation , we have the cycle of length three and the cycle of length 1.   A diagram of the cycle .   A diagram of the cycle .      Find all the cycles contained in . Write them in both cycle notation and in diagram form.     Let . We construct the standard cycle representation of a permutation as follows. First, create the cycle containing , with listed first in . Second, create the cycle containing the largest value not in , where the largest value is listed first. Third, create the cycle containing the largest value not in or , where the largest value is listed first. Continue in this fashion until all of the elements of are in a cycle, resulting in cycles , and then write This is the standard cycle representation.     Write in standard cycle representation. Draw the diagrams for all the cycles in .   There are some special permutations that we will need names for:   The identity permutation is the permutation .    An -cycle is a permutation consisting of only one cycle of length .    A cycle of length one in a permutation corresponds to a fixed point , since the cycle in indicates that .    A permutation with a single cycle of length two, and all other cycles of length one, is called a transposition because it exchanges, i.e., transposes, two values in .    A permutation is a derangement if it has no fixed points, i.e., if it has no one-cycles.      Create two examples for each of the definitions above.     There are cycles of length in .     Suppose is an -cycle in standard cycle representation; thus, the cycle begins with . The remaining entries can be any permutation in , and the result follows.   We will finish our survey of cycle structure by answering two questions. The first question is: how many derangements are there in ? The second question is: how many permutations in have exactly cycles in their standard cycle representation?    Let denote the number of derangements in . Then and , and the remaining values satisfy the recursion      Use the recursion above to compute the first ten derangement numbers .    It is straightforward to check that and . Let be a derangement in and consider the value of . We know that . There are now two possible cases.  In the first case, . Thus, the permutation has a two-cycle of the form . There rest of the permutation is a derangement on , and thus there are possible derangements with this structure, since there are possible values of .  In the second case, . Counting derangements satisfying and is equivalent to counting derangements in , since this is the same as counting permutations satisfying and for all (just switch the roles of and ). Since there are possible values of , this gives possible derangements in this case.  Adding the number of possible derangements from the two cases gives the recursive formula in the theorem.    Discuss the above proof. Does it make sense? Why or why not?     For integers , we denote by the number of permutations in with exactly cycles. The numbers are called (signless) Stirling numbers of the first kind . We define and for all and note that for all .     Explain why .     For , the Stirling numbers of the first kind satisfy the recursion      We express the permutations in with exactly cycles as , a disjoint union where are the permutations with contained in a cycle of length one, while are those permutations where is contained in a cycle of length at least two.  For each permutation in , if we remove the one-cycle containing , then what remains is a permutation in with cycles. This accounts for permutations, which is the second summand in our recursion.  For each permutation in , if we remove from the cycle containing it, we obtain a permutation with cycles. Each such can be obtained from different permutations in , since there are positions in where could be inserted to obtain an element of . Thus, there are permutations in , which is the first summand in our recursion.    Discuss the proof above, and clarify any points of confusion by verifying your understanding with small examples.    Use the recurrence for Stirling numbers of the first kind to create the first seven rows of a triangle, similar to the arithmetical triangle for binomial coefficients. Compare your triangle with the one given on the wikipedia page for Stirling numbers of the first kind. .   "
},
{
  "id": "def-cycle",
  "level": "2",
  "url": "sec-cycles.html#def-cycle",
  "type": "Definition",
  "number": "2.6.1",
  "title": "",
  "body": "  A cycle in a permutation is a sequence of elements with each satisfying for all and . The length of the cycle is the number of elements in the cycle.   "
},
{
  "id": "sec-cycles-4",
  "level": "2",
  "url": "sec-cycles.html#sec-cycles-4",
  "type": "Example",
  "number": "2.6.2",
  "title": "",
  "body": " In the permutation , we have the cycle of length three and the cycle of length 1.   A diagram of the cycle .   A diagram of the cycle .    "
},
{
  "id": "sec-cycles-5",
  "level": "2",
  "url": "sec-cycles.html#sec-cycles-5",
  "type": "Checkpoint",
  "number": "2.6.4",
  "title": "",
  "body": " Find all the cycles contained in . Write them in both cycle notation and in diagram form.  "
},
{
  "id": "def-cyclenotation",
  "level": "2",
  "url": "sec-cycles.html#def-cyclenotation",
  "type": "Definition",
  "number": "2.6.5",
  "title": "",
  "body": "  Let . We construct the standard cycle representation of a permutation as follows. First, create the cycle containing , with listed first in . Second, create the cycle containing the largest value not in , where the largest value is listed first. Third, create the cycle containing the largest value not in or , where the largest value is listed first. Continue in this fashion until all of the elements of are in a cycle, resulting in cycles , and then write This is the standard cycle representation.   "
},
{
  "id": "sec-cycles-7",
  "level": "2",
  "url": "sec-cycles.html#sec-cycles-7",
  "type": "Checkpoint",
  "number": "2.6.6",
  "title": "",
  "body": " Write in standard cycle representation. Draw the diagrams for all the cycles in .  "
},
{
  "id": "sec-cycles-9",
  "level": "2",
  "url": "sec-cycles.html#sec-cycles-9",
  "type": "Checkpoint",
  "number": "2.6.7",
  "title": "",
  "body": " Create two examples for each of the definitions above.  "
},
{
  "id": "thm-cyclecount",
  "level": "2",
  "url": "sec-cycles.html#thm-cyclecount",
  "type": "Theorem",
  "number": "2.6.8",
  "title": "",
  "body": "  There are cycles of length in .   "
},
{
  "id": "sec-cycles-11",
  "level": "2",
  "url": "sec-cycles.html#sec-cycles-11",
  "type": "Proof",
  "number": "2.6.1",
  "title": "",
  "body": " Suppose is an -cycle in standard cycle representation; thus, the cycle begins with . The remaining entries can be any permutation in , and the result follows.  "
},
{
  "id": "thm-derangementcount",
  "level": "2",
  "url": "sec-cycles.html#thm-derangementcount",
  "type": "Theorem",
  "number": "2.6.9",
  "title": "",
  "body": "  Let denote the number of derangements in . Then and , and the remaining values satisfy the recursion    "
},
{
  "id": "sec-cycles-14",
  "level": "2",
  "url": "sec-cycles.html#sec-cycles-14",
  "type": "Checkpoint",
  "number": "2.6.10",
  "title": "",
  "body": " Use the recursion above to compute the first ten derangement numbers .  "
},
{
  "id": "sec-cycles-15",
  "level": "2",
  "url": "sec-cycles.html#sec-cycles-15",
  "type": "Proof",
  "number": "2.6.2",
  "title": "",
  "body": " It is straightforward to check that and . Let be a derangement in and consider the value of . We know that . There are now two possible cases.  In the first case, . Thus, the permutation has a two-cycle of the form . There rest of the permutation is a derangement on , and thus there are possible derangements with this structure, since there are possible values of .  In the second case, . Counting derangements satisfying and is equivalent to counting derangements in , since this is the same as counting permutations satisfying and for all (just switch the roles of and ). Since there are possible values of , this gives possible derangements in this case.  Adding the number of possible derangements from the two cases gives the recursive formula in the theorem.  "
},
{
  "id": "sec-cycles-16",
  "level": "2",
  "url": "sec-cycles.html#sec-cycles-16",
  "type": "Checkpoint",
  "number": "2.6.11",
  "title": "",
  "body": " Discuss the above proof. Does it make sense? Why or why not?  "
},
{
  "id": "def-stirlingfirstkind",
  "level": "2",
  "url": "sec-cycles.html#def-stirlingfirstkind",
  "type": "Definition",
  "number": "2.6.12",
  "title": "",
  "body": "  For integers , we denote by the number of permutations in with exactly cycles. The numbers are called (signless) Stirling numbers of the first kind . We define and for all and note that for all .   "
},
{
  "id": "sec-cycles-18",
  "level": "2",
  "url": "sec-cycles.html#sec-cycles-18",
  "type": "Checkpoint",
  "number": "2.6.13",
  "title": "",
  "body": " Explain why .  "
},
{
  "id": "thm-stirlingfirstkindrecurrence",
  "level": "2",
  "url": "sec-cycles.html#thm-stirlingfirstkindrecurrence",
  "type": "Theorem",
  "number": "2.6.14",
  "title": "",
  "body": "  For , the Stirling numbers of the first kind satisfy the recursion    "
},
{
  "id": "sec-cycles-20",
  "level": "2",
  "url": "sec-cycles.html#sec-cycles-20",
  "type": "Proof",
  "number": "2.6.3",
  "title": "",
  "body": " We express the permutations in with exactly cycles as , a disjoint union where are the permutations with contained in a cycle of length one, while are those permutations where is contained in a cycle of length at least two.  For each permutation in , if we remove the one-cycle containing , then what remains is a permutation in with cycles. This accounts for permutations, which is the second summand in our recursion.  For each permutation in , if we remove from the cycle containing it, we obtain a permutation with cycles. Each such can be obtained from different permutations in , since there are positions in where could be inserted to obtain an element of . Thus, there are permutations in , which is the first summand in our recursion.  "
},
{
  "id": "sec-cycles-21",
  "level": "2",
  "url": "sec-cycles.html#sec-cycles-21",
  "type": "Checkpoint",
  "number": "2.6.15",
  "title": "",
  "body": " Discuss the proof above, and clarify any points of confusion by verifying your understanding with small examples.  "
},
{
  "id": "sec-cycles-22",
  "level": "2",
  "url": "sec-cycles.html#sec-cycles-22",
  "type": "Checkpoint",
  "number": "2.6.16",
  "title": "",
  "body": " Use the recurrence for Stirling numbers of the first kind to create the first seven rows of a triangle, similar to the arithmetical triangle for binomial coefficients. Compare your triangle with the one given on the wikipedia page for Stirling numbers of the first kind. .  "
},
{
  "id": "sec-inversions",
  "level": "1",
  "url": "sec-inversions.html",
  "type": "Section",
  "number": "2.7",
  "title": "Permutations: Inversions and Descents",
  "body": " Permutations: Inversions and Descents  A fundamental question about a permutation is to ask how much the permutation is \"out of order\" from the identity . One of the approaches to answering this question is to consider when a pair of entries in the one-line notation for the permutation are reversed in order. This leads to the idea of an inversion.    Let be a permutation. If and , then we say that is an inversion in . Let denote the set of inversions in .     List all the inversions in . How many inversions are there?    What is the largest possible number of inversions for a permutation in ?   The number of permutations in with inversions can be computed recursively as follows.    Let denote the number of permutations in with inversions. Then is defined to be , and , and for and . Further,      Verify that this recursion holds for .    The base cases is defined to be , and , and for and follow directly from the definition of inversion. To prove the recurrence, observe that every permutation in is obtainable from a permutation by inserting at some point in the one-line representation of . Inserting at the end of adds inversions. Inserting one place from the end adds inversion. Similarly, inserting to the position places from the end adds inversions. In order to obtain a permutation with inversions, one must insert to the position places from the end in a permutation with inversions. The recursion counts the number of such permutations for each .    Discuss this proof. What makes sense? Why? What are points of confusion? What is the source of the confusion?   Using inversions, we can encode a permutation in a new way as a vector in     Let be the map that sets where is the number of entries to the left of that are greater than , when using the one-line notation for . Equivalently, is the number of pairs in with second entry . We call the inversion table for .     Verify that the inversion table for is .    What is the inversion table for ? Remember that the inversion table is a vector.     The map sending a permutation to its inversion table is a bijection.     We first show that exists. Given a vector , we first write by itself. Second, we place , where if then we place it before , and if then we place it after . Continue in this way, where we inductively assume that have all been placed in such a way that the partially constructed word has inversions counted by . Next, insert so that there are elements in the word (so far) to its left.  By construction, we have that this map sends to a permutation with . To see that is one-to-one, note that if , then some . Thus, is placed in a different order relative to for the two corresponding permutations. Thus, those permutations are different, and hence is one-to-one and well-defined. Since , it follows that is a bijection.    Apply the algorithm described in the proof above to the inversion table . (You should get the permutation .)    Discuss the proof above. What are points of confusion? What does or does not make sense in the proof?   A special type of inversion occurs when the entries of the permutation are next to each other.    For a permutation , if , then we say there is a descent in position . The set of descent positions is denoted . The number of descents in is denoted .  The number of permutations in with descents is called the -Eulerian number and is denoted .     Find and for .    Find the following Eulerian numbers: .     We set . The Eulerian numbers satisfy for and satisfy the recursion      It is immediate that for because the only permutation with descents is the identity and the only permutation with descents is the reverse of the identity, i.e., the identity permutation written backwards.  To see that the recurrence holds, we consider what happens when we start with a permutation with descents and remove from the permutation. If , then one of three situations can occur. The first possibility is that , in which case removing results in a permutation with descents. The second possibility is that , in which case removing results in a permutation with descents. The third possibility is that occurs at either the beginning or end of the word, in which case removing either decreases the number of descents by one or leaves it the same, respectively.  The proof proceeds by reversing this observation. For each permutation in with descents, inserting in the \"middle\" of a descent or at the end of the permutation creates a permutation in with descents, and there are ways to insert into such a permutation. For each permutation in with descents, inserting either at the beginning of the word or in the middle of an ascending pair adds a new descent, creating a permutation in with descents. The recurrence follows.    Discuss this proof. Does it make sense? Why or why not?   "
},
{
  "id": "def-inversion",
  "level": "2",
  "url": "sec-inversions.html#def-inversion",
  "type": "Definition",
  "number": "2.7.1",
  "title": "",
  "body": "  Let be a permutation. If and , then we say that is an inversion in . Let denote the set of inversions in .   "
},
{
  "id": "sec-inversions-4",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-4",
  "type": "Checkpoint",
  "number": "2.7.2",
  "title": "",
  "body": " List all the inversions in . How many inversions are there?  "
},
{
  "id": "sec-inversions-5",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-5",
  "type": "Checkpoint",
  "number": "2.7.3",
  "title": "",
  "body": " What is the largest possible number of inversions for a permutation in ?  "
},
{
  "id": "thm-inversionrecursion",
  "level": "2",
  "url": "sec-inversions.html#thm-inversionrecursion",
  "type": "Theorem",
  "number": "2.7.4",
  "title": "",
  "body": "  Let denote the number of permutations in with inversions. Then is defined to be , and , and for and . Further,    "
},
{
  "id": "sec-inversions-8",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-8",
  "type": "Checkpoint",
  "number": "2.7.5",
  "title": "",
  "body": " Verify that this recursion holds for .  "
},
{
  "id": "sec-inversions-9",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-9",
  "type": "Proof",
  "number": "2.7.1",
  "title": "",
  "body": " The base cases is defined to be , and , and for and follow directly from the definition of inversion. To prove the recurrence, observe that every permutation in is obtainable from a permutation by inserting at some point in the one-line representation of . Inserting at the end of adds inversions. Inserting one place from the end adds inversion. Similarly, inserting to the position places from the end adds inversions. In order to obtain a permutation with inversions, one must insert to the position places from the end in a permutation with inversions. The recursion counts the number of such permutations for each .  "
},
{
  "id": "sec-inversions-10",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-10",
  "type": "Checkpoint",
  "number": "2.7.6",
  "title": "",
  "body": " Discuss this proof. What makes sense? Why? What are points of confusion? What is the source of the confusion?  "
},
{
  "id": "def-inversiontable",
  "level": "2",
  "url": "sec-inversions.html#def-inversiontable",
  "type": "Definition",
  "number": "2.7.7",
  "title": "",
  "body": "  Let be the map that sets where is the number of entries to the left of that are greater than , when using the one-line notation for . Equivalently, is the number of pairs in with second entry . We call the inversion table for .   "
},
{
  "id": "sec-inversions-13",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-13",
  "type": "Checkpoint",
  "number": "2.7.8",
  "title": "",
  "body": " Verify that the inversion table for is .  "
},
{
  "id": "sec-inversions-14",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-14",
  "type": "Checkpoint",
  "number": "2.7.9",
  "title": "",
  "body": " What is the inversion table for ? Remember that the inversion table is a vector.  "
},
{
  "id": "thm-inversiontablebijection",
  "level": "2",
  "url": "sec-inversions.html#thm-inversiontablebijection",
  "type": "Theorem",
  "number": "2.7.10",
  "title": "",
  "body": "  The map sending a permutation to its inversion table is a bijection.   "
},
{
  "id": "sec-inversions-16",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-16",
  "type": "Proof",
  "number": "2.7.2",
  "title": "",
  "body": " We first show that exists. Given a vector , we first write by itself. Second, we place , where if then we place it before , and if then we place it after . Continue in this way, where we inductively assume that have all been placed in such a way that the partially constructed word has inversions counted by . Next, insert so that there are elements in the word (so far) to its left.  By construction, we have that this map sends to a permutation with . To see that is one-to-one, note that if , then some . Thus, is placed in a different order relative to for the two corresponding permutations. Thus, those permutations are different, and hence is one-to-one and well-defined. Since , it follows that is a bijection.  "
},
{
  "id": "sec-inversions-17",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-17",
  "type": "Checkpoint",
  "number": "2.7.11",
  "title": "",
  "body": " Apply the algorithm described in the proof above to the inversion table . (You should get the permutation .)  "
},
{
  "id": "sec-inversions-18",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-18",
  "type": "Checkpoint",
  "number": "2.7.12",
  "title": "",
  "body": " Discuss the proof above. What are points of confusion? What does or does not make sense in the proof?  "
},
{
  "id": "def-descent",
  "level": "2",
  "url": "sec-inversions.html#def-descent",
  "type": "Definition",
  "number": "2.7.13",
  "title": "",
  "body": "  For a permutation , if , then we say there is a descent in position . The set of descent positions is denoted . The number of descents in is denoted .  The number of permutations in with descents is called the -Eulerian number and is denoted .   "
},
{
  "id": "sec-inversions-21",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-21",
  "type": "Checkpoint",
  "number": "2.7.14",
  "title": "",
  "body": " Find and for .  "
},
{
  "id": "sec-inversions-22",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-22",
  "type": "Checkpoint",
  "number": "2.7.15",
  "title": "",
  "body": " Find the following Eulerian numbers: .  "
},
{
  "id": "thm-euleriannumberrecursion",
  "level": "2",
  "url": "sec-inversions.html#thm-euleriannumberrecursion",
  "type": "Theorem",
  "number": "2.7.16",
  "title": "",
  "body": "  We set . The Eulerian numbers satisfy for and satisfy the recursion    "
},
{
  "id": "sec-inversions-24",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-24",
  "type": "Proof",
  "number": "2.7.3",
  "title": "",
  "body": " It is immediate that for because the only permutation with descents is the identity and the only permutation with descents is the reverse of the identity, i.e., the identity permutation written backwards.  To see that the recurrence holds, we consider what happens when we start with a permutation with descents and remove from the permutation. If , then one of three situations can occur. The first possibility is that , in which case removing results in a permutation with descents. The second possibility is that , in which case removing results in a permutation with descents. The third possibility is that occurs at either the beginning or end of the word, in which case removing either decreases the number of descents by one or leaves it the same, respectively.  The proof proceeds by reversing this observation. For each permutation in with descents, inserting in the \"middle\" of a descent or at the end of the permutation creates a permutation in with descents, and there are ways to insert into such a permutation. For each permutation in with descents, inserting either at the beginning of the word or in the middle of an ascending pair adds a new descent, creating a permutation in with descents. The recurrence follows.  "
},
{
  "id": "sec-inversions-25",
  "level": "2",
  "url": "sec-inversions.html#sec-inversions-25",
  "type": "Checkpoint",
  "number": "2.7.17",
  "title": "",
  "body": " Discuss this proof. Does it make sense? Why or why not?  "
},
{
  "id": "sec-induction1",
  "level": "1",
  "url": "sec-induction1.html",
  "type": "Section",
  "number": "2.8",
  "title": "Induction: Part 1",
  "body": " Induction: Part 1  Several times in this course we have used a proof technique where we checked simple cases and then showed how we could systematically \"build up\" our argument by using previous steps we had verified to prove that later steps hold. This technique is called proof by induction .  There are various flavors of induction, including the \"method of descent\", \"strong induction\", \"weak induction\", etc. We will continue to discuss various aspects of these distinctions, but what is more important than learning names is to learn and understand the key idea of induction:   verify small cases, then use those small cases to verify the next case, then use that new case to verify the next case, then use that new case to verify the next case, and then carefully explain why you can always continue this process for a specific problem or proof.     Let's work through some examples.   Consider the following sequence: The values of this sequence are:   1.41421356237310    1.84775906502257    1.96157056080646    1.99036945334439    1.99759091241034    1.99939763739241    1.99984940367829    1.99996235056520    1.99999058761915    1.99999058761915   What do you think an upper bound for this sequence is? Why do you think this upper bound holds? How would you go about showing that this upper bound holds?    Compute the values of for . What do you think the value of the -th term of this sequence is? Why do you think your answer is correct? How would you go about proving that your answer is always correct, even when is a positive integer beyond the scope of human comprehension?    Consider any map formed by drawing straight lines in the plane, each line extending infinitely in both directions, to represent the boundaries of the regions. Some regions will be compact and bounded, others will be unbounded and go off to infinity. Is it always possible to color the regions using only two colors, say white and gray, in such a way that white and gray regions never share an edge? In other words, the edges between regions always have white on one side and gray on the other side. If yes, why? If no, why not?   These three checkpoint exercises demonstrate how you can use a small number of initial data points to make a conjecture, then look at how the structure of the problem leads you to use the same pattern of logical argument repeatedly. This \"pattern of logical argument\" is the inductive step of an induction argument, while the small initial data points are the base cases of the inductive argument. We are now in a position to give a precise statement of the principle of mathematical induction.   Principle of Mathematical Induction   Suppose we have a sequence of mathematical statements (one for each natural number). If the following two properties hold, then is true for every natural number :   The base case : is true.    The induction step : If is true, then is true.        Discuss how the structure of the Principle of Mathematical Induction applies to each of the three checkpoint problems above.   "
},
{
  "id": "sec-induction1-5",
  "level": "2",
  "url": "sec-induction1.html#sec-induction1-5",
  "type": "Checkpoint",
  "number": "2.8.1",
  "title": "",
  "body": " Consider the following sequence: The values of this sequence are:   1.41421356237310    1.84775906502257    1.96157056080646    1.99036945334439    1.99759091241034    1.99939763739241    1.99984940367829    1.99996235056520    1.99999058761915    1.99999058761915   What do you think an upper bound for this sequence is? Why do you think this upper bound holds? How would you go about showing that this upper bound holds?  "
},
{
  "id": "sec-induction1-6",
  "level": "2",
  "url": "sec-induction1.html#sec-induction1-6",
  "type": "Checkpoint",
  "number": "2.8.2",
  "title": "",
  "body": " Compute the values of for . What do you think the value of the -th term of this sequence is? Why do you think your answer is correct? How would you go about proving that your answer is always correct, even when is a positive integer beyond the scope of human comprehension?  "
},
{
  "id": "sec-induction1-7",
  "level": "2",
  "url": "sec-induction1.html#sec-induction1-7",
  "type": "Checkpoint",
  "number": "2.8.3",
  "title": "",
  "body": " Consider any map formed by drawing straight lines in the plane, each line extending infinitely in both directions, to represent the boundaries of the regions. Some regions will be compact and bounded, others will be unbounded and go off to infinity. Is it always possible to color the regions using only two colors, say white and gray, in such a way that white and gray regions never share an edge? In other words, the edges between regions always have white on one side and gray on the other side. If yes, why? If no, why not?  "
},
{
  "id": "principle-induction",
  "level": "2",
  "url": "sec-induction1.html#principle-induction",
  "type": "Principle",
  "number": "2.8.4",
  "title": "Principle of Mathematical Induction.",
  "body": " Principle of Mathematical Induction   Suppose we have a sequence of mathematical statements (one for each natural number). If the following two properties hold, then is true for every natural number :   The base case : is true.    The induction step : If is true, then is true.      "
},
{
  "id": "sec-induction1-10",
  "level": "2",
  "url": "sec-induction1.html#sec-induction1-10",
  "type": "Checkpoint",
  "number": "2.8.5",
  "title": "",
  "body": " Discuss how the structure of the Principle of Mathematical Induction applies to each of the three checkpoint problems above.  "
},
{
  "id": "sec-classificationproblems",
  "level": "1",
  "url": "sec-classificationproblems.html",
  "type": "Section",
  "number": "3.1",
  "title": "Classification Problems",
  "body": " Classification Problems  The first unit of this course studied the question of enumeration : How many ____ are there? There are many ways to investigate enumeration problems, including such techniques as generating functions, asymptotic analysis, Polya enumeration, etc. The two techniques we focused on were bijections and recursions, which are fundamental to enumeration.  In our next unit, we will focus on the question of classification : Which objects have ____ property? Classification problems have a much different feel than enumeration problems. In particular, while we will sometimes engage in counting problems, when studying classification problems we are much more interested in structure and quality rather than quantity. We will begin by studying classification problems for trees and graphs, and we will end this unit by considering a classification problem involving permutations.  "
},
{
  "id": "sec-graphbasics",
  "level": "1",
  "url": "sec-graphbasics.html",
  "type": "Section",
  "number": "3.2",
  "title": "Graphs and Networks",
  "body": " Graphs and Networks  Many stuctures in the world involve pairwise connections. For example, in a group of people, we could connect each pair of people who are friends. In a city and road network, we can consider two cities connected if there is a road connecting them without any other cities on that road. In a computer network, two computers can be considered connected if they have a direct cable link between them, without any intermediary system.  The mathematical structure that captures the structure of pairwise connection is a graph , also called a network .    A graph  , also called a network , consists of a finite set called the vertices or nodes of and a collection of unordered pairs of elements of called the edges or arcs of .     The complete graph , denoted , is the graph with and every possible edge. Thus, has vertices and edges.   Drawing of .      The Petersen graph is a famous and important graph shown in the figure below. The Petersen graph is particularly noteworthy because it is often a counterexample to conjectures about graphs; if you think something is true, always test your guess on the Petersen graph!   Drawing of the Petersen graph.       For a vertex , we say the degree of is the number of edges in that contain . We denote the degree of a vertex by , where we will write if is clear from context.     Find the degree of each vertex in the graph below:   Example for graph degrees     The first key result regarding graphs is the following.    Given a graph , we have      We count the number of pairs where in two ways. This is a strategy called \"double counting\". First, for each edge, there are two pairs , one for each endpoint of the edge. Thus, the total number of pairs is .  Second, for each vertex, there are pairs , one for each edge containing . Thus, there are a total of such pairs. Since both of these expressions count the same set, they are equal.    Discuss this proof. Does it make sense? Does it make sense why we call this type of proof \"double counting\"?   We can use the result above to prove a fundamental qualitative result about graphs: the handshake lemma.   Handshake Lemma   In any finite graph, there are an even number of vertices of odd degree.     Since , the sum of the degrees is an even number. If there were an odd number of vertices of odd degree, the sum would be odd, which is impossible.   The handshake lemma allows us to obtain statements such as the following.    If every vertex of a graph has odd degree, then the graph has an even number of vertices.    Note that the theorem and corollary above do not tell us anything about how many vertices there are, or how many odd degree vertices there are. So, this is not a theorem or corollary that we can use to count with. However, these results do tell us qualitative information about the relationship between the degrees of a graph, the total number of edges, and limitations on the number of vertices of odd degree.  Another quality of a graph is whether or not it is connected, where by connected we mean the following.    Given a graph :   A path is a finite sequence of edges joining a sequence of vertices.    A trail is a path in which all edges are distinct.    A simple path is a path in which all vertices are distinct.    A circuit is a trail in which the first and last vertices are equal.    A cycle is a trail in which only the first and last vertices are equal. A cycle with edges is called a -cycle.    A graph is connected if there is a path between every pair of vertices.        Below are examples of a connected and disconnected graph. In the connected graph, for each of the following sequences of vertices, identify which are a path, trail, simple path, circuit, or cycle.                              Example of a connected graph.     Example of a disconnected graph.     There are algorithms known that will generate all connected graphs on a fixed number of vertices, but these are difficult. The number of connected graphs, with vertices that are not labeled, on vertices for is , and more information can be found in the Online Encyclopedia of Integer Sequences:   "
},
{
  "id": "def-graph",
  "level": "2",
  "url": "sec-graphbasics.html#def-graph",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "  A graph  , also called a network , consists of a finite set called the vertices or nodes of and a collection of unordered pairs of elements of called the edges or arcs of .   "
},
{
  "id": "sec-graphbasics-5",
  "level": "2",
  "url": "sec-graphbasics.html#sec-graphbasics-5",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": " The complete graph , denoted , is the graph with and every possible edge. Thus, has vertices and edges.   Drawing of .    "
},
{
  "id": "sec-graphbasics-6",
  "level": "2",
  "url": "sec-graphbasics.html#sec-graphbasics-6",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": " The Petersen graph is a famous and important graph shown in the figure below. The Petersen graph is particularly noteworthy because it is often a counterexample to conjectures about graphs; if you think something is true, always test your guess on the Petersen graph!   Drawing of the Petersen graph.    "
},
{
  "id": "def-degree",
  "level": "2",
  "url": "sec-graphbasics.html#def-degree",
  "type": "Definition",
  "number": "3.2.6",
  "title": "",
  "body": "  For a vertex , we say the degree of is the number of edges in that contain . We denote the degree of a vertex by , where we will write if is clear from context.   "
},
{
  "id": "sec-graphbasics-8",
  "level": "2",
  "url": "sec-graphbasics.html#sec-graphbasics-8",
  "type": "Checkpoint",
  "number": "3.2.7",
  "title": "",
  "body": " Find the degree of each vertex in the graph below:   Example for graph degrees    "
},
{
  "id": "thm-degreesumformula",
  "level": "2",
  "url": "sec-graphbasics.html#thm-degreesumformula",
  "type": "Theorem",
  "number": "3.2.9",
  "title": "",
  "body": "  Given a graph , we have    "
},
{
  "id": "sec-graphbasics-11",
  "level": "2",
  "url": "sec-graphbasics.html#sec-graphbasics-11",
  "type": "Proof",
  "number": "3.2.1",
  "title": "",
  "body": " We count the number of pairs where in two ways. This is a strategy called \"double counting\". First, for each edge, there are two pairs , one for each endpoint of the edge. Thus, the total number of pairs is .  Second, for each vertex, there are pairs , one for each edge containing . Thus, there are a total of such pairs. Since both of these expressions count the same set, they are equal.  "
},
{
  "id": "sec-graphbasics-12",
  "level": "2",
  "url": "sec-graphbasics.html#sec-graphbasics-12",
  "type": "Checkpoint",
  "number": "3.2.10",
  "title": "",
  "body": " Discuss this proof. Does it make sense? Does it make sense why we call this type of proof \"double counting\"?  "
},
{
  "id": "thm-handshake",
  "level": "2",
  "url": "sec-graphbasics.html#thm-handshake",
  "type": "Theorem",
  "number": "3.2.11",
  "title": "Handshake Lemma.",
  "body": " Handshake Lemma   In any finite graph, there are an even number of vertices of odd degree.   "
},
{
  "id": "sec-graphbasics-15",
  "level": "2",
  "url": "sec-graphbasics.html#sec-graphbasics-15",
  "type": "Proof",
  "number": "3.2.2",
  "title": "",
  "body": " Since , the sum of the degrees is an even number. If there were an odd number of vertices of odd degree, the sum would be odd, which is impossible.  "
},
{
  "id": "cor-odddegreegraphs",
  "level": "2",
  "url": "sec-graphbasics.html#cor-odddegreegraphs",
  "type": "Corollary",
  "number": "3.2.12",
  "title": "",
  "body": "  If every vertex of a graph has odd degree, then the graph has an even number of vertices.   "
},
{
  "id": "def-pathcircuitconnected",
  "level": "2",
  "url": "sec-graphbasics.html#def-pathcircuitconnected",
  "type": "Definition",
  "number": "3.2.13",
  "title": "",
  "body": "  Given a graph :   A path is a finite sequence of edges joining a sequence of vertices.    A trail is a path in which all edges are distinct.    A simple path is a path in which all vertices are distinct.    A circuit is a trail in which the first and last vertices are equal.    A cycle is a trail in which only the first and last vertices are equal. A cycle with edges is called a -cycle.    A graph is connected if there is a path between every pair of vertices.      "
},
{
  "id": "sec-graphbasics-21",
  "level": "2",
  "url": "sec-graphbasics.html#sec-graphbasics-21",
  "type": "Checkpoint",
  "number": "3.2.14",
  "title": "",
  "body": " Below are examples of a connected and disconnected graph. In the connected graph, for each of the following sequences of vertices, identify which are a path, trail, simple path, circuit, or cycle.                              Example of a connected graph.     Example of a disconnected graph.    "
},
{
  "id": "sec-trees",
  "level": "1",
  "url": "sec-trees.html",
  "type": "Section",
  "number": "3.3",
  "title": "Trees",
  "body": " Trees  The simplest connected graphs are the connected graphs that have no cycles. There are many different descriptions of such graphs, meaning that there are many ways to classify this family of graphs.    A graph is acyclic if it has no cycles. A graph on vertices that is connected and acyclic is called a tree .     which of the following graphs is a tree?  Graph 1.     Graph 2.     Graph 3.       Determining whether or not a graph is a tree is not always easy. For example, the following graph is given both visually and as a list of edges. Is the following graph a tree? How might you verify that your answer is correct? Discuss with your group.   Graph 4.    Edges in this graph: (0, 32), (1, 6), (1, 38), (2, 36), (3, 25), (4, 23), (4, 28), (5, 11), (5, 27), (5, 14), (7, 26), (7, 14), (8, 19), (8, 23), (8, 26), (9, 18), (10, 28), (12, 18), (13, 39), (15, 38), (15, 31), (16, 35), (16, 30), (17, 25), (18, 30), (19, 21), (19, 24), (20, 27), (21, 32), (22, 37), (25, 29), (26, 38), (26, 31), (27, 34), (27, 35), (27, 29), (29, 36), (29, 37), (31, 39), (32, 36), (33, 39)   The following theorem lists multiple alternative characterizations of (finite) trees.    Let be a graph on vertices. The following are equivalent.    is a tree, i.e., is connected and acyclic.     is connected and has edges.     is acyclic and has edges.       What this theorem says is that is a tree if it has any two of the properties of being connected, acyclic, or having edges when it has vertices.   Verify that each of the above conditions hold for the following tree.  A tree.      In order to prove , we will need some preliminary definitions and lemmas.    Given a graph and a vertex , the connected component of containing is the set of all vertices that are connected to by a path in . The set of connected components partitions .     Identify the connected components in the following graph.  A graph with multiple connected components.        Adding an edge to a graph can reduce the number of components by at most one.     There are two cases to consider. Suppose we add a new edge to . If and are already in the same connected component, then adding does not change any components. However, if and are in different components, then adding will merge the components containing and into a single component, since now any vertex connected by a path to is also connected by a path to . Thus, this will reduce the number of connected components by one.    Discuss the proof of . Does it make sense? Why or why not? Create a small example to verify that your understanding is correct.     Any connected graph on vertices has at least edges.     Suppose is a graph on vertex set . We construct by starting with the empty graph, i.e., the graph on with no edges, and adding the edges of one at a time. Note that in this case, each individual vertex forms a connected component, hence the empty graph has components. In order for to be connected, every element in must be connected to every other element by a path. Thus, in the process of adding edges one at a time to create , we must merge components into a single component. Each time we add an edge, either there are no components merged or the number of components reduces by one. In order to get from components to one component, we must merge times, which requires at least edges be added.    Discuss the proof of . Does it make sense? Why or why not?     Adding an edge to a connected graph on vertices creates at least one new cycle.     Suppose is a connected graph and is a new edge added to . There exists a simple path in from to , and connecting the endpoints of the path using creates a cycle.    Discuss the proof of . Does it make sense? Why or why not?    Proof of  We will use the following logical implications to prove the classification:  Logical implications to establish equivalence.     First, we will prove that if is connected and acyclic then it also has edges. Construct by starting with the empty graph and adding one edge at a time. Each time we add an edge, if the edge bridges two different connected components, then it merges those components and does not introduce any new cycle. If an edge is added where both of the endpoints of the edge are in the same connected component, then by this introduces a cycle. However, is acyclic, and therefore this cannot happen. Thus, every new edge added results in a merging of components and by the argument in , this results in edges.  Second, we will prove that if is connected with edges, then it is acyclic. Suppose that does contain a cycle . Then removing one of the edges in will not disconnect , since the endpoints of the edge are still connected by the remaining edges of . However, this will result in a graph that is connected with edges, which is impossible by . Therefore, the original graph must be acyclic.  Finally, we will prove that if is acyclic with edges, then it is connected. We again construct by starting with the empty graph and adding edges one at a time. Each time we add an edge, we must add an edge that results in the merging of two connected components, as otherwise implies that there is a cycle, which is not possible since is acyclic. Therefore, we add edges, and each of these edges results in the merging of two connected components. We begin with the empty graph, having components, and thus the result is a graph with one component, which is the same as being connected.    Discuss the proof of . Does it make sense? Why or why not?   There is a lovely corollary to this theorem and the degree sum theorem, which involves the idea of a leaf.    A vertex of degree one in a graph is called a leaf .      Any tree has at least two leaves.     If is a tree, it has vertices and edges. By the degree sum formula, , we have that Since is a tree and is therefore connected, every vertex has degree at least one. Suppose that every vertex has degree at least two. Then This would be a contradiction to the degree sum formula. So, at least two of the vertices must have degree one in the tree.   Observe that we can now solve the problem given in . There are edges in that graph, but there are vertices, and thus it is not a tree.  "
},
{
  "id": "def-treeacyclicconnected",
  "level": "2",
  "url": "sec-trees.html#def-treeacyclicconnected",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  A graph is acyclic if it has no cycles. A graph on vertices that is connected and acyclic is called a tree .   "
},
{
  "id": "sec-trees-4",
  "level": "2",
  "url": "sec-trees.html#sec-trees-4",
  "type": "Checkpoint",
  "number": "3.3.2",
  "title": "",
  "body": " which of the following graphs is a tree?  Graph 1.     Graph 2.     Graph 3.     "
},
{
  "id": "ex-hardnotatreecheckpoint",
  "level": "2",
  "url": "sec-trees.html#ex-hardnotatreecheckpoint",
  "type": "Checkpoint",
  "number": "3.3.6",
  "title": "",
  "body": " Determining whether or not a graph is a tree is not always easy. For example, the following graph is given both visually and as a list of edges. Is the following graph a tree? How might you verify that your answer is correct? Discuss with your group.   Graph 4.    Edges in this graph: (0, 32), (1, 6), (1, 38), (2, 36), (3, 25), (4, 23), (4, 28), (5, 11), (5, 27), (5, 14), (7, 26), (7, 14), (8, 19), (8, 23), (8, 26), (9, 18), (10, 28), (12, 18), (13, 39), (15, 38), (15, 31), (16, 35), (16, 30), (17, 25), (18, 30), (19, 21), (19, 24), (20, 27), (21, 32), (22, 37), (25, 29), (26, 38), (26, 31), (27, 34), (27, 35), (27, 29), (29, 36), (29, 37), (31, 39), (32, 36), (33, 39)  "
},
{
  "id": "thm-treeclassification",
  "level": "2",
  "url": "sec-trees.html#thm-treeclassification",
  "type": "Theorem",
  "number": "3.3.8",
  "title": "",
  "body": "  Let be a graph on vertices. The following are equivalent.    is a tree, i.e., is connected and acyclic.     is connected and has edges.     is acyclic and has edges.      "
},
{
  "id": "sec-trees-9",
  "level": "2",
  "url": "sec-trees.html#sec-trees-9",
  "type": "Checkpoint",
  "number": "3.3.9",
  "title": "",
  "body": " Verify that each of the above conditions hold for the following tree.  A tree.     "
},
{
  "id": "def-connectedcomponents",
  "level": "2",
  "url": "sec-trees.html#def-connectedcomponents",
  "type": "Definition",
  "number": "3.3.11",
  "title": "",
  "body": "  Given a graph and a vertex , the connected component of containing is the set of all vertices that are connected to by a path in . The set of connected components partitions .   "
},
{
  "id": "sec-trees-12",
  "level": "2",
  "url": "sec-trees.html#sec-trees-12",
  "type": "Checkpoint",
  "number": "3.3.12",
  "title": "",
  "body": " Identify the connected components in the following graph.  A graph with multiple connected components.     "
},
{
  "id": "lem-connectedcomponentsreduction",
  "level": "2",
  "url": "sec-trees.html#lem-connectedcomponentsreduction",
  "type": "Lemma",
  "number": "3.3.14",
  "title": "",
  "body": "  Adding an edge to a graph can reduce the number of components by at most one.   "
},
{
  "id": "sec-trees-14",
  "level": "2",
  "url": "sec-trees.html#sec-trees-14",
  "type": "Proof",
  "number": "3.3.1",
  "title": "",
  "body": " There are two cases to consider. Suppose we add a new edge to . If and are already in the same connected component, then adding does not change any components. However, if and are in different components, then adding will merge the components containing and into a single component, since now any vertex connected by a path to is also connected by a path to . Thus, this will reduce the number of connected components by one.  "
},
{
  "id": "sec-trees-15",
  "level": "2",
  "url": "sec-trees.html#sec-trees-15",
  "type": "Checkpoint",
  "number": "3.3.15",
  "title": "",
  "body": " Discuss the proof of . Does it make sense? Why or why not? Create a small example to verify that your understanding is correct.  "
},
{
  "id": "lem-connectedgraphedgelowerbound",
  "level": "2",
  "url": "sec-trees.html#lem-connectedgraphedgelowerbound",
  "type": "Lemma",
  "number": "3.3.16",
  "title": "",
  "body": "  Any connected graph on vertices has at least edges.   "
},
{
  "id": "sec-trees-17",
  "level": "2",
  "url": "sec-trees.html#sec-trees-17",
  "type": "Proof",
  "number": "3.3.2",
  "title": "",
  "body": " Suppose is a graph on vertex set . We construct by starting with the empty graph, i.e., the graph on with no edges, and adding the edges of one at a time. Note that in this case, each individual vertex forms a connected component, hence the empty graph has components. In order for to be connected, every element in must be connected to every other element by a path. Thus, in the process of adding edges one at a time to create , we must merge components into a single component. Each time we add an edge, either there are no components merged or the number of components reduces by one. In order to get from components to one component, we must merge times, which requires at least edges be added.  "
},
{
  "id": "sec-trees-18",
  "level": "2",
  "url": "sec-trees.html#sec-trees-18",
  "type": "Checkpoint",
  "number": "3.3.17",
  "title": "",
  "body": " Discuss the proof of . Does it make sense? Why or why not?  "
},
{
  "id": "lem-addingedgemakescycle",
  "level": "2",
  "url": "sec-trees.html#lem-addingedgemakescycle",
  "type": "Lemma",
  "number": "3.3.18",
  "title": "",
  "body": "  Adding an edge to a connected graph on vertices creates at least one new cycle.   "
},
{
  "id": "sec-trees-20",
  "level": "2",
  "url": "sec-trees.html#sec-trees-20",
  "type": "Proof",
  "number": "3.3.3",
  "title": "",
  "body": " Suppose is a connected graph and is a new edge added to . There exists a simple path in from to , and connecting the endpoints of the path using creates a cycle.  "
},
{
  "id": "sec-trees-21",
  "level": "2",
  "url": "sec-trees.html#sec-trees-21",
  "type": "Checkpoint",
  "number": "3.3.19",
  "title": "",
  "body": " Discuss the proof of . Does it make sense? Why or why not?  "
},
{
  "id": "sec-trees-22",
  "level": "2",
  "url": "sec-trees.html#sec-trees-22",
  "type": "Proof",
  "number": "3.3.4",
  "title": "Proof of Theorem 3.3.8.",
  "body": " Proof of  We will use the following logical implications to prove the classification:  Logical implications to establish equivalence.     First, we will prove that if is connected and acyclic then it also has edges. Construct by starting with the empty graph and adding one edge at a time. Each time we add an edge, if the edge bridges two different connected components, then it merges those components and does not introduce any new cycle. If an edge is added where both of the endpoints of the edge are in the same connected component, then by this introduces a cycle. However, is acyclic, and therefore this cannot happen. Thus, every new edge added results in a merging of components and by the argument in , this results in edges.  Second, we will prove that if is connected with edges, then it is acyclic. Suppose that does contain a cycle . Then removing one of the edges in will not disconnect , since the endpoints of the edge are still connected by the remaining edges of . However, this will result in a graph that is connected with edges, which is impossible by . Therefore, the original graph must be acyclic.  Finally, we will prove that if is acyclic with edges, then it is connected. We again construct by starting with the empty graph and adding edges one at a time. Each time we add an edge, we must add an edge that results in the merging of two connected components, as otherwise implies that there is a cycle, which is not possible since is acyclic. Therefore, we add edges, and each of these edges results in the merging of two connected components. We begin with the empty graph, having components, and thus the result is a graph with one component, which is the same as being connected.  "
},
{
  "id": "sec-trees-23",
  "level": "2",
  "url": "sec-trees.html#sec-trees-23",
  "type": "Checkpoint",
  "number": "3.3.21",
  "title": "",
  "body": " Discuss the proof of . Does it make sense? Why or why not?  "
},
{
  "id": "def-leaf",
  "level": "2",
  "url": "sec-trees.html#def-leaf",
  "type": "Definition",
  "number": "3.3.22",
  "title": "",
  "body": "  A vertex of degree one in a graph is called a leaf .   "
},
{
  "id": "cor-treeshaveleaves",
  "level": "2",
  "url": "sec-trees.html#cor-treeshaveleaves",
  "type": "Corollary",
  "number": "3.3.23",
  "title": "",
  "body": "  Any tree has at least two leaves.   "
},
{
  "id": "sec-trees-27",
  "level": "2",
  "url": "sec-trees.html#sec-trees-27",
  "type": "Proof",
  "number": "3.3.5",
  "title": "",
  "body": " If is a tree, it has vertices and edges. By the degree sum formula, , we have that Since is a tree and is therefore connected, every vertex has degree at least one. Suppose that every vertex has degree at least two. Then This would be a contradiction to the degree sum formula. So, at least two of the vertices must have degree one in the tree.  "
},
{
  "id": "sec-euleriancircuits",
  "level": "1",
  "url": "sec-euleriancircuits.html",
  "type": "Section",
  "number": "3.4",
  "title": "Eulerian Circuits",
  "body": " Eulerian Circuits  We will now consider one of the oldest results in graph theory, which originally was considered by Leonhard Euler in 1736. However, Euler considered this problem in a very different context and language, see for more details.    Given a finite graph , an Eulerian circuit is a circuit in that crosses every edge exactly one time and is incident to every vertex in the graph. If has an Eulerian circuit, then we say that is an Eulerian graph .     Find an Eulerian circuit in the following graph.   Example of an Eulerian graph.      Prove that the following graph does not contain an Eulerian circuit.   Example of an non-Eulerian graph.     We are now prepared to classify the graphs that are Eulerian.    A finite graph is Eulerian if and only if it is connected and every vertex in has even degree.     We first show that if is Eulerian, then every vertex has even degree and the graph is connected. We know that if contains a circuit traversing every edge, then it must be connected. To show even degree, suppose that we have an Eulerian circuit , which passes through every edge exactly once. We will start at an initial vertex and we will follow , adding to the degree of each vertex whenever we pass through an edge adjacent to it. When first departs from , we add one to the degree of . Every time we pass through a vertex while traversing , we add two to the degree of that vertex. When we return to for the final time to end the circuit, we add one more to the degree of . Thus, the degree of every vertex is a sum of 's, and hence every vertex has even degree.  Second, we will show that if every vertex in has even degree and is connected, then the graph is Eulerian. We will give a proof that is a recursive algorithm. Pick any vertex of and begin to randomly create a path through the graph, never using the same edge twice. Stop when you return to a vertex that you have already passed through. It is impossible to become ``stuck'' at a vertex during this random walk, because since the degree is even, if you arrive at a vertex along an edge, there is always another edge that you can depart along. The circuit that you create starting and ending at we will call . Remove the edges in from , leaving a graph which might consist of multiple connected components. Observe that since every vertex in has even degree, the graph has every vertex of even degree as well. Pick a vertex in and repeat this process, yielding a circuit and the graph obtained by removing the edges in from . Repeating this process, we obtain a sequence of Eulerian circuits , , ,..., . Note that this process must end because there are only finitely many edges in . Further, observe that the edge set of is the disjoint union of the edges in this sequence of circuits.  What remains is to combine the circuits into a single Eulerian circuit of . Start with . Since is connected, there must be a vertex of that is shared by another circuit . Cut each of and at and combine them to create one larger Eulerian circuit. Replace with this circuit and delete from our list. Continue this process until there is only one circuit left, and this produces an Eulerian circuit for .    Apply the logic of this proof to the special case of the following graph, where you must start with given by the circuit .   Example of an Eulerian graph.      Apply the logic of this proof to the special case of the following graph.   Example of an Eulerian graph.      What parts of this proof make sense to you? Why? What parts of this proof do not make sense to you? Why?   "
},
{
  "id": "def-euleriancircuit",
  "level": "2",
  "url": "sec-euleriancircuits.html#def-euleriancircuit",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  Given a finite graph , an Eulerian circuit is a circuit in that crosses every edge exactly one time and is incident to every vertex in the graph. If has an Eulerian circuit, then we say that is an Eulerian graph .   "
},
{
  "id": "sec-euleriancircuits-4",
  "level": "2",
  "url": "sec-euleriancircuits.html#sec-euleriancircuits-4",
  "type": "Checkpoint",
  "number": "3.4.2",
  "title": "",
  "body": " Find an Eulerian circuit in the following graph.   Example of an Eulerian graph.    "
},
{
  "id": "sec-euleriancircuits-5",
  "level": "2",
  "url": "sec-euleriancircuits.html#sec-euleriancircuits-5",
  "type": "Checkpoint",
  "number": "3.4.4",
  "title": "",
  "body": " Prove that the following graph does not contain an Eulerian circuit.   Example of an non-Eulerian graph.    "
},
{
  "id": "thm-eulerianclassification",
  "level": "2",
  "url": "sec-euleriancircuits.html#thm-eulerianclassification",
  "type": "Theorem",
  "number": "3.4.6",
  "title": "",
  "body": "  A finite graph is Eulerian if and only if it is connected and every vertex in has even degree.   "
},
{
  "id": "sec-euleriancircuits-8",
  "level": "2",
  "url": "sec-euleriancircuits.html#sec-euleriancircuits-8",
  "type": "Proof",
  "number": "3.4.1",
  "title": "",
  "body": " We first show that if is Eulerian, then every vertex has even degree and the graph is connected. We know that if contains a circuit traversing every edge, then it must be connected. To show even degree, suppose that we have an Eulerian circuit , which passes through every edge exactly once. We will start at an initial vertex and we will follow , adding to the degree of each vertex whenever we pass through an edge adjacent to it. When first departs from , we add one to the degree of . Every time we pass through a vertex while traversing , we add two to the degree of that vertex. When we return to for the final time to end the circuit, we add one more to the degree of . Thus, the degree of every vertex is a sum of 's, and hence every vertex has even degree.  Second, we will show that if every vertex in has even degree and is connected, then the graph is Eulerian. We will give a proof that is a recursive algorithm. Pick any vertex of and begin to randomly create a path through the graph, never using the same edge twice. Stop when you return to a vertex that you have already passed through. It is impossible to become ``stuck'' at a vertex during this random walk, because since the degree is even, if you arrive at a vertex along an edge, there is always another edge that you can depart along. The circuit that you create starting and ending at we will call . Remove the edges in from , leaving a graph which might consist of multiple connected components. Observe that since every vertex in has even degree, the graph has every vertex of even degree as well. Pick a vertex in and repeat this process, yielding a circuit and the graph obtained by removing the edges in from . Repeating this process, we obtain a sequence of Eulerian circuits , , ,..., . Note that this process must end because there are only finitely many edges in . Further, observe that the edge set of is the disjoint union of the edges in this sequence of circuits.  What remains is to combine the circuits into a single Eulerian circuit of . Start with . Since is connected, there must be a vertex of that is shared by another circuit . Cut each of and at and combine them to create one larger Eulerian circuit. Replace with this circuit and delete from our list. Continue this process until there is only one circuit left, and this produces an Eulerian circuit for .  "
},
{
  "id": "sec-euleriancircuits-9",
  "level": "2",
  "url": "sec-euleriancircuits.html#sec-euleriancircuits-9",
  "type": "Checkpoint",
  "number": "3.4.7",
  "title": "",
  "body": " Apply the logic of this proof to the special case of the following graph, where you must start with given by the circuit .   Example of an Eulerian graph.    "
},
{
  "id": "sec-euleriancircuits-10",
  "level": "2",
  "url": "sec-euleriancircuits.html#sec-euleriancircuits-10",
  "type": "Checkpoint",
  "number": "3.4.9",
  "title": "",
  "body": " Apply the logic of this proof to the special case of the following graph.   Example of an Eulerian graph.    "
},
{
  "id": "sec-euleriancircuits-11",
  "level": "2",
  "url": "sec-euleriancircuits.html#sec-euleriancircuits-11",
  "type": "Checkpoint",
  "number": "3.4.11",
  "title": "",
  "body": " What parts of this proof make sense to you? Why? What parts of this proof do not make sense to you? Why?  "
},
{
  "id": "sec-prufercayley",
  "level": "1",
  "url": "sec-prufercayley.html",
  "type": "Section",
  "number": "3.5",
  "title": "Prufer Codes and Cayley’s Theorem",
  "body": " Prufer Codes and Cayley's Theorem  Our next classification goal is to classify all labeled trees on vertices. This is an example of classifying the spanning trees in the complete graph, defined as follows.    Given a finite connected graph , a spanning tree of is a tree on the same vertex set as where the edge set of is contained in the edge set of , i.e., .     The cycle graph on vertices, denoted , is the graph on vertex set with edge set In the following example, we have shown using the vertex set . If we remove any edge from , the resulting graph is a spanning tree. Thus, there are eight spanning trees of .   Example of .     Note that for our purposes, we considered spanning trees to be distinct when they are different as labeled graphs. So, in our example of above, even though every spanning tree was a path with seven edges, they are all considered distinct because they each have a unique vertex labeling.   Systematically list all the labeled spanning trees of for . Write the vertex set of as .   Example of .      Cayley's Theorem   There are labeled spanning trees of .    The sequence for is given by and is found in the Online Encyclopedia of Integer Sequences as .   Discuss with your group: suppose that you generated the first few values of this sequence by listing the spanning trees of and realized that it matched . What would you do next? What are some different strategies you could use to approach the problem of showing that your conjectured formula is correct?   There are multiple strategies for proving that this formula is correct, including:   Using the technique of exponential generating functions to compute this value algebraically. The downside to this technique is it gives you the formula but without a combinatorial proof.    Apply the matrix-tree theorem, which gives a matrix-algebra based technique for computing the number of spanning trees in a graph using determinants. This is based on 19th century techniques due to Kirchoff using the Laplacian matrix of a graph, which is a discrete model for heat flow through a network.    Double-counting, where one counts the same object in two different ways. You used this technique on the homework to prove that .    A bijective approach, where we find a set of size and find an explicit bijection between that set and the spanning trees of .   We will use a bijective approach to prove Cayley's Theorem.   What set or sets do you know that have cardinality ?     There is a bijection between spanning trees of and sequences in the set where there are factors in the product.     Proof of  By , we have that the number of spanning trees of is the same as the number of sequences in , which is .   What remains is for us to prove , i.e., to prove that we have such a bijection.    Suppose is a spanning tree of on vertex set . We construct an array as follows:   Set . Let be the leaf of with the smallest label, with neighbor . Remove and the edge from to create a new tree , and place those vertex labels as the first column in the array.    Let be the leaf of with the smallest label, with neighbor . Remove and the edge from to create a new tree , and place those vertex labels as the second column in the array.    Let be the leaf of with the smallest label, with neighbor . Remove and the edge from to create a new tree , and place those vertex labels as the third column in the array.    Continue in this manner until all edges of have been removed.     Recall that there are edges in and every tree has at least one leaf. Therefore, this algorithm will terminate and result in a matrix of the form .  The Prufer code for is the vector .     Show that the Prufer code for the following tree is given by .   Tree for Prufer code exercise.      Proof of  We will prove by showing that the Prufer code function is invertible. If the map sending spanning trees to sequences in has an inverse, then it is both one-to-one and onto, hence it is a bijection.  Consider the following algorithm, applied to a sequence to produce a tree . Start with an empty graph .   Consider the smallest element of that is not listed in . Call this element and add the edge to to create . Delete from .    Consider the smallest element of that is not listed in . Call this element and add the edge to to create . Delete from .    Consider the smallest element of that is not listed in . Call this element and add the edge to to create . Delete from .    Continue in this fashion until you have created a tree with edges.   We have that by construction, and therefore we have that , as desired.    Show that the Prufer code builds the following tree.   Tree for second Prufer code exercise.      Create the tree corresponding to the Prufer code and then verify that is equal to this code.    Discuss with your group why it is that . Does this make sense? Why or why not?     Leaves of do not appear in the Prufer code, and the number of times appears in the Prufer code is .     If is a leaf of , then it will only appear in a column of the array for when it is the smallest labeled leaf in a tree during the Prufer code algorithm. Thus, will only appear in the top row of the array, not the bottom row.  For every vertex that is not a leaf of , it will appear as the lower-column-entry in the array for edges until is the least-labeled leaf in one of the trees appearing in the algorithm. Thus, will appear in the Prufer code many times, as it will not become a leaf until it has had enough edges removed so that it has degree in a tree arising in the Prufer code algorithm.    Check the argument from this proof using the checkpoint examples above.   "
},
{
  "id": "def-spanningtree",
  "level": "2",
  "url": "sec-prufercayley.html#def-spanningtree",
  "type": "Definition",
  "number": "3.5.1",
  "title": "",
  "body": "  Given a finite connected graph , a spanning tree of is a tree on the same vertex set as where the edge set of is contained in the edge set of , i.e., .   "
},
{
  "id": "sec-prufercayley-4",
  "level": "2",
  "url": "sec-prufercayley.html#sec-prufercayley-4",
  "type": "Example",
  "number": "3.5.2",
  "title": "",
  "body": " The cycle graph on vertices, denoted , is the graph on vertex set with edge set In the following example, we have shown using the vertex set . If we remove any edge from , the resulting graph is a spanning tree. Thus, there are eight spanning trees of .   Example of .    "
},
{
  "id": "sec-prufercayley-6",
  "level": "2",
  "url": "sec-prufercayley.html#sec-prufercayley-6",
  "type": "Checkpoint",
  "number": "3.5.4",
  "title": "",
  "body": " Systematically list all the labeled spanning trees of for . Write the vertex set of as .   Example of .    "
},
{
  "id": "thm-cayleystheorem",
  "level": "2",
  "url": "sec-prufercayley.html#thm-cayleystheorem",
  "type": "Theorem",
  "number": "3.5.6",
  "title": "Cayley’s Theorem.",
  "body": " Cayley's Theorem   There are labeled spanning trees of .   "
},
{
  "id": "sec-prufercayley-9",
  "level": "2",
  "url": "sec-prufercayley.html#sec-prufercayley-9",
  "type": "Checkpoint",
  "number": "3.5.7",
  "title": "",
  "body": " Discuss with your group: suppose that you generated the first few values of this sequence by listing the spanning trees of and realized that it matched . What would you do next? What are some different strategies you could use to approach the problem of showing that your conjectured formula is correct?  "
},
{
  "id": "sec-prufercayley-11",
  "level": "2",
  "url": "sec-prufercayley.html#sec-prufercayley-11",
  "type": "Checkpoint",
  "number": "3.5.8",
  "title": "",
  "body": " What set or sets do you know that have cardinality ?  "
},
{
  "id": "thm-pruferbijection",
  "level": "2",
  "url": "sec-prufercayley.html#thm-pruferbijection",
  "type": "Theorem",
  "number": "3.5.9",
  "title": "",
  "body": "  There is a bijection between spanning trees of and sequences in the set where there are factors in the product.   "
},
{
  "id": "sec-prufercayley-13",
  "level": "2",
  "url": "sec-prufercayley.html#sec-prufercayley-13",
  "type": "Proof",
  "number": "3.5.1",
  "title": "Proof of Theorem 3.5.6.",
  "body": " Proof of  By , we have that the number of spanning trees of is the same as the number of sequences in , which is .  "
},
{
  "id": "def-prufercode",
  "level": "2",
  "url": "sec-prufercayley.html#def-prufercode",
  "type": "Definition",
  "number": "3.5.10",
  "title": "",
  "body": "  Suppose is a spanning tree of on vertex set . We construct an array as follows:   Set . Let be the leaf of with the smallest label, with neighbor . Remove and the edge from to create a new tree , and place those vertex labels as the first column in the array.    Let be the leaf of with the smallest label, with neighbor . Remove and the edge from to create a new tree , and place those vertex labels as the second column in the array.    Let be the leaf of with the smallest label, with neighbor . Remove and the edge from to create a new tree , and place those vertex labels as the third column in the array.    Continue in this manner until all edges of have been removed.     Recall that there are edges in and every tree has at least one leaf. Therefore, this algorithm will terminate and result in a matrix of the form .  The Prufer code for is the vector .   "
},
{
  "id": "sec-prufercayley-16",
  "level": "2",
  "url": "sec-prufercayley.html#sec-prufercayley-16",
  "type": "Checkpoint",
  "number": "3.5.11",
  "title": "",
  "body": " Show that the Prufer code for the following tree is given by .   Tree for Prufer code exercise.    "
},
{
  "id": "sec-prufercayley-17",
  "level": "2",
  "url": "sec-prufercayley.html#sec-prufercayley-17",
  "type": "Proof",
  "number": "3.5.2",
  "title": "Proof of Theorem 3.5.9.",
  "body": " Proof of  We will prove by showing that the Prufer code function is invertible. If the map sending spanning trees to sequences in has an inverse, then it is both one-to-one and onto, hence it is a bijection.  Consider the following algorithm, applied to a sequence to produce a tree . Start with an empty graph .   Consider the smallest element of that is not listed in . Call this element and add the edge to to create . Delete from .    Consider the smallest element of that is not listed in . Call this element and add the edge to to create . Delete from .    Consider the smallest element of that is not listed in . Call this element and add the edge to to create . Delete from .    Continue in this fashion until you have created a tree with edges.   We have that by construction, and therefore we have that , as desired.  "
},
{
  "id": "sec-prufercayley-18",
  "level": "2",
  "url": "sec-prufercayley.html#sec-prufercayley-18",
  "type": "Checkpoint",
  "number": "3.5.13",
  "title": "",
  "body": " Show that the Prufer code builds the following tree.   Tree for second Prufer code exercise.    "
},
{
  "id": "sec-prufercayley-19",
  "level": "2",
  "url": "sec-prufercayley.html#sec-prufercayley-19",
  "type": "Checkpoint",
  "number": "3.5.15",
  "title": "",
  "body": " Create the tree corresponding to the Prufer code and then verify that is equal to this code.  "
},
{
  "id": "sec-prufercayley-20",
  "level": "2",
  "url": "sec-prufercayley.html#sec-prufercayley-20",
  "type": "Checkpoint",
  "number": "3.5.16",
  "title": "",
  "body": " Discuss with your group why it is that . Does this make sense? Why or why not?  "
},
{
  "id": "prop-pruferdegrees",
  "level": "2",
  "url": "sec-prufercayley.html#prop-pruferdegrees",
  "type": "Proposition",
  "number": "3.5.17",
  "title": "",
  "body": "  Leaves of do not appear in the Prufer code, and the number of times appears in the Prufer code is .   "
},
{
  "id": "sec-prufercayley-22",
  "level": "2",
  "url": "sec-prufercayley.html#sec-prufercayley-22",
  "type": "Proof",
  "number": "3.5.3",
  "title": "",
  "body": " If is a leaf of , then it will only appear in a column of the array for when it is the smallest labeled leaf in a tree during the Prufer code algorithm. Thus, will only appear in the top row of the array, not the bottom row.  For every vertex that is not a leaf of , it will appear as the lower-column-entry in the array for edges until is the least-labeled leaf in one of the trees appearing in the algorithm. Thus, will appear in the Prufer code many times, as it will not become a leaf until it has had enough edges removed so that it has degree in a tree arising in the Prufer code algorithm.  "
},
{
  "id": "sec-prufercayley-23",
  "level": "2",
  "url": "sec-prufercayley.html#sec-prufercayley-23",
  "type": "Checkpoint",
  "number": "3.5.18",
  "title": "",
  "body": " Check the argument from this proof using the checkpoint examples above.  "
},
{
  "id": "sec-degreesequences",
  "level": "1",
  "url": "sec-degreesequences.html",
  "type": "Section",
  "number": "3.6",
  "title": "Degree Sequences",
  "body": " Degree Sequences  We have seen that the degrees of the vertices play several key roles for graphs. This leads us to the following definition and theorem.    Given a finite graph , the degree sequence of is the sequence of vertex degrees of written in non-increasing order. If a sequence with is the degree sequence of a graph, then we say is a graphic sequence . Note that there might be more than one graph with the same graphic sequence.     The degree sequence of the following graph is .   Example for graph degree sequence      For each of the following degree sequences, create a graph having that degree sequence.                    The main question we will ask about degree sequences is: which non-increasing lists of integers are graphic?  We will start by investigating a special class of graphs called threshold graphs .    Consider the following two operations on a finite graph :    Isolated addition (I): add a new vertex of degree zero to , i.e., add an isolated vertex.     Suspension (S): add a new vertex that is connected by an edge to every vertex of ; the resulting graph is called the suspension of .   A threshold graph is a graph obtained by starting with a single vertex and applying any sequence of isolated additions and suspensions.     For each of the following sequences (read from left to right) of isolated additions and suspensions, find the resulting threshold graph and calculate its degree sequence. Remember to start with a single vertex before you apply these operations!    SSSSSS    IIISIIIS (i.e., add three isolated vertices to the first isolated vertex, followed by a suspension, followed by adding three more isolated vertices, followed by another suspension)    SISISIS    SSSIISISS       For a threshold graph with vertices with degree sequence , explain why     For a threshold graph with vertices with degree sequence and , explain why Hint: Think about counting the vertex-edge adjacencies for each edge adjacent to or .   These observations lead us to the following property of threshold graphs.    Given a graphic degree sequence , the corrected Durfee number is      Find the corrected Durfee number for each of the following degree sequences:                      If is a threshold graph on vertices with degree sequence , then for every we have      Write out each of these equalities for and .   We start with the following lemma. We write or to denote the set of vertices in that are adjacent to , i.e., connected to by an edge. This set is called the neighbors of .    Relabel the vertex set of a threshold graph as such that . With this labeling, if contains elements, then consists of the first vertices from the list      We prove this by induction on the number of vertices in . If there are one or two vertices, then this is true since the sets under consideration are empty. Now, suppose that is a threshold graph on vertices for which the lemma holds. When we add a vertex to , resulting in a graph with one more vertex, then this can either happen through an isolated vertex or suspension move. If an isolated vertex is added, then none of the neighborhoods of the vertices change, and the new vertex (having degree zero) is labeled as , so the result holds since it already holds for .  If a suspension vertex is added, then the new vertex has degree and is labeled , while all other vertices have their degrees increased by one and their labels are each increased by one. As is added to the neighborhood of every existing vertex, then since consists of the first vertices from the list for , and the new is a neighbor in of every vertex in , we have that the claim regarding the initial segment of vertices being neighbors also holds in .    Let be the threshold graph obtained via the construction SSSIISISS   Verify that this lemma holds for .    Go through the induction step in the proof of the lemma above starting from .       Proof of  To prove that a threshold graph on vertices satisfies for every , we will count the quantity in two ways. First, observe that counts the number of vertex-edge pairs where and is incident to .  Second, since , we have that for all , and thus are all neighbors of each such . Thus, the first vertices in form a complete graph, which has edges, leading to vertex-edge pairs. Each vertex for is connected to the first vertices in . If , then this corresponds to vertex-edge adjacencies involving a vertex in . If , then this corresponds to such adjacencies. Thus, the left-hand and right-hand side of the equality both enumerate the same set, and thus are equal.       What goes wrong with this argument if we have a where ?    Discuss the above proof. What makes sense? What is confusing? Draw examples to investigate!      What is remarkable about threshold graphs is that they are the most extreme you can get with regard to these numerical relationships for degree sequences. Specifically, the following theorem due to Erdős and Gallai (which we will state without proof) characterizes graphical degree sequences by relaxing the equalities that we have been investigating.   Erdős-Gallai theorem   A sequence of non-negative integers is graphic if and only if is even and for every we have      For each of the following sequences, determine whether or not it is graphic.                         There is another beautiful recursive characterization of degree sequences. We call a sequence a proper sequence if    Havel-Hakimi Theorem   Let be a proper sequence. For any , let be the sequence obtained from by deleting and decreasing each of the first remaining entries by ; we call this operation a Havel-Hakimi step in position . Then is graphic if and only if is.     For each of the following degree sequences, verify that this theorem holds when .                     We first prove that if is graphic, then so is . Suppose is a graphic sequence, i.e., there is a graph that realizes the degree sequence . Suppose are the indices of the entries that had their degree dropped when was removed. Starting with a graph with degree sequence , add a new vertex and connect it to the vertices having degrees for . This produces a graph with degree sequence .  We next prove that if is graphic, then so is . Our first goal is to show that, much like the case of threshold graphs, if is graphic then there is a graph realizing such that a vertex of degree is connected to the vertices of highest degrees. Let be a graph with degree sequence . Relabel the vertex set of as such that . We say that and are a missing pair if there is an so that is adjacent to , is not adjacent to , and . In other words, there is a neighbor of with strictly smaller degree than some non-neighbor of . If we have a missing pair, then there must be a fourth vertex that is a neighbor of but not of . We can then delete from the edges and replace them with the edges This yields a new graph with degree sequence and one less missing pair than . Iterating this process, we eventually reach a graph realizing that has no missing pairs. If is the entry removed by the Havel-Hakimi step, then removing vertex from removes one edge from each of the highest degree vertices in , which yields a graph realizing the degree sequence , as desired.   The Havel-Hakimi theorem gives rise to an algorithm to test whether or not a proper sequence is graphic and to produce a graph realizing that sequence.   The Havel-Hakimi test   Given a proper sequence , pick some entry and apply a Havel-Hakimi step. Rearrange the resulting sequence in non-increasing order. If any entries are negative, then it is not graphic. If the resulting sequence is proper, then pick another entry and apply a Havel-Hakimi step. Continue in this way until either a negative entry is found, in which case the sequence is not graphic, or the resulting sequence consists of all zeros, in which case adding vertices and edges by reversing all the steps produces a graph realizing the degree sequence .     For each of the following proper sequences, determine whether or not it is graphic using the Havel-Hakimi test. If it is graphic, construct a graph realizing the degree sequence by applying the construction method given in the proof of the Havel-Hakimi theorem.                         "
},
{
  "id": "def-degreesequence",
  "level": "2",
  "url": "sec-degreesequences.html#def-degreesequence",
  "type": "Definition",
  "number": "3.6.1",
  "title": "",
  "body": "  Given a finite graph , the degree sequence of is the sequence of vertex degrees of written in non-increasing order. If a sequence with is the degree sequence of a graph, then we say is a graphic sequence . Note that there might be more than one graph with the same graphic sequence.   "
},
{
  "id": "sec-degreesequences-4",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-4",
  "type": "Example",
  "number": "3.6.2",
  "title": "",
  "body": " The degree sequence of the following graph is .   Example for graph degree sequence    "
},
{
  "id": "sec-degreesequences-5",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-5",
  "type": "Checkpoint",
  "number": "3.6.4",
  "title": "",
  "body": " For each of the following degree sequences, create a graph having that degree sequence.                   "
},
{
  "id": "def-thresholdgraph",
  "level": "2",
  "url": "sec-degreesequences.html#def-thresholdgraph",
  "type": "Definition",
  "number": "3.6.5",
  "title": "",
  "body": "  Consider the following two operations on a finite graph :    Isolated addition (I): add a new vertex of degree zero to , i.e., add an isolated vertex.     Suspension (S): add a new vertex that is connected by an edge to every vertex of ; the resulting graph is called the suspension of .   A threshold graph is a graph obtained by starting with a single vertex and applying any sequence of isolated additions and suspensions.   "
},
{
  "id": "sec-degreesequences-9",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-9",
  "type": "Checkpoint",
  "number": "3.6.6",
  "title": "",
  "body": " For each of the following sequences (read from left to right) of isolated additions and suspensions, find the resulting threshold graph and calculate its degree sequence. Remember to start with a single vertex before you apply these operations!    SSSSSS    IIISIIIS (i.e., add three isolated vertices to the first isolated vertex, followed by a suspension, followed by adding three more isolated vertices, followed by another suspension)    SISISIS    SSSIISISS     "
},
{
  "id": "sec-degreesequences-10",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-10",
  "type": "Checkpoint",
  "number": "3.6.7",
  "title": "",
  "body": " For a threshold graph with vertices with degree sequence , explain why   "
},
{
  "id": "sec-degreesequences-11",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-11",
  "type": "Checkpoint",
  "number": "3.6.8",
  "title": "",
  "body": " For a threshold graph with vertices with degree sequence and , explain why Hint: Think about counting the vertex-edge adjacencies for each edge adjacent to or .  "
},
{
  "id": "def-correctedDurfeenumber",
  "level": "2",
  "url": "sec-degreesequences.html#def-correctedDurfeenumber",
  "type": "Definition",
  "number": "3.6.9",
  "title": "",
  "body": "  Given a graphic degree sequence , the corrected Durfee number is    "
},
{
  "id": "sec-degreesequences-14",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-14",
  "type": "Checkpoint",
  "number": "3.6.10",
  "title": "",
  "body": " Find the corrected Durfee number for each of the following degree sequences:                   "
},
{
  "id": "thm-thresholdcharacterization",
  "level": "2",
  "url": "sec-degreesequences.html#thm-thresholdcharacterization",
  "type": "Theorem",
  "number": "3.6.11",
  "title": "",
  "body": "  If is a threshold graph on vertices with degree sequence , then for every we have    "
},
{
  "id": "sec-degreesequences-16",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-16",
  "type": "Checkpoint",
  "number": "3.6.12",
  "title": "",
  "body": " Write out each of these equalities for and .  "
},
{
  "id": "lem-thresholdnesting",
  "level": "2",
  "url": "sec-degreesequences.html#lem-thresholdnesting",
  "type": "Lemma",
  "number": "3.6.13",
  "title": "",
  "body": "  Relabel the vertex set of a threshold graph as such that . With this labeling, if contains elements, then consists of the first vertices from the list    "
},
{
  "id": "sec-degreesequences-19",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-19",
  "type": "Proof",
  "number": "3.6.1",
  "title": "",
  "body": " We prove this by induction on the number of vertices in . If there are one or two vertices, then this is true since the sets under consideration are empty. Now, suppose that is a threshold graph on vertices for which the lemma holds. When we add a vertex to , resulting in a graph with one more vertex, then this can either happen through an isolated vertex or suspension move. If an isolated vertex is added, then none of the neighborhoods of the vertices change, and the new vertex (having degree zero) is labeled as , so the result holds since it already holds for .  If a suspension vertex is added, then the new vertex has degree and is labeled , while all other vertices have their degrees increased by one and their labels are each increased by one. As is added to the neighborhood of every existing vertex, then since consists of the first vertices from the list for , and the new is a neighbor in of every vertex in , we have that the claim regarding the initial segment of vertices being neighbors also holds in .  "
},
{
  "id": "sec-degreesequences-20",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-20",
  "type": "Checkpoint",
  "number": "3.6.14",
  "title": "",
  "body": " Let be the threshold graph obtained via the construction SSSIISISS   Verify that this lemma holds for .    Go through the induction step in the proof of the lemma above starting from .     "
},
{
  "id": "sec-degreesequences-21",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-21",
  "type": "Proof",
  "number": "3.6.2",
  "title": "Proof of Theorem 3.6.11.",
  "body": " Proof of  To prove that a threshold graph on vertices satisfies for every , we will count the quantity in two ways. First, observe that counts the number of vertex-edge pairs where and is incident to .  Second, since , we have that for all , and thus are all neighbors of each such . Thus, the first vertices in form a complete graph, which has edges, leading to vertex-edge pairs. Each vertex for is connected to the first vertices in . If , then this corresponds to vertex-edge adjacencies involving a vertex in . If , then this corresponds to such adjacencies. Thus, the left-hand and right-hand side of the equality both enumerate the same set, and thus are equal.  "
},
{
  "id": "sec-degreesequences-22",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-22",
  "type": "Checkpoint",
  "number": "3.6.15",
  "title": "",
  "body": "    What goes wrong with this argument if we have a where ?    Discuss the above proof. What makes sense? What is confusing? Draw examples to investigate!     "
},
{
  "id": "thm-erdosgallai",
  "level": "2",
  "url": "sec-degreesequences.html#thm-erdosgallai",
  "type": "Theorem",
  "number": "3.6.16",
  "title": "Erdős-Gallai theorem.",
  "body": " Erdős-Gallai theorem   A sequence of non-negative integers is graphic if and only if is even and for every we have    "
},
{
  "id": "sec-degreesequences-25",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-25",
  "type": "Checkpoint",
  "number": "3.6.17",
  "title": "",
  "body": " For each of the following sequences, determine whether or not it is graphic.                        "
},
{
  "id": "thm-havelhakimi",
  "level": "2",
  "url": "sec-degreesequences.html#thm-havelhakimi",
  "type": "Theorem",
  "number": "3.6.18",
  "title": "Havel-Hakimi Theorem.",
  "body": " Havel-Hakimi Theorem   Let be a proper sequence. For any , let be the sequence obtained from by deleting and decreasing each of the first remaining entries by ; we call this operation a Havel-Hakimi step in position . Then is graphic if and only if is.   "
},
{
  "id": "sec-degreesequences-28",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-28",
  "type": "Checkpoint",
  "number": "3.6.19",
  "title": "",
  "body": " For each of the following degree sequences, verify that this theorem holds when .                   "
},
{
  "id": "sec-degreesequences-29",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-29",
  "type": "Proof",
  "number": "3.6.3",
  "title": "",
  "body": " We first prove that if is graphic, then so is . Suppose is a graphic sequence, i.e., there is a graph that realizes the degree sequence . Suppose are the indices of the entries that had their degree dropped when was removed. Starting with a graph with degree sequence , add a new vertex and connect it to the vertices having degrees for . This produces a graph with degree sequence .  We next prove that if is graphic, then so is . Our first goal is to show that, much like the case of threshold graphs, if is graphic then there is a graph realizing such that a vertex of degree is connected to the vertices of highest degrees. Let be a graph with degree sequence . Relabel the vertex set of as such that . We say that and are a missing pair if there is an so that is adjacent to , is not adjacent to , and . In other words, there is a neighbor of with strictly smaller degree than some non-neighbor of . If we have a missing pair, then there must be a fourth vertex that is a neighbor of but not of . We can then delete from the edges and replace them with the edges This yields a new graph with degree sequence and one less missing pair than . Iterating this process, we eventually reach a graph realizing that has no missing pairs. If is the entry removed by the Havel-Hakimi step, then removing vertex from removes one edge from each of the highest degree vertices in , which yields a graph realizing the degree sequence , as desired.  "
},
{
  "id": "alg-havelhakimi",
  "level": "2",
  "url": "sec-degreesequences.html#alg-havelhakimi",
  "type": "Algorithm",
  "number": "3.6.20",
  "title": "The Havel-Hakimi test.",
  "body": " The Havel-Hakimi test   Given a proper sequence , pick some entry and apply a Havel-Hakimi step. Rearrange the resulting sequence in non-increasing order. If any entries are negative, then it is not graphic. If the resulting sequence is proper, then pick another entry and apply a Havel-Hakimi step. Continue in this way until either a negative entry is found, in which case the sequence is not graphic, or the resulting sequence consists of all zeros, in which case adding vertices and edges by reversing all the steps produces a graph realizing the degree sequence .   "
},
{
  "id": "sec-degreesequences-32",
  "level": "2",
  "url": "sec-degreesequences.html#sec-degreesequences-32",
  "type": "Checkpoint",
  "number": "3.6.21",
  "title": "",
  "body": " For each of the following proper sequences, determine whether or not it is graphic using the Havel-Hakimi test. If it is graphic, construct a graph realizing the degree sequence by applying the construction method given in the proof of the Havel-Hakimi theorem.                        "
},
{
  "id": "sec-stacksortable",
  "level": "1",
  "url": "sec-stacksortable.html",
  "type": "Section",
  "number": "3.7",
  "title": "Stack Sortable Permutations",
  "body": " Stack Sortable Permutations  Our final classification problem arises in the context of sorting permutations. The sorting problem is as follows: given a permutation , produce an efficient algorithm to sort the permutation so that the result is the identity element.  One way to think about sorting a permutation is that we would need to eliminate inversions one at a time, until no inversions remain -- this would yield the identity permutation. A simple sorting algorithm of this type that is horribly inefficient and never used is bubble sort , defined as follows.    A pass in the bubble sort algorithm applied to a permutation does the following:   For from to :    if , swap those entries.       The bubble sort algorithm consists of making passes through the permutation.     Bubble sort applied to the permutation does the following on pass 1: Note that the effect of the first pass is to move to the final position.  On pass 2, we start with and obtain: Note that the effect of the second pass is to move to the second to last position.  On pass 3, we start with and obtain: Note that the effect of the second pass is to move to the third to last position.  We would run through the remaining passes without making any further changes, since the permutation is now sorted.    Apply the bubble sort algorithm to .   There are many interesting sorting algorithms! See for a list. Our next goal is to investigate a sorting algorithm created by Knuth that does not always work , but leads to very interesting mathematics .    Given a permutation , we create two additional objects: a \"vertical stack\" that starts empty and a list that starts empty. First, add to the stack. Second, if , place on the stack above ; otherwise, place into the list and add to the stack.  For each subsequent step, compare the next element in the permutation with the top element of the stack.   If the next element in the permutation is smaller than the top entry of the stack, add the element to the stack.    Otherwise, move the top entry of the stack to the right end of the list and move the new element in the permutation to the top of the stack.   Continue until every element of the permutation has been analyzed, and any elements that are left in the stack we pop sequentially and add to the right side of the list.  If a permutation is correctly sorted by this operation, then we call it 1-stack sortable , or just stack sortable .    In the notes, I will use the vector transpose notation to denote the vertical stack with on top and at the bottom of the stack.   Consider , with stack and list . We start by setting . The next element is , which is less than , so we put at the top of the stack yielding .  The next element is , which is greater than , so we move to the list and put in the stack .  The next element is , which is less than , so we put at the top of the stack to yield .  At this point, we sequentially pop each remaining element from the top of the stack, appending to , yielding .    Consider , with stack and list . Then our process yields:    , , empty.     , , empty.     , , .     , , .     , , .     , .     .     Note that the resulting list is not correctly ordered .    What caused the permutation above to NOT be sorted correctly by the stack sorting process?    Which of the following permutations are 1-stack sortable?                    We will see that there is a simple criteria that characterizes whether or not a permutation is stack sortable, involving the following definition.    We say that a permutation  contains the pattern if there exist indices such that If does not contain the pattern , then we say that is -avoiding .     The permutation contains the pattern , for example since and this is a pattern.    Which of the following permutations are -avoiding?                      A permutation is 1-stack sortable if and only if it is -avoiding.     We first prove that if is stack sortable then it is -avoiding. Suppose that the opposite happened, i.e., that there exist where where we use the names to simplify notation. When we get to in the stack sorting process, there are several possibilities for what has occurred previously in the process.   If or have already been popped from the stack, then that value will appear before in the list, which would result in the final list being out of order. So, we must have both and in the stack when is considered in the sorting process.    Note that in the stack when is considered, we must have below in the stack, because was pushed onto the stack before since was considered first in the sorting process: We must pop before and , and as the process continues, we must pop from the stack before we pop . However, this will result in appearing before in the final list, which would put the elements out of order. Therefore, cannot have a -pattern in .     We next prove that if avoids then it is stack sortable. For any two elements and such that comes before in , if then there is not a value between and in . Thus, will enter the stack and will not leave until has left the stack, meaning that will come before in the list, as desired. If , then will enter and leave the stack before enters the stack, and again they will appear in the correct order in the list. Since this is true for all pairs and , the stack sorting procedure will correctly sort the permutation.    Discuss the proof above. Does it make sense? Why or why not? Compare this proof with the examples you computed earlier.   There is a beautiful connection between the classification of stack sortable permutations and enumeration.    Let denote the number of stack sortable, i.e., -avoiding, permutations in , where we define and . Then for , these numbers satisfy the recurrence Note that this is the Catalan recurrence which implies that is the -th Catalan number , which is equal to      Use the recurrence to compute the first seven Catalan numbers.    Let be -avoiding. In this case, every entry to the left of in must be greater than every entry to the right of in . Thus, if , we have where is a -avoiding permutation of and is a -avoiding permutation of . Thus, there are possible and possible . As can be in any position in , this shows that there are possible -avoiding permutations in .  We will omit the proof that the formula satisfies the Catalan recurrence, but if you are interested in seeing it then you can search online and easily find proofs using the technique of generating functions (i.e., power series).   "
},
{
  "id": "def-bubblesort",
  "level": "2",
  "url": "sec-stacksortable.html#def-bubblesort",
  "type": "Definition",
  "number": "3.7.1",
  "title": "",
  "body": "  A pass in the bubble sort algorithm applied to a permutation does the following:   For from to :    if , swap those entries.       The bubble sort algorithm consists of making passes through the permutation.   "
},
{
  "id": "sec-stacksortable-5",
  "level": "2",
  "url": "sec-stacksortable.html#sec-stacksortable-5",
  "type": "Example",
  "number": "3.7.2",
  "title": "",
  "body": " Bubble sort applied to the permutation does the following on pass 1: Note that the effect of the first pass is to move to the final position.  On pass 2, we start with and obtain: Note that the effect of the second pass is to move to the second to last position.  On pass 3, we start with and obtain: Note that the effect of the second pass is to move to the third to last position.  We would run through the remaining passes without making any further changes, since the permutation is now sorted.  "
},
{
  "id": "sec-stacksortable-6",
  "level": "2",
  "url": "sec-stacksortable.html#sec-stacksortable-6",
  "type": "Checkpoint",
  "number": "3.7.3",
  "title": "",
  "body": " Apply the bubble sort algorithm to .  "
},
{
  "id": "def-stacksorting",
  "level": "2",
  "url": "sec-stacksortable.html#def-stacksorting",
  "type": "Definition",
  "number": "3.7.4",
  "title": "",
  "body": "  Given a permutation , we create two additional objects: a \"vertical stack\" that starts empty and a list that starts empty. First, add to the stack. Second, if , place on the stack above ; otherwise, place into the list and add to the stack.  For each subsequent step, compare the next element in the permutation with the top element of the stack.   If the next element in the permutation is smaller than the top entry of the stack, add the element to the stack.    Otherwise, move the top entry of the stack to the right end of the list and move the new element in the permutation to the top of the stack.   Continue until every element of the permutation has been analyzed, and any elements that are left in the stack we pop sequentially and add to the right side of the list.  If a permutation is correctly sorted by this operation, then we call it 1-stack sortable , or just stack sortable .   "
},
{
  "id": "sec-stacksortable-10",
  "level": "2",
  "url": "sec-stacksortable.html#sec-stacksortable-10",
  "type": "Example",
  "number": "3.7.5",
  "title": "",
  "body": " Consider , with stack and list . We start by setting . The next element is , which is less than , so we put at the top of the stack yielding .  The next element is , which is greater than , so we move to the list and put in the stack .  The next element is , which is less than , so we put at the top of the stack to yield .  At this point, we sequentially pop each remaining element from the top of the stack, appending to , yielding .  "
},
{
  "id": "sec-stacksortable-11",
  "level": "2",
  "url": "sec-stacksortable.html#sec-stacksortable-11",
  "type": "Example",
  "number": "3.7.6",
  "title": "",
  "body": " Consider , with stack and list . Then our process yields:    , , empty.     , , empty.     , , .     , , .     , , .     , .     .     Note that the resulting list is not correctly ordered .  "
},
{
  "id": "sec-stacksortable-12",
  "level": "2",
  "url": "sec-stacksortable.html#sec-stacksortable-12",
  "type": "Checkpoint",
  "number": "3.7.7",
  "title": "",
  "body": " What caused the permutation above to NOT be sorted correctly by the stack sorting process?  "
},
{
  "id": "sec-stacksortable-13",
  "level": "2",
  "url": "sec-stacksortable.html#sec-stacksortable-13",
  "type": "Checkpoint",
  "number": "3.7.8",
  "title": "",
  "body": " Which of the following permutations are 1-stack sortable?                   "
},
{
  "id": "def-231avoiding",
  "level": "2",
  "url": "sec-stacksortable.html#def-231avoiding",
  "type": "Definition",
  "number": "3.7.9",
  "title": "",
  "body": "  We say that a permutation  contains the pattern if there exist indices such that If does not contain the pattern , then we say that is -avoiding .   "
},
{
  "id": "sec-stacksortable-16",
  "level": "2",
  "url": "sec-stacksortable.html#sec-stacksortable-16",
  "type": "Example",
  "number": "3.7.10",
  "title": "",
  "body": " The permutation contains the pattern , for example since and this is a pattern.  "
},
{
  "id": "sec-stacksortable-17",
  "level": "2",
  "url": "sec-stacksortable.html#sec-stacksortable-17",
  "type": "Checkpoint",
  "number": "3.7.11",
  "title": "",
  "body": " Which of the following permutations are -avoiding?                   "
},
{
  "id": "thm-stacksortableclassification",
  "level": "2",
  "url": "sec-stacksortable.html#thm-stacksortableclassification",
  "type": "Theorem",
  "number": "3.7.12",
  "title": "",
  "body": "  A permutation is 1-stack sortable if and only if it is -avoiding.   "
},
{
  "id": "sec-stacksortable-19",
  "level": "2",
  "url": "sec-stacksortable.html#sec-stacksortable-19",
  "type": "Proof",
  "number": "3.7.1",
  "title": "",
  "body": " We first prove that if is stack sortable then it is -avoiding. Suppose that the opposite happened, i.e., that there exist where where we use the names to simplify notation. When we get to in the stack sorting process, there are several possibilities for what has occurred previously in the process.   If or have already been popped from the stack, then that value will appear before in the list, which would result in the final list being out of order. So, we must have both and in the stack when is considered in the sorting process.    Note that in the stack when is considered, we must have below in the stack, because was pushed onto the stack before since was considered first in the sorting process: We must pop before and , and as the process continues, we must pop from the stack before we pop . However, this will result in appearing before in the final list, which would put the elements out of order. Therefore, cannot have a -pattern in .     We next prove that if avoids then it is stack sortable. For any two elements and such that comes before in , if then there is not a value between and in . Thus, will enter the stack and will not leave until has left the stack, meaning that will come before in the list, as desired. If , then will enter and leave the stack before enters the stack, and again they will appear in the correct order in the list. Since this is true for all pairs and , the stack sorting procedure will correctly sort the permutation.  "
},
{
  "id": "sec-stacksortable-20",
  "level": "2",
  "url": "sec-stacksortable.html#sec-stacksortable-20",
  "type": "Checkpoint",
  "number": "3.7.13",
  "title": "",
  "body": " Discuss the proof above. Does it make sense? Why or why not? Compare this proof with the examples you computed earlier.  "
},
{
  "id": "thm-231avoidingrecurrence",
  "level": "2",
  "url": "sec-stacksortable.html#thm-231avoidingrecurrence",
  "type": "Theorem",
  "number": "3.7.14",
  "title": "",
  "body": "  Let denote the number of stack sortable, i.e., -avoiding, permutations in , where we define and . Then for , these numbers satisfy the recurrence Note that this is the Catalan recurrence which implies that is the -th Catalan number , which is equal to    "
},
{
  "id": "sec-stacksortable-23",
  "level": "2",
  "url": "sec-stacksortable.html#sec-stacksortable-23",
  "type": "Checkpoint",
  "number": "3.7.15",
  "title": "",
  "body": " Use the recurrence to compute the first seven Catalan numbers.  "
},
{
  "id": "sec-stacksortable-24",
  "level": "2",
  "url": "sec-stacksortable.html#sec-stacksortable-24",
  "type": "Proof",
  "number": "3.7.2",
  "title": "",
  "body": " Let be -avoiding. In this case, every entry to the left of in must be greater than every entry to the right of in . Thus, if , we have where is a -avoiding permutation of and is a -avoiding permutation of . Thus, there are possible and possible . As can be in any position in , this shows that there are possible -avoiding permutations in .  We will omit the proof that the formula satisfies the Catalan recurrence, but if you are interested in seeing it then you can search online and easily find proofs using the technique of generating functions (i.e., power series).  "
},
{
  "id": "sec-expectationintro",
  "level": "1",
  "url": "sec-expectationintro.html",
  "type": "Section",
  "number": "4.1",
  "title": "Expectation Questions",
  "body": " Expectation Questions  At this point, we have completed two units: in the first we learned to enumerate sets, and in the second we learned basic techniques of classification.  In our next unit, we will focus on the question of expectation : How likely is ____? For many combinatorial applications, especially in the setting of finite collections of objects, a closely related and important questions is: what is the average value of _____? In other words, if I \"randomly select\" an object, what property or properties do I expect to find?  In this section, we will focus on these latter two questions. We will introduce finite probability spaces, and then we will introduce one tool (indicator functions) and one theorem (linearity of expectation) and we will focus our attention on effectively using the technique of expected values of indicator functions to solve a variety of expectation problems in combinatorics and graph theory.  "
},
{
  "id": "sec-finiteprobability",
  "level": "1",
  "url": "sec-finiteprobability.html",
  "type": "Section",
  "number": "4.2",
  "title": "Finite Probability Spaces and Random Variables",
  "body": " Finite Probability Spaces and Random Variables  Our first task is to clearly define what we mean when we talk about likelihood of an event occurring.    Let be a finite set. We refer to the elements of as events . A probability distribution on is a function such that If for all , then we call the uniform distribution .     Consider the set of binary strings of length two, with the uniform distribution . The interpretation of this distribution is that if you pick one of the four binarys string of length two at random, you are equally likely to pick any of the four strings -- each will appear of the time.    Consider the set of outcomes from rolling a die, which is the values appearing on the six sides: The uniform distribution in this case gives . The interpretation of this distribution is that if you roll a fair die, you are equally likely to roll any of the six sides -- each will appear of the time.    Consider again the set of binary strings of length two, but this time we will use a different probability distribution. Let and set Is this a probability distribution? Let's check!  First observe that and therefore we have So, this is a probability distribution on -- it is one which strongly favors binary strings that contain more 's.    Let . Prove that if is the set of all binary strings of length , the function is a probability distribution.   "
},
{
  "id": "def-finiteprobabilityspace",
  "level": "2",
  "url": "sec-finiteprobability.html#def-finiteprobabilityspace",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  Let be a finite set. We refer to the elements of as events . A probability distribution on is a function such that If for all , then we call the uniform distribution .   "
},
{
  "id": "sec-finiteprobability-4",
  "level": "2",
  "url": "sec-finiteprobability.html#sec-finiteprobability-4",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": " Consider the set of binary strings of length two, with the uniform distribution . The interpretation of this distribution is that if you pick one of the four binarys string of length two at random, you are equally likely to pick any of the four strings -- each will appear of the time.  "
},
{
  "id": "sec-finiteprobability-5",
  "level": "2",
  "url": "sec-finiteprobability.html#sec-finiteprobability-5",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": " Consider the set of outcomes from rolling a die, which is the values appearing on the six sides: The uniform distribution in this case gives . The interpretation of this distribution is that if you roll a fair die, you are equally likely to roll any of the six sides -- each will appear of the time.  "
},
{
  "id": "sec-finiteprobability-6",
  "level": "2",
  "url": "sec-finiteprobability.html#sec-finiteprobability-6",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": " Consider again the set of binary strings of length two, but this time we will use a different probability distribution. Let and set Is this a probability distribution? Let's check!  First observe that and therefore we have So, this is a probability distribution on -- it is one which strongly favors binary strings that contain more 's.  "
},
{
  "id": "sec-finiteprobability-7",
  "level": "2",
  "url": "sec-finiteprobability.html#sec-finiteprobability-7",
  "type": "Checkpoint",
  "number": "4.2.5",
  "title": "",
  "body": " Let . Prove that if is the set of all binary strings of length , the function is a probability distribution.  "
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
},
{
  "id": "ch-homework",
  "level": "1",
  "url": "ch-homework.html",
  "type": "Chapter",
  "number": "10",
  "title": "Homework Problems and Essays",
  "body": " Homework Problems and Essays   P1  Define an -ary string to be an ordered list of length where each entry is an element of . We denote by the set of -ary strings of length .   Systematically list the elements of and explain using written sentences what your system is for listing all of these elements.    Give a recursive proof, following the structure of the recursive proof of , that        P2  How many binary strings of length are there with exactly two ones and zeros? Express your answer as either a function of or as a recursive expression. Give an argument, i.e., a proof, explaining why your solution is correct.    Essay 1  Write an essay in which you reflect on a meaningful mathematical experience from your past. This might be a positive experience or it might be a negative experience, but it should be something that was influential in your mathematical life, and you should explicitly discuss how mathematical ideas\/concepts were involved in this experience . As a prompt for your writing, consider some of the following questions (you do not need to respond to all of these, rather use them to help you get your writing started).  Was this influential because of the mathematical content you learned, or because of a personal experience that took place in a mathematical context, or because it changed how you thought about yourself with regard to mathematics, or something else entirely?  Did this experience cause you to take on future challenges, or to avoid certain challenges?  What was different about this experience from other similar experiences that makes this one stand out in your memory?  This assignment should be 500 words, which is equivalent to two pages, 12 point Times New Roman, double spaced. Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P3  In this problem, we explore another property of binomial coefficients. Equations such as this are known as combinatorial identities , because they are equalities of expressions involving combinatorial values. Using the technique of disjoint union decompositions, prove that for any , we have     P4  Give a combinatorial proof showing that     P5   Singmaster's conjecture is an open problem in mathematics, meaning that it is a problem that has not been solved by anyone. Note that the number appears infinitely many times in the triangle of binomial coefficients. The open problem is as follows: Is there a fixed integer such that every positive integer other than shows up at most times in the triangle of binomial coefficients?  Make as much progress as you can on this open problem; I don't expect you to find a solution, but you should spend 2-3 hours thinking about this! Your goal is to do something more than check examples; the examples should lead you to make some interesting observations about the problem, to understand it a bit better. Why do you think it might be true? Why might it be false? Are there any properties of binomial coefficients that support your comments? Are there any positive integers for which this is obviously true? You can do this using only pencil and paper, or using mostly computational experiments, or you can use a mix of these. However, you need to provide a narrative in sentences\/paragraphs explaining your thinking and the results of your investigations. (Seriously, write down everything you're thinking and every idea you try, even if it doesn't go anywhere.)    P6  For each positive integer , express in terms of Fibonacci numbers the number of sequences with each , such that     P7     Find a relationship between the Fibonacci numbers and the number of compositions of where every part is an odd number. Prove that your answer is correct.     A subset is called large if we have that for every . So, for example, is large while is not large. We define that the emptyset is large. Let be the number of large subsets of (including the emptyset). Find a relationship between and the Fibonacci numbers and prove that your answer is correct.       P8  In this problem you will prove that holds for all . Let denote the number of ways to select elements from and write them in a linear order, i.e., write them as a permutation.   Prove that using only the combinatorial interpretation of .    Prove that     Using the previous two parts of this problem, prove that        P9  Prove that Note that , and thus this shows that is approximately .    P10  A permutation is an involution if all cycles have length or . Let denote the number of involutions in . Prove that where and .    P11  A permutation is called connected if for every . Let denote the number of connected permutations in . Prove that     Essay 2  Read the following blog post by Keith Weber, a professor of math education at Rutgers University who studies how undergraduate students understand proofs in mathematics: After you read this article, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   The article describes four expectations that professors have for students, but which are usually mis-communicated. For each of these four expectations , do you respond more like the students in their surveys, or more like the professors? Why?    The discussion at the end of the article has some recommendations for faculty in their courses. Which of these recommendations do you think you would find most helpful for your learning, and why?    What is one thing you might change about your approach to your math courses after reading this article? Why is this the thing you would choose to change?      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P12  Recall that is the number of permutations in with inversions, and is the number of permutations in with descents. Give a combinatorial proof that and     P13     In the first part of this problem, you will prove by induction that    First, verify the base case for the induction argument, i.e., check that this is true for .    Second, assume that this is true for all values less than . In particular, this means that we assume we have already verified that To prove that the induction step holds, use this to prove that the equation holds for as follows: write and then substitute the formula for the case and simplify with algebra.    Explain in your own words why this shows that the formula is true for any positive integer .       Prove by induction that    Comment for those who are interested: These two formulas are ones that students learn (and typically forget) in Calculus I. However, these are special cases of a beautiful formula called Faulhaber's formula which is a formula for the sum of the -th powers of the first positive integers: .    P14     A graph is called -regular if every vertex has degree . How many edges does a -regular graph on vertices have?    Does there exist a -regular graph on vertices? Why or why not?       P15  A graph is bipartite if the vertex set of can be partitioned as in such a way that every edge in has one endpoint in and one in . Prove that is bipartite if and only if every cycle in has an even number of edges.    P16  Suppose a tree has exactly one vertex of degree for each and all other vertices have degree .   How many vertices does have?    For each , explain how to construct an example of a tree with this property.       P17  A graceful labeling of a tree on vertices is a mapping so that for each edge , the value of is distinct from the value on any other edge. The path graph of length , denoted , is the graph with vertex set and edges for every . Show that every has a graceful labeling.  NOTE: A well-known and extremely challenging unsolved conjecture is that all trees admit graceful labelings. This is known for some trees but not all trees.    Essay 3  Watch the following YouTube video from Numberphile (13 minutes, published 29 Jan 2024): After you watch this video, complete the following essay.   This will be an essay of length 500 words, which is equivalent to 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced.    Write a critical review of this Numberphile video. Imagine that you are writing your review for a journal for undergraduates in mathematics and the sciences, so your primary audience is undergraduate math\/cs\/engineering\/etc majors and minors.    Like any critic, you will respond positively to some things and negatively to others. Unlike many critics, you need to justify your opinions and provide detailed explanations for your claims.    You should consider the following questions:    Does the video effectively communicate the mathematics it discusses? Why or why not? Justify your claims with specific details about the video.    We have discussed multiple approaches\/themes to enumeration in this course, for example, recursions, bijections, systematic listing, etc. Which of these approaches\/themes to enumeration are used in this video? Be detailed, give specific examples from the video!    Is the mathematics clearly explained? If yes, what did they do especially well? If no, what made it unclear? Again, justify your claims with specific examples from the video.     Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P18     Find the sequences of edges to build the tree corresponding to the Prufer code , and explain your reasoning for how you find the edge at each step.    Find the Prufer code for the tree pictured below. Explain how you find the array step-by-step as you go through the algorithm.      Tree for homework problem.      P19  Fix a connected graph on vertex set . Let and be two spanning trees of . Prove that there exists a sequence of spanning trees of  such that is obtained from by deleting an edge from and adding an edge from .    P20  Let be a sequence of positive integers. Using Prufer codes , prove that the number of spanning trees of where the degree of vertex is is     P21  For each of the following sequences, (1) construct the corresponding threshold graph and (2) compute its degree sequence.   SIIISSISI    IIIISIIIISS    SSSSIISS       P22  For each of the following degree sequences, (1) compute the corrected Durfee number and (2) determine whether or not it is the degree sequence of a threshold graph. If it is a threshold graph, find a sequence of S and I operations that produce a graph with this degree sequence. Explain your reasoning.                     P23  For each of the following sequences, use the Havel-Hakimi test to determine whether or not it is a graphic sequence. Show your work and explain your solution.                     Essay 4  Read the following article from Quanta magazine: After you read this article, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   Was this article effective at communicating the mathematics of the bunkbed conjecture? Why or why not? (Give specific examples from the article to justify your claims!)    What was something you thought was interesting about the article? Why was it interesting to you?    What do you personally think the answer should be to the questions raised at the end of the article about proofs that are only true with high probability? Be detailed with your reasoning! It is acceptable to have a mix of responses to this issue, but you need to clearly explain your thoughts.      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P24      P25      P26      P27      P28      P29      Essay 5      P30      P31      P32      P33      P34      P35      Essay 6      P36      P37      P38      P39      P40      End-of-Class Reflection     "
},
{
  "id": "ch-homework-2",
  "level": "2",
  "url": "ch-homework.html#ch-homework-2",
  "type": "Problem",
  "number": "10.0.1",
  "title": "P1.",
  "body": " P1  Define an -ary string to be an ordered list of length where each entry is an element of . We denote by the set of -ary strings of length .   Systematically list the elements of and explain using written sentences what your system is for listing all of these elements.    Give a recursive proof, following the structure of the recursive proof of , that      "
},
{
  "id": "ch-homework-3",
  "level": "2",
  "url": "ch-homework.html#ch-homework-3",
  "type": "Problem",
  "number": "10.0.2",
  "title": "P2.",
  "body": " P2  How many binary strings of length are there with exactly two ones and zeros? Express your answer as either a function of or as a recursive expression. Give an argument, i.e., a proof, explaining why your solution is correct.  "
},
{
  "id": "ch-homework-4",
  "level": "2",
  "url": "ch-homework.html#ch-homework-4",
  "type": "Problem",
  "number": "10.0.3",
  "title": "Essay 1.",
  "body": " Essay 1  Write an essay in which you reflect on a meaningful mathematical experience from your past. This might be a positive experience or it might be a negative experience, but it should be something that was influential in your mathematical life, and you should explicitly discuss how mathematical ideas\/concepts were involved in this experience . As a prompt for your writing, consider some of the following questions (you do not need to respond to all of these, rather use them to help you get your writing started).  Was this influential because of the mathematical content you learned, or because of a personal experience that took place in a mathematical context, or because it changed how you thought about yourself with regard to mathematics, or something else entirely?  Did this experience cause you to take on future challenges, or to avoid certain challenges?  What was different about this experience from other similar experiences that makes this one stand out in your memory?  This assignment should be 500 words, which is equivalent to two pages, 12 point Times New Roman, double spaced. Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).  "
},
{
  "id": "ch-homework-5",
  "level": "2",
  "url": "ch-homework.html#ch-homework-5",
  "type": "Problem",
  "number": "10.0.4",
  "title": "P3.",
  "body": " P3  In this problem, we explore another property of binomial coefficients. Equations such as this are known as combinatorial identities , because they are equalities of expressions involving combinatorial values. Using the technique of disjoint union decompositions, prove that for any , we have   "
},
{
  "id": "ch-homework-6",
  "level": "2",
  "url": "ch-homework.html#ch-homework-6",
  "type": "Problem",
  "number": "10.0.5",
  "title": "P4.",
  "body": " P4  Give a combinatorial proof showing that   "
},
{
  "id": "ch-homework-7",
  "level": "2",
  "url": "ch-homework.html#ch-homework-7",
  "type": "Problem",
  "number": "10.0.6",
  "title": "P5.",
  "body": " P5   Singmaster's conjecture is an open problem in mathematics, meaning that it is a problem that has not been solved by anyone. Note that the number appears infinitely many times in the triangle of binomial coefficients. The open problem is as follows: Is there a fixed integer such that every positive integer other than shows up at most times in the triangle of binomial coefficients?  Make as much progress as you can on this open problem; I don't expect you to find a solution, but you should spend 2-3 hours thinking about this! Your goal is to do something more than check examples; the examples should lead you to make some interesting observations about the problem, to understand it a bit better. Why do you think it might be true? Why might it be false? Are there any properties of binomial coefficients that support your comments? Are there any positive integers for which this is obviously true? You can do this using only pencil and paper, or using mostly computational experiments, or you can use a mix of these. However, you need to provide a narrative in sentences\/paragraphs explaining your thinking and the results of your investigations. (Seriously, write down everything you're thinking and every idea you try, even if it doesn't go anywhere.)  "
},
{
  "id": "ch-homework-8",
  "level": "2",
  "url": "ch-homework.html#ch-homework-8",
  "type": "Problem",
  "number": "10.0.7",
  "title": "P6.",
  "body": " P6  For each positive integer , express in terms of Fibonacci numbers the number of sequences with each , such that   "
},
{
  "id": "ch-homework-9",
  "level": "2",
  "url": "ch-homework.html#ch-homework-9",
  "type": "Problem",
  "number": "10.0.8",
  "title": "P7.",
  "body": " P7     Find a relationship between the Fibonacci numbers and the number of compositions of where every part is an odd number. Prove that your answer is correct.     A subset is called large if we have that for every . So, for example, is large while is not large. We define that the emptyset is large. Let be the number of large subsets of (including the emptyset). Find a relationship between and the Fibonacci numbers and prove that your answer is correct.     "
},
{
  "id": "ch-homework-10",
  "level": "2",
  "url": "ch-homework.html#ch-homework-10",
  "type": "Problem",
  "number": "10.0.9",
  "title": "P8.",
  "body": " P8  In this problem you will prove that holds for all . Let denote the number of ways to select elements from and write them in a linear order, i.e., write them as a permutation.   Prove that using only the combinatorial interpretation of .    Prove that     Using the previous two parts of this problem, prove that      "
},
{
  "id": "ch-homework-11",
  "level": "2",
  "url": "ch-homework.html#ch-homework-11",
  "type": "Problem",
  "number": "10.0.10",
  "title": "P9.",
  "body": " P9  Prove that Note that , and thus this shows that is approximately .  "
},
{
  "id": "ch-homework-12",
  "level": "2",
  "url": "ch-homework.html#ch-homework-12",
  "type": "Problem",
  "number": "10.0.11",
  "title": "P10.",
  "body": " P10  A permutation is an involution if all cycles have length or . Let denote the number of involutions in . Prove that where and .  "
},
{
  "id": "ch-homework-13",
  "level": "2",
  "url": "ch-homework.html#ch-homework-13",
  "type": "Problem",
  "number": "10.0.12",
  "title": "P11.",
  "body": " P11  A permutation is called connected if for every . Let denote the number of connected permutations in . Prove that   "
},
{
  "id": "ch-homework-14",
  "level": "2",
  "url": "ch-homework.html#ch-homework-14",
  "type": "Problem",
  "number": "10.0.13",
  "title": "Essay 2.",
  "body": " Essay 2  Read the following blog post by Keith Weber, a professor of math education at Rutgers University who studies how undergraduate students understand proofs in mathematics: After you read this article, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   The article describes four expectations that professors have for students, but which are usually mis-communicated. For each of these four expectations , do you respond more like the students in their surveys, or more like the professors? Why?    The discussion at the end of the article has some recommendations for faculty in their courses. Which of these recommendations do you think you would find most helpful for your learning, and why?    What is one thing you might change about your approach to your math courses after reading this article? Why is this the thing you would choose to change?      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).  "
},
{
  "id": "ch-homework-15",
  "level": "2",
  "url": "ch-homework.html#ch-homework-15",
  "type": "Problem",
  "number": "10.0.14",
  "title": "P12.",
  "body": " P12  Recall that is the number of permutations in with inversions, and is the number of permutations in with descents. Give a combinatorial proof that and   "
},
{
  "id": "ch-homework-16",
  "level": "2",
  "url": "ch-homework.html#ch-homework-16",
  "type": "Problem",
  "number": "10.0.15",
  "title": "P13.",
  "body": " P13     In the first part of this problem, you will prove by induction that    First, verify the base case for the induction argument, i.e., check that this is true for .    Second, assume that this is true for all values less than . In particular, this means that we assume we have already verified that To prove that the induction step holds, use this to prove that the equation holds for as follows: write and then substitute the formula for the case and simplify with algebra.    Explain in your own words why this shows that the formula is true for any positive integer .       Prove by induction that    Comment for those who are interested: These two formulas are ones that students learn (and typically forget) in Calculus I. However, these are special cases of a beautiful formula called Faulhaber's formula which is a formula for the sum of the -th powers of the first positive integers: .  "
},
{
  "id": "ch-homework-17",
  "level": "2",
  "url": "ch-homework.html#ch-homework-17",
  "type": "Problem",
  "number": "10.0.16",
  "title": "P14.",
  "body": " P14     A graph is called -regular if every vertex has degree . How many edges does a -regular graph on vertices have?    Does there exist a -regular graph on vertices? Why or why not?     "
},
{
  "id": "ch-homework-18",
  "level": "2",
  "url": "ch-homework.html#ch-homework-18",
  "type": "Problem",
  "number": "10.0.17",
  "title": "P15.",
  "body": " P15  A graph is bipartite if the vertex set of can be partitioned as in such a way that every edge in has one endpoint in and one in . Prove that is bipartite if and only if every cycle in has an even number of edges.  "
},
{
  "id": "ch-homework-19",
  "level": "2",
  "url": "ch-homework.html#ch-homework-19",
  "type": "Problem",
  "number": "10.0.18",
  "title": "P16.",
  "body": " P16  Suppose a tree has exactly one vertex of degree for each and all other vertices have degree .   How many vertices does have?    For each , explain how to construct an example of a tree with this property.     "
},
{
  "id": "ch-homework-20",
  "level": "2",
  "url": "ch-homework.html#ch-homework-20",
  "type": "Problem",
  "number": "10.0.19",
  "title": "P17.",
  "body": " P17  A graceful labeling of a tree on vertices is a mapping so that for each edge , the value of is distinct from the value on any other edge. The path graph of length , denoted , is the graph with vertex set and edges for every . Show that every has a graceful labeling.  NOTE: A well-known and extremely challenging unsolved conjecture is that all trees admit graceful labelings. This is known for some trees but not all trees.  "
},
{
  "id": "ch-homework-21",
  "level": "2",
  "url": "ch-homework.html#ch-homework-21",
  "type": "Problem",
  "number": "10.0.20",
  "title": "Essay 3.",
  "body": " Essay 3  Watch the following YouTube video from Numberphile (13 minutes, published 29 Jan 2024): After you watch this video, complete the following essay.   This will be an essay of length 500 words, which is equivalent to 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced.    Write a critical review of this Numberphile video. Imagine that you are writing your review for a journal for undergraduates in mathematics and the sciences, so your primary audience is undergraduate math\/cs\/engineering\/etc majors and minors.    Like any critic, you will respond positively to some things and negatively to others. Unlike many critics, you need to justify your opinions and provide detailed explanations for your claims.    You should consider the following questions:    Does the video effectively communicate the mathematics it discusses? Why or why not? Justify your claims with specific details about the video.    We have discussed multiple approaches\/themes to enumeration in this course, for example, recursions, bijections, systematic listing, etc. Which of these approaches\/themes to enumeration are used in this video? Be detailed, give specific examples from the video!    Is the mathematics clearly explained? If yes, what did they do especially well? If no, what made it unclear? Again, justify your claims with specific examples from the video.     Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).  "
},
{
  "id": "ch-homework-22",
  "level": "2",
  "url": "ch-homework.html#ch-homework-22",
  "type": "Problem",
  "number": "10.0.21",
  "title": "P18.",
  "body": " P18     Find the sequences of edges to build the tree corresponding to the Prufer code , and explain your reasoning for how you find the edge at each step.    Find the Prufer code for the tree pictured below. Explain how you find the array step-by-step as you go through the algorithm.      Tree for homework problem.    "
},
{
  "id": "ch-homework-23",
  "level": "2",
  "url": "ch-homework.html#ch-homework-23",
  "type": "Problem",
  "number": "10.0.23",
  "title": "P19.",
  "body": " P19  Fix a connected graph on vertex set . Let and be two spanning trees of . Prove that there exists a sequence of spanning trees of  such that is obtained from by deleting an edge from and adding an edge from .  "
},
{
  "id": "ch-homework-24",
  "level": "2",
  "url": "ch-homework.html#ch-homework-24",
  "type": "Problem",
  "number": "10.0.24",
  "title": "P20.",
  "body": " P20  Let be a sequence of positive integers. Using Prufer codes , prove that the number of spanning trees of where the degree of vertex is is   "
},
{
  "id": "ch-homework-25",
  "level": "2",
  "url": "ch-homework.html#ch-homework-25",
  "type": "Problem",
  "number": "10.0.25",
  "title": "P21.",
  "body": " P21  For each of the following sequences, (1) construct the corresponding threshold graph and (2) compute its degree sequence.   SIIISSISI    IIIISIIIISS    SSSSIISS     "
},
{
  "id": "ch-homework-26",
  "level": "2",
  "url": "ch-homework.html#ch-homework-26",
  "type": "Problem",
  "number": "10.0.26",
  "title": "P22.",
  "body": " P22  For each of the following degree sequences, (1) compute the corrected Durfee number and (2) determine whether or not it is the degree sequence of a threshold graph. If it is a threshold graph, find a sequence of S and I operations that produce a graph with this degree sequence. Explain your reasoning.                   "
},
{
  "id": "ch-homework-27",
  "level": "2",
  "url": "ch-homework.html#ch-homework-27",
  "type": "Problem",
  "number": "10.0.27",
  "title": "P23.",
  "body": " P23  For each of the following sequences, use the Havel-Hakimi test to determine whether or not it is a graphic sequence. Show your work and explain your solution.                   "
},
{
  "id": "ch-homework-28",
  "level": "2",
  "url": "ch-homework.html#ch-homework-28",
  "type": "Problem",
  "number": "10.0.28",
  "title": "Essay 4.",
  "body": " Essay 4  Read the following article from Quanta magazine: After you read this article, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   Was this article effective at communicating the mathematics of the bunkbed conjecture? Why or why not? (Give specific examples from the article to justify your claims!)    What was something you thought was interesting about the article? Why was it interesting to you?    What do you personally think the answer should be to the questions raised at the end of the article about proofs that are only true with high probability? Be detailed with your reasoning! It is acceptable to have a mix of responses to this issue, but you need to clearly explain your thoughts.      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).  "
},
{
  "id": "ch-homework-29",
  "level": "2",
  "url": "ch-homework.html#ch-homework-29",
  "type": "Problem",
  "number": "10.0.29",
  "title": "P24.",
  "body": " P24    "
},
{
  "id": "ch-homework-30",
  "level": "2",
  "url": "ch-homework.html#ch-homework-30",
  "type": "Problem",
  "number": "10.0.30",
  "title": "P25.",
  "body": " P25    "
},
{
  "id": "ch-homework-31",
  "level": "2",
  "url": "ch-homework.html#ch-homework-31",
  "type": "Problem",
  "number": "10.0.31",
  "title": "P26.",
  "body": " P26    "
},
{
  "id": "ch-homework-32",
  "level": "2",
  "url": "ch-homework.html#ch-homework-32",
  "type": "Problem",
  "number": "10.0.32",
  "title": "P27.",
  "body": " P27    "
},
{
  "id": "ch-homework-33",
  "level": "2",
  "url": "ch-homework.html#ch-homework-33",
  "type": "Problem",
  "number": "10.0.33",
  "title": "P28.",
  "body": " P28    "
},
{
  "id": "ch-homework-34",
  "level": "2",
  "url": "ch-homework.html#ch-homework-34",
  "type": "Problem",
  "number": "10.0.34",
  "title": "P29.",
  "body": " P29    "
},
{
  "id": "ch-homework-35",
  "level": "2",
  "url": "ch-homework.html#ch-homework-35",
  "type": "Problem",
  "number": "10.0.35",
  "title": "Essay 5.",
  "body": " Essay 5    "
},
{
  "id": "ch-homework-36",
  "level": "2",
  "url": "ch-homework.html#ch-homework-36",
  "type": "Problem",
  "number": "10.0.36",
  "title": "P30.",
  "body": " P30    "
},
{
  "id": "ch-homework-37",
  "level": "2",
  "url": "ch-homework.html#ch-homework-37",
  "type": "Problem",
  "number": "10.0.37",
  "title": "P31.",
  "body": " P31    "
},
{
  "id": "ch-homework-38",
  "level": "2",
  "url": "ch-homework.html#ch-homework-38",
  "type": "Problem",
  "number": "10.0.38",
  "title": "P32.",
  "body": " P32    "
},
{
  "id": "ch-homework-39",
  "level": "2",
  "url": "ch-homework.html#ch-homework-39",
  "type": "Problem",
  "number": "10.0.39",
  "title": "P33.",
  "body": " P33    "
},
{
  "id": "ch-homework-40",
  "level": "2",
  "url": "ch-homework.html#ch-homework-40",
  "type": "Problem",
  "number": "10.0.40",
  "title": "P34.",
  "body": " P34    "
},
{
  "id": "ch-homework-41",
  "level": "2",
  "url": "ch-homework.html#ch-homework-41",
  "type": "Problem",
  "number": "10.0.41",
  "title": "P35.",
  "body": " P35    "
},
{
  "id": "ch-homework-42",
  "level": "2",
  "url": "ch-homework.html#ch-homework-42",
  "type": "Problem",
  "number": "10.0.42",
  "title": "Essay 6.",
  "body": " Essay 6    "
},
{
  "id": "ch-homework-43",
  "level": "2",
  "url": "ch-homework.html#ch-homework-43",
  "type": "Problem",
  "number": "10.0.43",
  "title": "P36.",
  "body": " P36    "
},
{
  "id": "ch-homework-44",
  "level": "2",
  "url": "ch-homework.html#ch-homework-44",
  "type": "Problem",
  "number": "10.0.44",
  "title": "P37.",
  "body": " P37    "
},
{
  "id": "ch-homework-45",
  "level": "2",
  "url": "ch-homework.html#ch-homework-45",
  "type": "Problem",
  "number": "10.0.45",
  "title": "P38.",
  "body": " P38    "
},
{
  "id": "ch-homework-46",
  "level": "2",
  "url": "ch-homework.html#ch-homework-46",
  "type": "Problem",
  "number": "10.0.46",
  "title": "P39.",
  "body": " P39    "
},
{
  "id": "ch-homework-47",
  "level": "2",
  "url": "ch-homework.html#ch-homework-47",
  "type": "Problem",
  "number": "10.0.47",
  "title": "P40.",
  "body": " P40    "
},
{
  "id": "ch-homework-48",
  "level": "2",
  "url": "ch-homework.html#ch-homework-48",
  "type": "Problem",
  "number": "10.0.48",
  "title": "End-of-Class Reflection.",
  "body": " End-of-Class Reflection    "
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
