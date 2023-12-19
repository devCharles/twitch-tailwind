export default function NavBar() {
  return (
    <nav className="bg-[#18181a] h-12 flex flex-row gap-5 p-4 shadow-[0px_2px_7px_6px_rgba(0,0,0,1)] items-center">
      <img
        // src="https://seeklogo.com/images/T/twitch-logo-4931D91F85-seeklogo.com.png"
        src="https://twitch.com/favicon.ico"
        alt=""
      />
      <div className="font-bold hover:text-purple-400 hover:cursor-pointer">
        Explorar
      </div>
    </nav>
  );
}
