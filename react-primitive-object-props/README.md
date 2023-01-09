# Primitive vs object performance case

### 🤔 Motivation

Evaluating the cost of different property affectation ways (inlining primitive values vs grouping them in an object).
For the sake of the benchmark, a CSS-in-JS runtime solution is used underneath. Injecting and hydrating styles into the DOM introduces performance costs: using the appropriate affectation style can leverage React capabilities (eg. memoization) to prevent unneeded operations (eg. when no property changes).

### 🔢 Results

| Primitive  | Object  |
| ------------- | ------------- |
| ```<Box display="inline-flex" backgroundColor="lightblue" ...>Inlined style attributes</Box>```  | ```<Box style={{ display:"inline-flex", backgroundColor="lightblue", ... }}>Grouped style attributes</Box>```  |
| <img width="330" alt="Primitive benchmark" src="https://user-images.githubusercontent.com/10498826/204619822-4b71d9ce-8a97-4d77-96ec-57b7dd1a3fec.png">  | <img width="330" alt="Object benchmark" src="https://user-images.githubusercontent.com/10498826/204619816-74bd357f-6911-4cf4-8a39-4cfd7573f692.png">  |
