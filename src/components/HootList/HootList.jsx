// src/components/HootList/HootList.jsx

const HootList = (props) => {
  return <main>Hoot List</main>;
};

export default HootList;



/*
Notes On Building the HootList Component --
In this lesson, we’ll implement the following user story:
- As a user, I should be able to see a list of all hoots on a ‘List’ page.

Let’s walk through some of the logic involved here:
- Our app will store the hoots state in the App component. 
We’ll pass this state down to the new HootList component.

- Within the HootList component, we’ll map() over hoots to produce 
an array of <article> tags. Each <article> tag will render a single hoot 
object.

- The data held in hoots state will originate in our back-end app. 
We’ll use the Fetch API to retrieve this data and use it in the front-end
 app. We’ll group these fetch() requests in a dedicated module for each 
 resource in our application. These modules are commonly referred to as 
 services.

*/