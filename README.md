1) What is the difference between var, let, and const?

    *var
   -Scope:Function scoped
   -Hoisting:Gets hoised to the top, initialized as undefined
   -Re-declare: Allowed the same scope
   -Re-assign: Allowed
   *Let
    -Scope:Block scoped
   -Hoisting:Hoised , can not use it before declaration
   -Re-declare: Not allowed the same scope
   -Re-assign: Allowed
   *Const
   -Scope:Block scoped (like let)
   -Hoisting:Hoised , not usable before declaration
   -Re-declare: Not allowed
   -Re-assign:Not allowed
3) What is the difference between map(), forEach(), and filter()?
   *forEach
   -Purpose: Simple executes a function on each element of the array
   -Return: Dose not return anything
   -Use case: When you only want to loop and perform same action
   *map()
   -Purpose:Executes a function on each element and return a new array
   -Return:A new array where all elements are transformed
   -Use case: When you only want to create a modified array from an existing one
   *filter()
   -Purpose: Element against a condition and returns a new array with only the elements 
   -Return: A new array containing only the elements that meet the condition
   -Use case: When want to select specific elements based on a condition
4) What are arrow functions in ES6?
   Arraw functions are a new eay to write functions introduced in ES6.They provide a shorter and cleaner
   syntax compared to traditional  functions.An arrow function uses the (=>) symbol and can return values
   implicitly if the fuction body has only one expression.
5) How does destructuring assignment work in ES6?
   Destructuring assignment in ES6 is a way to unpack values from arrays or properties from objects into
   separate variables.It makes code shorter and more readable.
6) Explain template literals in ES6. How are they different from string concatenation?
   *
   - Template literals in ES6 are a new way to work with strings.
   - They use backticks(`) instead of quotes.
   - With template litetals,you can easily embed variables and expressions inside a strings using ${}.
   *
   -Easier to read and write compared to + concatenation
   -Directly embed variables strings and expressions
   -Support multi-line strings without \n.
