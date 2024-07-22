// ************ WRITE A "Hello World" PROGRAM USING JAVASCRIPT **************************
let heading = document.createElement("h1");
let body = document.getElementById("root");
heading.innerText = "Hello World";
body.appendChild(heading);

//************* Write a "Hello World" Program using React *************

//step1 - create react element 
let create = React.createElement("h1",{className: "heading"},"HELLO WORLD USING REACT");
//step2 - for display on the webpage we use ReactDOM
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(create);

console.log(create); // this is object  

/** 
 ** create a nested structure using react
<div id="parent">
  <div id="child1">
  <h1> I'm a tag </h1>
  <h2> I'm a tag2 </h2>
  </div>
  <div id="child2">
  <h1> I'm a tag </h1>
  <h2> I'm a tag2 </h2>
  </div>
</div>
*/
const parent = React.createElement( 
    "div", {id: "parent"} ,
   [ React.createElement("div" , {id:"child"},
       [React.createElement("h1" ,{},"I'm a tag "),
       React.createElement("h2" ,{}, "I'm a tag2 ")
       ] 
    ),React.createElement("div" , {id:"child2"},
    [React.createElement("h1" ,{},"I'm a tag2.1 "),
    React.createElement("h2" ,{}, "I'm a tag2.2 ")
    ] 
 )
]
)//above code looks soo messy that's why JSX comes into the picture.

root.render(parent);
console.log(parent)

// reactElement is object and that object is HTML that Browser can easily understand.
// during react.creatElement it creates an object. While rendring to the DOM it converts itself into HTML put up into the DOM. 
//root.render replace whatever already present inside the root already.
//npm is package manager , which can have different packages. 