import CategoryList from "./components/CategoryList";
import NavBar from "./components/NavBar";
import StreamersList from "./components/StreamersList";

export default function App() {
  return (
    <main className="bg-black text-white min-h-screen">
      <NavBar />
      <div className="grid grid-cols-[240px_auto] min-h-[calc(100vh-3rem)]">
        <StreamersList />
        <CategoryList />
      </div>
    </main>
  );
}
