import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://res.cloudinary.com/dskmjlma4/image/upload/v1653585401/2488756_wfpjtz.jpg)",
        backgroundSize: "cover",
      }}
      className="min-h-screen text-primary"
    >
      {" "}
      <div className="py-4 container">
        <h2 className="font-bold text-4xl ">404 Not Found</h2>

        <div className="text-slate-700 py-4">
          <li>Code: NoSuchKey Message: The specified key does not exist.</li>
          <li> Key: docs/drivers/node/current/usage-examples/insertOne/fsfsafsa</li>
          <li>
            {" "}
            RequestId: ERMXVE4KCFR7CKTP HostId:
            hsOkJZWCWa+HyDwZpXISNzFF0vxLGi+mUX3eOu1QAYVO0vgjkTMGRwp3DkefNdSN24G3rEriBzM=
          </li>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
