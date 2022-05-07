function InputName (){
    return (
      <div className = "div-input1">
        <input type="text" placeholder="First Name" className="field" name="fname" aria-label="true" />
        <img src="images/icon-error.svg" alt="error-icon" id="error-icon12" />
        <br />
      </div>
      );
  }
  const domContainer = document.querySelector('reactCom');
  const root = ReactDOM.createRoot(domContainer);
  root.render(e(InputName));
