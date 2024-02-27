import { useState } from "react"
import { useNavigate } from "react-router-dom";



function Signin() {

    const userDetails = useNavigate();
    const [inpVal, setInpval] = useState({

        password: "",
        email: ""
    });

    console.log(inpVal);
    const getData = (event) => {
        //  console.log(event.target.value);

        //  const value= event.target.value;

        const { value, name } = event.target;
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

        const getdataArr = localStorage.getItem('userda');
        console.log(getdataArr);

        const { password, email } = inpVal;

        // if (name === "") {
        //     alert("name field is required");
        if (password === "") {
            alert("password field is required");
        }
        else if (password.length < 5) {
            alert("password length greater five");
        }
        else if (email === "") {
            alert("email field is required");
        } else if (!email.includes("@")) {
            alert("please enter valid email address");
        } else {
            // console.log(" succefully login");
            if (getdataArr && getdataArr.length) {
                const userdata = JSON.parse(getdataArr);
                // console.log(userdata);
                const userLogin = userdata.filter((element) => {
                    return element.email === email && element.password === password;
                });


                // console.log(userLogin);

                // user is not enter the value then show is error in display
                if (getdataArr.length === 0) {
                    alert("invalid user");
                }
                else {
                    console.log('succesfully login');
                    localStorage.setItem('user_login', JSON.stringify(userLogin));
                    userDetails('/Details');
                }
            }

        }
    }
    return (
        <div className='flex items-center justify-center max-w-screen-xl mx-auto'>
            <div className="p-4 mt-20 max-w-xs mx-2 bg-gray-300 rounded-lg shadow-md">
                <h1>Log In</h1>
                <div>
                    <input className='w-60 p-2 border border-gray-300 mt-2 rounded-md text-sm' type="email" name="email" placeholder="Email" onChange={getData}></input>
                </div>
                <div>
                    <input className='w-60 p-2 border border-gray-300 mt-2 rounded-md text-sm' type="password" name="password" placeholder="Password" onChange={getData}></input>
                </div>
                <button className='py-2 px-4 text-white max-w-xs border border-white shadow-md rounded-md bg-red-500 transition duration-500 ease-in-out hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 mt-2' type='submit' onClick={addData} >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Signin;
