# DAA-272-Fall-2020

FINAL REPORT

Introduction to N-queen Problem and Backtracking Alogorithm:
------------------------------------------------------------

The N Queens problem is a simple yet effective way of assessing a developer's ability to use recursion.

Backtracking is finding the solution of a problem whereby the solution depends on the previous steps taken. For example, in a maze problem, the solution depends on all the steps you take one-by-one. If any of those steps is wrong, then it will not lead us to the solution. In a maze problem, we first choose a path and continue moving along it. But once we understand that the particular path is incorrect, then we just come back and change it. This is what backtracking basically is.

In backtracking, we first take a step and then we see if this step taken is correct or not i.e., whether it will give a correct answer or not. And if it doesn’t, then we just come back and change our first step. In general, this is accomplished by recursion. Thus, in backtracking, we first start with a partial sub-solution of the problem (which may or may not lead us to the solution) and then check if we can proceed further with this sub-solution or not. If not, then we just come back and change it.

The algorithm moves left to right, placing a queen in the next available column. The key to the above code is the inner loop. This is what checks to see if a move is legal, such that no other queen on the board conflicts with the one to be placed. After that, it is simple recursion, with a condition that if the board is full then add it to the solution set.

Thus, the general steps of backtracking are:

- start with a sub-solution
- check if this sub-solution will lead to the solution or not
- If not, then come back and change the sub-solution and continue again

There are many variants of the eight Queens problem, but no one can be more handsome than the following variant: ask you to design a scheme in which each row of an infinity chessboard is placed with a queen, so that all queens do not attack each other. Specifically, suppose the lower left corner of the chessboard is at the origin, there are infinitely many rows from bottom to top, and there are infinitely many columns from left to right. You need to find out how a whole positive integer is arranged a1, A2, A3, ..., so that when you put the first queen in the first row of the A1 column, put the second queen in the second row of the column A2, and so on, Then any two queens will not attack each other.

f you are facing such a chunk of solution code directly, you may feel very puzzled. But if you understand the framework of backtracking, it is not difficult to understand the solution code. Based on the framework, the changes are just the way of making selection and excluding illegal selections. As long as you keep the framework in mind, you are left with only minor issues.

Here is a very simple and ingenious construct. First, we give a solution to the five Queens problem. And it is very important that one of the queens occupy the lattice in the bottom left corner.

Next, we extend the five Queen's solution to the 25 queen, which is based on the layout of the five Queens themselves:

As a result, the five Queens in the same group apparently did not attack each other, and the queens of the different groups apparently did not attack each other, and this was the 25 queen solution that met the requirement. Note that after the expansion, the previously completed parts have not changed.
And what happens next? Yes, we copied the 25 Queen's solution into five copies and arranged them again according to the five Queen's layout, thus expanding to 125 queens!


Conclusion:
-----------
Backtracking is a multi-tree traversal problem. The key is to do some operations at the positions of pre-order traversal and postorder traversal. 

When writing the backtracking function, you need to maintain the “Path” you have traveled and the "selection List” you currently have. When the “End Condition” is triggered, record the “Path” in the result set.

Think carefully, is the backtracking and dynamic programming somehow similar? We have repeatedly emphasized in the series of articles about dynamic planning that the three points that need to be clear in dynamic programming are "State", "selection" and "Base Case". Do they correspond to the "Path" that has passed, and the current "selection List" And "End Condition "?

To some extent, the brute-force solution phase of dynamic programming is a backtracking. When some problems have overlapping sub-problems, you can use dp table or memo to greatly prune the recursive tree, which becomes dynamic programming. However, today's two problems do not have overlapping subproblems, that is, the problem of backtracking, and the high complexity is inevitable.

