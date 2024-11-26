import LogIn from "./Page/LogIn";

function App() {
  return (
    <div className="flex justify-center items-center pt-[-60px] flex-col relative bg-[#FAFAFA] h-[100dvh] ">
      <LogIn />
      <div className=" flex flex-col gap-5 justify-center absolute bottom-5 max-[650px]:hidden">
        <ul className="flex gap-4 font-roboto flex-wrap justify-center">
          <li>Meta</li> <li>About</li> <li>Blog</li> <li>Jobs</li> <li>Help</li>{" "}
          <li>API</li> <li>Privacy</li> <li>Terms</li>
          <li>Locations</li> <li>Instagram Lite </li> <li>Threads</li>{" "}
          <li>Contact Uploading & Non-Users</li>
          <li> Meta Verified</li>
        </ul>
        <ul className=" flex justify-center gap-4 font-roboto flex-wrap">
          <li className="hover:no-underline">English</li>
          <li className="hover:no-underline"> © 2024 Instagram from Meta</li>
        </ul>
      </div>
      <div className=" hidden max-[650px]:block w-[80%] text-center font-roboto mt-10 text-[14px] text-[#757575]">
        By continuing, you agree to Instagram's{" "}
        <span className="text-[#000] font-semibold"> Terms of Use</span> and{" "}
        <span className="text-[#000] font-semibold">Privacy Policy</span>.
      </div>
    </div>
  );
}

export default App;
