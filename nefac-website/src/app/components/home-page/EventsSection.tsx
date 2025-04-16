export default function EventsSection() {
    return (
      <div className="py-6 mb-16">
        <div className="flex items-center mb-8 overflow-hidden">
          <h2 className="text-nefacblue font-bold text-3xl pl-24">Events</h2>
          <div className="grow h-2 bg-nefacblue translate-x-12 rounded-l-full" />
        </div>
  
        <div className="pr-24">
          <div className="bg-nefacblue text-white rounded-r-xl py-8 flex flex-col md:flex-row gap-8 mt-4 px-24">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-8">Related Events</h2>
              <div className="flex flex-col gap-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center bg-gray-200 text-black rounded-md overflow-hidden shadow">
                    <div className="rounded-lg bg-white p-3 font-semibold text-sm text-nefacblue text-left min-w-fit">
                      <div>February 12</div>
                      <div className="text-xs font-normal">6:30–7:30pm</div>
                    </div>
                    <div className="px-4 py-2 text-sm">
                      What the Government Is Up To and Your Right to Know
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        
  
          <div className="flex-1" />
        </div>
      </div>
    );
  }