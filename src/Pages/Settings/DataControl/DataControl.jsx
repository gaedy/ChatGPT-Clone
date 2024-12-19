import down from "/icon/down.svg";

function DataControl() {
  return (
    <div className="w-full h-full flex flex-col text-sm">
      <div className="flex flex-row justify-between items-center">
        <div>Improve the model for everyone</div>
        <div className="hover:bg-ahBorderColor py-2 px-5 rounded-lg cursor-pointer flex justify-center items-center">
          <div className="">On</div>
          <img src={down} className="w-6 scale-75 -mr-2"></img>
        </div>
      </div>

      <hr className="w-full border-1 opacity-10 my-3"></hr>

      <div className="flex flex-row justify-between items-center">
        <div>Shared links</div>
        <div className="hover:bg-ahBorderColor py-2 px-5 border border-ahBorderColor rounded-full cursor-pointer">
          Manage
        </div>
      </div>

      <hr className="w-full border-1 opacity-10 my-3"></hr>

      <div className="flex flex-row justify-between items-center">
        <div>Export data</div>
        <div className="hover:bg-ahBorderColor py-2 px-5 border border-ahBorderColor rounded-full cursor-pointer">
          Export
        </div>
      </div>

      <hr className="w-full border-1 opacity-10 my-3"></hr>

      <div className="flex flex-row justify-between items-center">
        <div>Delete account</div>
        <div className="hover:bg-red-600 bg-red-500 py-2 px-5 border border-ahBorderColor rounded-full cursor-pointer">
          Delete
        </div>
      </div>
    </div>
  );
}

export default DataControl;
