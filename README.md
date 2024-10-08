<!--   REACT ELEMENT
const heading = (
<h1 className="heading">
Hello World
</h1>
);

 JSX (transpiled before it reaches the JS) - by the help of parcel but inside parcel this operation performed by babel.
const jsxHeading = <h1 id="heading">Namaste React using JSX </h1> .
JSX => JSX transpiled to React.createElement => ReactElement(jo kei hai JS OBJECT) => render HTMLElement.
if we have to write attribute in JSX then we have to use CAMELCASE.
how to write image tag inside jsx ?
if we write JSX in single line then it is okay but if we write JSX in multiple line then we have to use bracket. -->



<!-- React Component 
2 type of component :-

1. Class Based Component - OLD  
2. Functional Based Component - NEW
i)Functional Based Component - Just normal javascript function.
ii)Always write functional component vairable starts with capital letter . 

syntax :- const HeadingComponent = ()=>{
    <div>
    /** we can call any javascript inside 
    /**function component
    {heading()},<heading /> ,<heading> </heading>

    <h1>Hello World</h1> 
    </div>
}
-->

what is component composition?
what is crosssize scripting attack?

<!-- 
Let's create a food delivery app 
First we create a  AppLayout inside AppLayout their are many portions 
* Header 
  -Logo
  -Nav Items
*Body
  -Search 
  -Resturant Container
    - Resturant Cards
*Footer
  -copyright
  -address
  -links
-->

 {/* <RestaurantCard  resData = {resObj[0]} />
          <RestaurantCard  resData = {resObj[1]} />
          <RestaurantCard  resData = {resObj[2]} />
          <RestaurantCard  resData = {resObj[3]} />
          <RestaurantCard  resData = {resObj[4]} />
          <RestaurantCard  resData = {resObj[5]} />
          <RestaurantCard  resData = {resObj[6]} />
          <RestaurantCard  resData = {resObj[7]} />
           */}