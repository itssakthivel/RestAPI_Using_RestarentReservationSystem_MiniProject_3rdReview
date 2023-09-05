import React, { useState } from 'react';
import Axios from 'axios';
import { Typewriter } from 'react-simple-typewriter';

export default function Delete({ onDeleteClick }) {
  const [nam, setNam] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.delete(`http://localhost:8080/delete1/${nam}`);
      setIsDeleted(true);
      // Show a success alert message here
      window.alert('Deletion Successful!');
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const handleConfirmation = () => {
    setShowConfirmation(false);
    handleSubmit();
  };

  return (
    
    <div className="App">
      <header className="App-header">
        <div className="logIn-form">
          <form onSubmit={showConfirmation ? handleConfirmation : handleSubmit}>
            <p>Delete a Review!</p>

            <input
              type="number"
              placeholder="ID please"
              onChange={(e) => setNam(e.target.value)}
            />
            <section className='hero' id='home'>
              <div className='container f_flex top'>
                <div className='left top'>
                  <h3>welcome to our page</h3>
                  <h1>Hi I'm <span>Sakthivel Raj</span></h1>
                  <h2>
                    
                  </h2>
                  <h3>Have A Nice Day</h3>
                  <div className='hero_btn d_flex'>
                    <div className='col_1'>

                      <div className="btn-container">
                        {showConfirmation ? (
                          <>
                            <button id="btn4" type="button" onClick={handleConfirmation}>
                              Confirm Deletion
                            </button>
                            <button
                              id="btn5"
                              type="button"
                              onClick={() => setShowConfirmation(false)}
                            >
                              Cancel
                            </button>
                          </>
                          
                        ) : (
                          <button id="btn4" type="submit">
                            Delete
                          </button>
                        )}
                      </div>

                      {!isDeleted && showConfirmation && (
                        <p id="btn-text" className="hidden">
                          Confirm deletion by clicking "Confirm Deletion."
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      </header>
    </div>
  );
}
