import React from 'react'

export default function Hero() {
    const [formData, setFormData] = React.useState(
        {
            email:'',
            password:''
        }
    )

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div className="hero">
            <div className="hero-items">
                <img src="./fblogo.svg" className="logo" />
                <p className="hero-text">Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input 
                     type='email'
                     value={formData.email}
                     onChange={handleChange}
                     name='email'
                     placeholder="Email address or phone number"
                     className='formfield'
                    />
                    <br/>

                    <input 
                     type='password'
                     value={formData.password}
                     onChange={handleChange}
                     name='password'
                     placeholder="Password"
                     className='formfield'
                    />
                    <br/>
                    <button className='btn'>Log in</button>
                </form>
                <a href="#" className="passwordforgot">Forgotten password?</a><br/>
                <a href="#" className="createaccount">Create New Account</a><br/>
                <a href="#" className="celebrityaccount">Create a Page</a>
                <span className="celebrityaccountsp"> for a celebrity, brand or business</span>
            </div>          
        </div>
    )
}