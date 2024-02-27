import { useState } from 'react';
import { NavLink, json } from 'react-router-dom';



function Signup() {


    const [inpVal, setInpval] = useState({
        name: "",
        password: "",
        email: "",
        date: ""
    });

    console.log(inpVal);
    const getData = (event) => {
        //  console.log(event.target.value);

        //  const value= event.target.value;

        const { value, name } = event.target;
        // const name = event.target.value;
        console.log(value, name);

        setInpval(() => {
            return {
                ...inpVal,
                [name]: value

            }


        })

    }
    const [data, setData] = useState([]);
    const addData = (event) => {
        event.preventDefault();



        const { name, password, email, date } = inpVal;

        if (name === "") {
            alert("name field is required");
        } else if (password === "") {
            alert("password field is required");
        }
        else if (password.length < 5) {
            alert("password length greater five");
        }
        else if (!date) {
            alert("date of birth field is required");

        }
        else if (email === "") {
            alert("email field is required");
        } else if (!email.includes("@")) {
            alert("please enter valid email address");
        } else {
            console.log("data added succefully");
            alert("account is succefully create..");
            alert("please enter sign in buttun....");

            localStorage.setItem("userda", JSON.stringify([...data, inpVal]));
        }

    }

    return (
        <div className='flex items-center justify-center max-w-screen-xl mx-auto'>
            <div className='p-4 mt-20 max-w-xs mx-2 bg-gray-300 rounded-lg shadow-md'>
                <h1 className=' text-center'>Sign Up</h1>
                <div>
                    <input className='w-60 p-2 border border-gray-300 mt-2 rounded-md text-sm' type="text" name="name" placeholder="user name" onChange={getData}></input>
                </div>
                <div className=''>
                    <input className='w-60 p-2 border border-gray-300 mt-2 rounded-md text-sm' type="password" name="password" placeholder="Password" onChange={getData}></input>
                </div>
                <div>
                    <input className='w-60 p-2 border border-gray-300 mt-2 rounded-md text-sm' type="email" name="email" placeholder="Email" onChange={getData}></input>
                </div>
                <div>
                    <input className='w-60 p-2 border border-gray-300 mt-2 rounded-md text-sm' type="date" name="date" placeholder="Date" onChange={getData}></input>
                </div>
                <div>
                <button className='py-2 px-4 text-white max-w-xs border border-white shadow-md rounded-md bg-red-500 transition duration-500 ease-in-out hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 mt-2 ' type='submit' onClick={addData} >
                    Submit
                </button>
                <p>Already Have an Account <span><NavLink className=' px-4 text-black  border border-white shadow-md rounded-md bg-red-500 transition duration-500 ease-in-out hover:bg-blue-200 focus:outline-none focus:ring focus:border-blue-800 mt-2' to='/signin'> Signin</NavLink></span></p>
                </div>
            </div>
</div>        

    )
}

export default Signup;