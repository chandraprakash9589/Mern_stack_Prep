These questions should provide a good challenge and are designed to be solved using ES6 methods like filter, sort, reduce, and map. Feel free to practice and explore different ways to approach them.

Filter by Property Value:
Given an array of objects and a property name, filter the objects that have a specific property value.
Input:
const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const property = 'name';
const value = 'Bob';
Output:
[{ id: 2, name: 'Bob' }]

Sort Objects by Property:
Sort an array of objects based on a specified property.
Input:
const data = [
  { id: 3, name: 'Charlie' },
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
const property = 'id';
Output:
[
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
]

Group Objects by Property Value:
Group an array of objects by a specific property value.
Input:
const data = [
  { department: 'HR', employee: 'Alice' },
  { department: 'IT', employee: 'Bob' },
  { department: 'HR', employee: 'Charlie' },
  { department: 'IT', employee: 'David' }
];
const property = 'department';
Output:
{
  'HR': [
    { department: 'HR', employee: 'Alice' },
    { department: 'HR', employee: 'Charlie' }
  ],
  'IT': [
    { department: 'IT', employee: 'Bob' },
    { department: 'IT', employee: 'David' }
  ]
}

Calculate Object Property Sum:
Calculate the sum of a specific property in an array of objects.
Input:
const data = [
  { value: 5 },
  { value: 10 },
  { value: 15 }
];
const property = 'value';
Output:
30

Find Object by Property Value:
Find the first object in an array of objects with a specific property value.
Input:
const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const property = 'id';
const value = 2;
Output:
{ id: 2, name: 'Bob' }

Remove Duplicates from Array of Objects:
Remove duplicate objects from an array of objects based on a specified property value.
Input:
const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Alice' }
];
const property = 'name';
Output:
[
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]

Calculate Average Property Value:
Calculate the average value of a specific property in an array of objects.
Input:
const data = [
  { score: 80 },
  { score: 90 },
  { score: 70 }
];
const property = 'score';
Output:
80

Object Property Renaming:
Given an array of objects, rename a specific property in each object.
Input:
const data = [
  { first_name: 'Alice', age: 25 },
  { first_name: 'Bob', age: 30 },
  { first_name: 'Charlie', age: 35 }
];
const propertyToRename = 'first_name';
const newPropertyName = 'name';
Output:
[
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
]

Find Objects with Property Range:
Find objects in an array that have a property value within a specified range.
Input:
const data = [
  { price: 20 },
  { price: 30 },
  { price: 15 },
  { price: 40 }
];
const property = 'price';
const minPrice = 25;
const maxPrice = 35;
Output:
[
  { price: 30 },
]

Object Property Flattening:
Given an array of objects, flatten the values of a specific property into a single array.
Input:
const data = [
  { fruits: ['apple', 'banana', 'cherry'] },
  { fruits: ['orange', 'kiwi'] },
  { fruits: ['strawberry'] }
];
const property = 'fruits';
Output:
['apple', 'banana', 'cherry', 'orange', 'kiwi', 'strawberry']

Sort Objects by Multiple Properties:
Sort an array of objects first by one property and then by another property.
Input:
const data = [
  { department: 'HR', name: 'Alice' },
  { department: 'IT', name: 'Bob' },
  { department: 'HR', name: 'Charlie' },
  { department: 'IT', name: 'David' }
];
Output:
[
  { department: 'HR', name: 'Alice' },
  { department: 'HR', name: 'Charlie' },
  { department: 'IT', name: 'Bob' },
  { department: 'IT', name: 'David' }
]

Object Property Mapping:
Map a specific property of each object in an array to a new value.
Input:
const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const property = 'id';
const newValue = 'user_id';
Output:
[
  { user_id: 1, name: 'Alice' },
  { user_id: 2, name: 'Bob' },
  { user_id: 3, name: 'Charlie' }
]


/******* HARD *******/

Dynamic Object Grouping:
Given an array of objects with dynamic properties, group the objects by a specified dynamic property.
Input:
const data = [
  { department: 'HR', valueA: 10 },
  { department: 'IT', valueB: 20 },
  { department: 'HR', valueA: 15 },
  { department: 'IT', valueB: 25 }
];
const dynamicPropertyName = 'department';
Output:
{
  'HR': [
    { department: 'HR', valueA: 10 },
    { department: 'HR', valueA: 15 }
  ],
  'IT': [
    { department: 'IT', valueB: 20 },
    { department: 'IT', valueB: 25 }
  ]
}

Filter and Modify Objects:
Filter objects based on a dynamic property and modify another dynamic property for the filtered objects.
Input:
const data = [
  { category: 'A', value: 10 },
  { category: 'B', value: 20 },
  { category: 'A', value: 15 },
  { category: 'C', value: 30 }
];
const filterProperty = 'category';
const filterValue = 'A';
const dynamicPropertyToModify = 'value';
const modificationValue = 25;
Output:
[
  { category: 'A', value: 25 },
  { category: 'A', value: 25 }
]

Dynamic Property Aggregation with Conditions:
Aggregate values of dynamic properties for objects based on specified conditions.
Input:
const data = [
  { type: 'A', valueA: 10, valueB: 5 },
  { type: 'B', valueA: 15, valueB: 20 },
  { type: 'A', valueA: 30, valueB: 25 },
  { type: 'C', valueA: 40, valueB: 10 }
];
const dynamicPropertyName = 'type';
const conditions = { valueA: 20, valueB: 15 };
Output:
{
  'A': { valueA: 30, valueB: 25 },
  'B': { valueA: 15, valueB: 20 }
}

Dynamic Object Sorting:
Sort an array of objects based on dynamic property names and sorting directions.
Input:
const data = [
  { name: 'Alice', age: 30, score: 95 },
  { name: 'Bob', age: 25, score: 88 },
  { name: 'Charlie', age: 35, score: 92 }
];
const sortingProperties = ['age', 'score'];
const sortingDirections = ['asc', 'desc'];
Output:
[
  { name: 'Bob', age: 25, score: 88 },
  { name: 'Charlie', age: 35, score: 92 },
  { name: 'Alice', age: 30, score: 95 }
]

Dynamic Property Transformation:
Given an array of objects with dynamic properties, transform the objects into a different structure.
Input:
const data = [
  { user_1: 'Alice', user_2: 'Bob' },
  { user_1: 'Charlie', user_2: 'David' },
  { user_1: 'Eve', user_2: 'Frank' }
];
const dynamicPropertyPrefix = 'user_';
Output:
[
  { name: 'Alice', partner: 'Bob' },
  { name: 'Charlie', partner: 'David' },
  { name: 'Eve', partner: 'Frank' }
]
These challenging questions require you to manipulate objects with dynamic properties, apply conditions, and handle complex transformations. They are a great way to practice advanced JavaScript skills and data manipulation techniques.