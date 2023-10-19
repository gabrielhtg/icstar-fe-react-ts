const Alert = () => {
  return (
    <>
      {/* alert error start  */}
      <div className=" fixed z-50 w-full flex justify-center left-0 px-5 -top-[150px]">
        <div id="alert-error" className="max-w-2xl z-50 w-full hidden">
          <div className="alert alert-error z-50 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                id="path-alert"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span id="alert-error-msg"></span>
          </div>
        </div>
      </div>

      {/* alert error end  */}

      {/* alert success start */}

      <div className=" fixed z-50 w-full flex justify-center left-0 px-5 -top-[150px]">
        <div id="alert-success" className="max-w-2xl z-50 w-full hidden">
          <div className="alert flex z-50 justify-center alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                id="path-alert"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span id="alert-success-msg"></span>
          </div>
        </div>
      </div>

      {/* alert success end */}
    </>
  );
};

export default Alert;
