import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl">
          How will you improve the performance of React application?
        </h2>
        <p className="text-justify text-xl mt-5">
          To optimize React rendering, you need to make sure that components
          receive only necessary props. It will let you control the CPU
          consumption and avoid over-rendering unnecessary features. The
          solution is to create a functional component that will collect all
          props and redistribute them to other components. Memo is a great way
          of optimizing performance as it helps cache functional components. In
          computing, memoization is an optimization technique used primarily to
          speed up computer programs by storing the results of expensive
          function calls and returning the cached result when the same inputs
          occur again.
        </p>
      </div>
      <div>
        <h2 className="text-3xl mt-12">
          What are the different ways to manage a state in a React application?
        </h2>
        <p className="text-justify text-xl mt-5">
          React uses an observable object as the state that observes what
          changes are made to the state and helps the component behave
          accordingly. For example, if we update the state of any component like
          the following the webpage will not re-render itself because React
          State will not be able to detect the changes made. Props are used to
          pass data from one component to another. The state is a local data
          storage that is local to the component only and cannot be passed to
          other components.
        </p>
      </div>
      <div>
        <h2 className="text-3xl mt-12">
          How does prototypical inheritance work?
        </h2>
        <p className="text-justify text-xl mt-5">
          Prototype-based programming is a style of object-oriented programming
          in which behaviour reuse (known as inheritance) is performed via a
          process of reusing existing objects that serve as prototypes. This
          model can also be known as prototypal, prototype-oriented, classless,
          or instance-based programming. Classical inheritance is limited to
          classes inheriting from other classes. However prototypal inheritance
          includes not only prototypes inheriting from other prototypes but also
          objects inheriting from prototypes
        </p>
      </div>
      <div>
        <h2 className="text-3xl mt-12">
          Why you do not set the directly in react?
        </h2>
        <p className="text-justify text-xl mt-5">
          The previous state will be polluted with your mutation. Due to which,
          the shallow compare and merge of two states will be disturbed or won't
          happen, because you'll have only one state now.setState , and React.
          useState create queues for React core to update the state object of a
          React component. So the process to update React state is asynchronous
          for performance reasons. That's why changes don't feel immediate.
        </p>
      </div>
      <div>
        <h2 className="text-3xl mt-12">
          What is a unit test? Why should write unit tests?
        </h2>
        <p className="text-justify text-xl mt-5">
          A unit test is a way to test a unit, the smallest code in a system
          that can logically be isolated. This is a function, a subroutine, a
          procedure, or a property in most programming languages. For
          Test-Driven Development (TDD), you write unit tests before writing any
          implementation. This makes your implementation details in your code
          shorter and easier to understand. In this instance, the best time to
          write unit tests is immediately. For others, most developers write
          unit tests after the code's been written.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
