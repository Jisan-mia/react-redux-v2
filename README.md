# React Redux

## What is React?
- React is a JavaScript library for building user interfaces.

## What is Redux?
- Redux is a **predictable** **State Container** for **JavaScript Apps**.

### Redux is for JavaScript Application means:-
 - Redux is not tied to **React**
 - It can be used with **React, angular, Vue or even Vanila JavaScript**
 - Redux is a **library** for JavaScript Applications.

### Redux is a state container means:-
 - Redux store the **state** of your applications
 - State of an app is the state represented by the **individual components of that app.**
 - Redux will **store** and **manage** the **application state.**

### To summarize:
 - React is a **library** used to build **user intefaces.**
 - Redux is a **library** for **managing state** in a **predictable** way in **JavaScript applications.**
 - **React-redux** is a library that provides **binding** to use **React and Redux** **together** in an application.

### Three core concepts of Redux:
 1. **Store**: A store that holds the **state** of your application.
 2. **Action**: An action that describes the **changes** in the state of the application.
 3. **Reducer**: A reducer which actually carries out the state **transition** **depending** on the **action**. It **ties** the store and actions together.

### With that there are three Principles:
1. **First Principle:** The state of your whole application is stored in an object tree within a **single store.**
    - Maintain our application state in a single object which would be managed by the Redux store.
3. **Second Principle:** The only way to change the state is to emit or **dispatch an action**, an object describing what happened. Means:-
- If you want to update the state of your app, you need to let Redux know about that with an action. 
- Not allowed to directly update the state object.
4. **Thrid Principle:** To specify how the state tree is transformed by actions, you write pure **reducers**.
- Reducer:- `(previousState, action) => newState`

## Middleware:
- It is the suggested way to extend redux with custom functionality.
- Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
- Use middleware for logging, crash reporting, performing asychronous tasks etc.
