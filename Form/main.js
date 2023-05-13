
// -------------------------------------- accessing form elements -------------------------------------

// const form = document.forms[0]; // by index
const form = document.forms.form;  // by name

// get elements from forms

// const email = form.elements.email;
// const password = form.elements.password;
// const address = form.elements.address;
// const address1 = form.elements.address1;
// const city = form.elements.city;
// const state = form.elements.state;
// const zip = form.elements.zip;
// const checkbox = form.elements.checkbox;
// const btn = form.elements.btn;

// ------------------------------------------------- or --------------------------

// const email = form.email;
// const password = form.password;
// const address = form.address;
// const address1 = form.address1;
// const city = form.city;
// const state = form.state;
// const zip = form.zip;
// const checkbox = form.checkbox;
// const btn = form.btn;

// -------------------------------------- or --------------------------------------------

//---------object destructing --------

const {email,password,address,address1,city,state,zip,checkbox,btn} = form.elements;

// ----------- log events ---------------------------

console.log(email,password,address,address1,city,state,zip,checkbox,btn);





// --------------------------------- form submit event and formdata-----------------------------------

// --------- get elements ------------------------

const btn1 = document.getElementById('btn');

// --------- submit event-----------------

form.addEventListener('submit',(e)=>{
    
    // other event disabled

    e.preventDefault();

    
    //---------object destructing --------

    // const {email,password,address,address1,city,state,zip,checkbox,btn} = form.elements;

    // --------------------------------- or -----------------------------------

    const formData = new FormData(form);

    const json = JSON.stringify(Object.fromEntries(formData));

    console.log(json); 
})




