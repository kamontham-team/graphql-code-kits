# Graphql Types
This example is basic types of graphql. You can define types like the following.
- String
- ID
- Int
- Float
- [Array]
- Scalar JSON
- Object
- Input
- Enum type
##### Special Types
- Mutation
- Query
- Multiple Quries

Basic declare types:
> JSON is [Custom scalar] when JSON has defined that will be any type you want. If you need to implement type to a specific type also. []
```sh
scalar JSON
type Book {
    id: ID
    name: String
    amount: Int
    price: Float
    group: [String]
    metaData: JSON
}
```
Declare Input type and Enum type:
> Exclamation is mean the value can't be nullable.
> Defining array type so easy wrap by square eg. [BookType]
```sh
enum BookType {
    Action
    Drama
    Romance
}
input BookInput {
    name: String
    createBy: String! # Exclamation mark
    amount: Int
    price: Float
    group: [BookType]
}
```
### Query
```sh
type Query {
    getBookAllStore: [Book]
    getBookById(id: ID!): Book
    getMyBook(user: ID!): [Book]
}
```
How to fetching multiple queres:
```sh
query DashboardAPI($user: ID!) {
  getBookAllStore {
    id
    name
  }
  getMyBook(user: $user) {
    id
    name
  }
}
```
### Mutation
Mutation is a special type, this type will be top level on defining types. Mutation in API will work to use when altering the data like add, edit, remove data:
```sh
type Mutation {
    addBookToStore(data: BookInput): Book
    removeBook(id: ID!): Book
    updateBookById(id: ID!, data: BookInput): Book
}
```
[Custom scalar]: <https://www.graphql-tools.com/docs/scalars#custom-graphqlscalartype-instance>
