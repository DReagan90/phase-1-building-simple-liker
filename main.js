// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'




describe("main.js", () => {
  it("contains a hidden modal", (done) => {
    // Simulate the modal presence in the DOM
    let modal = document.querySelector('.hidden');
    
    // If modal is not found immediately, wait a little and try again
    setTimeout(() => {
      modal = document.querySelector('.hidden');
      expect(modal).to.not.equal(null);
      done();
    }, 100); // Adjust time if necessary
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
