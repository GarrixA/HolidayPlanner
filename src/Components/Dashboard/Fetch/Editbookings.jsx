import React from 'react';

function Editbookings() {
  return (
    <div>
      <div >
        <form
          id="form">
          <h2 >edit user</h2>
          <div >
            <div >
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                id="name1"
                 placeholder="Enter your email"
              />
            </div>
            <div >
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                id="name1"
                 placeholder="Enter your first name"
              />
            </div>
            <div >
              <label >
              </label>
              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                id="name1"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <label >
              </label>
            </div>
            <button
              onClick={(e)=> handleSubmit(e)}
              type="submit"
               >
            </button>
            <ToastContainer/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Editbookings
