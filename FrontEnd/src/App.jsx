import './App.css'
function App() {

  const handlePost = (e) => {
    e.preventDefault();
    const text = e.target.value;
    console.log(text)
  }

  return (

    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handlePost}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">What's on your mind</span>
                </label>
                <input type="text" placeholder="" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
