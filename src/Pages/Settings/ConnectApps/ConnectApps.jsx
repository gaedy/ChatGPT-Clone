import React from "react";

function ConnectApps() {
  return (
    <div className="w-full h-full flex flex-col text-sm">
      <div className="flex flex-row justify-between items-center">
        <div>Connect apps to access their information in ChatGPT.</div>
      </div>

      <hr className="w-full border-1 opacity-10 mt-4 mb-2"></hr>

      <div className="flex flex-col">
        <div>
          <div className="flex flex-row justify-between items-center my-2">
            <div>Google Drive</div>
            <div className="hover:bg-ahBorderColor py-1 px-5 border border-ahBorderColor rounded-full cursor-pointer">
              Connect
            </div>
          </div>
          <div className="text-xs text-ahTextColor">
            Upload Google Docs, Sheets, Slides and other files.
          </div>
        </div>

        <hr className="w-full border-1 opacity-10 my-2"></hr>

        <div>
          <div className="flex flex-row justify-between items-center my-2">
            <div>Microsoft OneDrive (personal)</div>
            <div className="hover:bg-ahBorderColor py-1 px-5 border border-ahBorderColor rounded-full cursor-pointer">
              Connect
            </div>
          </div>
          <div className="text-xs text-ahTextColor">
            Upload Microsoft Word, Excel, PowerPoint and other files.
          </div>
        </div>

        <hr className="w-full border-1 opacity-10 my-2"></hr>

        <div>
          <div className="flex flex-row justify-between items-center my-2">
            <div>Microsoft OneDrive (work/school)</div>
            <div className="hover:bg-ahBorderColor py-1 px-5 border border-ahBorderColor rounded-full cursor-pointer">
              Connect
            </div>
          </div>
          <div className="text-xs text-ahTextColor text-pretty">
            Upload Microsoft Word, Excel, PowerPoint, and other files, including
            those from SharePoint sites.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectApps;
