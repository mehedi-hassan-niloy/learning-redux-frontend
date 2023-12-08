


const Home = () => {

const user = ''
const name = 'Kamal'
const email = 'aaaa@gmail.com'
    return (
        <div>
           <div>
        {user ? (
            <div className="hero min-h-screen" style={{backgroundImage: 
            'url(https://images.unsplash.com/photo-1569748130764-3fed0c102c59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXIlMjBjb2RlfGVufDB8fDB8fHww)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to you</h1>
                <p className="mb-5 text-xl font-semibold">If you are already user Please  <button className="btn btn-outline btn-accent">Login</button> </p>
                <p className="mb-5 text-xl font-semibold">If you are not user Please  <button className="btn btn-outline btn-accent">Register</button> </p>
              
              
              </div>
            </div>
          </div>
        ):(
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-3xl font-bold">Name :{name}</h1>
                <h1 className="text-xl font-bold">Email :{email}</h1>
               
              </div>
            </div>
          </div>
        )
        }
      
  

           </div>
        </div>
    );
};

export default Home;