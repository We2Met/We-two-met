'use client'

const Login=()=>{
    return <>
    <button
        onClick={() =>
          (window.location = 'http://strapi.evingle.com/api/connect/google')
        }
      >
        Login via Google
      </button>
    </>
}

export default Login;