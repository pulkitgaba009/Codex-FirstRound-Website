const formData = [{
    id: 1,
    question: "What is the output of the following C code?",
    optionA: "45",
    optionB: "55",
    optionC: "65",
    optionD: "75",
    answer: "55",
    language: "C",
    code: `#include <stdio.h>
int main() {
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        sum += i;
    }
    printf("%d", sum);
    return 0;
}`,
  },
  {
    id: 2,
    question: "Which keyword is used to define a class in Java?",
    optionA: "class",
    optionB: "struct",
    optionC: "define",
    optionD: "object",
    answer: "class",
    language: "Java",
    code: `public class HelloWorld {
  public static void main(String[] args) {
      System.out.println("Hello World");
  }
}`,
  },
  {
    id: 3,
    question: "What is the output of this Python code?",
    optionA: "10",
    optionB: "55",
    optionC: "None",
    optionD: "Error",
    answer: "55",
    language: "Python",
    code: `total = sum(range(1, 11))
print(total)`,
  },
  {
    id: 4,
    question: "Which operator is used for string concatenation in Java?",
    optionA: "+",
    optionB: "&",
    optionC: ".",
    optionD: "*",
    answer: "+",
    language: "Java",
    code: `public class Main {
  public static void main(String[] args) {
    String s = "Hello" + " World";
    System.out.println(s);
  }
}`,
  },
  {
    id: 5,
    question: "What will this JavaScript code output?",
    optionA: "undefined",
    optionB: "10",
    optionC: "ReferenceError",
    optionD: "null",
    answer: "undefined",
    language: "JavaScript",
    code: `console.log(a);
var a = 10;`,
  },
  {
    id: 6,
    question: "Which of the following is not a primitive data type in Java?",
    optionA: "int",
    optionB: "boolean",
    optionC: "String",
    optionD: "char",
    answer: "String",
    language: "Java",
    code: `// Just a concept-based question`,
  },
  {
    id: 7,
    question: "What is the size of int in C (on most modern compilers)?",
    optionA: "2 bytes",
    optionB: "4 bytes",
    optionC: "8 bytes",
    optionD: "Depends on compiler",
    answer: "4 bytes",
    language: "C",
    code: `#include <stdio.h>
int main() {
    printf("%zu", sizeof(int));
    return 0;
}`,
  },
  {
    id: 8,
    question: "What does this Python code print?",
    optionA: "0",
    optionB: "1",
    optionC: "2",
    optionD: "3",
    answer: "2",
    language: "Python",
    code: `x = [0, 1, 2, 3]
print(x[2])`,
  },
  {
    id: 9,
    question: "Which keyword is used in C to allocate dynamic memory?",
    optionA: "alloc",
    optionB: "malloc",
    optionC: "new",
    optionD: "create",
    answer: "malloc",
    language: "C",
    code: `#include <stdlib.h>
int *ptr = (int*) malloc(5 * sizeof(int));`,
  },
  {
    id: 10,
    question: "What will this JavaScript code print?",
    optionA: "object",
    optionB: "array",
    optionC: "undefined",
    optionD: "Error",
    answer: "object",
    language: "JavaScript",
    code: `let arr = [1,2,3];
console.log(typeof arr);`,
  },
];

export default formData;
