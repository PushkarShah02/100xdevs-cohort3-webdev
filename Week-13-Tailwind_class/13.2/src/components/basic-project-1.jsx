export default function SidebarCard() {
  return (
    <div className="flex h-screen">
      <div className="bg-red-500 w-0 md:w-64 transition-all ease-in-out duration-1000">
        Sidebar
      </div>
      <div className="bg-red-100 w-full">
        Content
      </div>
    </div>
  );
}
