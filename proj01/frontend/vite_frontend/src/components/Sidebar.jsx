const Sidebar = () => {
  const chats = [];

  return (
    <aside className="flex h-screen w-64 flex-col bg-[#171717] border-r border-neutral-800">
      <div className="p-4">
        <p className="w-full rounded-xl border border-neutral-700 bg-[#2f2f2f] px-4 py-3 text-left text-sm text-white transition hover:bg-[#3a3a3a]">
          Recent URL
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-2">
        {chats.map((chat, index) => (
          <button
            key={index}
            className="mb-1 w-full truncate rounded-lg px-3 py-2 text-left text-sm text-neutral-300 transition hover:bg-[#2f2f2f] hover:text-white"
          >
            {chat}
          </button>
        ))}
      </div>

      <div className="border-t border-neutral-800 p-4">
        <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-neutral-300 transition hover:bg-[#2f2f2f] hover:text-white">
          ⚙️ Settings
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;