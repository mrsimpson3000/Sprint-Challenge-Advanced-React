- [ ] Why would you use class component over function components (removing hooks from the question)?
      Prior to hooks it was the only way to manage state. With the introduction of hooks this changed things.

- [ ] Name three lifecycle methods and their purposes.
      Mounting Phase - componentDidMount():
      Constructor is called and state data is initialized

Updating Phase - .componentDidUpdate():
ANy new props received from a parent will trigger updates to the child

Un-Mounting Phase - .componentwillUnmount():
Performs cleanup and removes from memory

- [ ] What is the purpose of a custom hook?
      To reduce repetition and keep our code clean (DRY)

- [ ] Why is it important to test our apps?
      We can test them or our customers will test them but they will be tested. It's usually a better user experience if we test them.
