export default function contact() {
    return (
      <div class="my-6">
            <div class="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
                <div>
                    <h1 class="text-3xl font-extrabold">Let's Talk</h1>
                    <p class="text-sm text-gray-400 mt-3">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
                </div>
                <form class="ml-auo space-y-4">
                    <input type='text' placeholder='Name'
                        class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <input type='email' placeholder='Email'
                        class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <textarea placeholder='Message' rows="6" class="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
                    <button type='button'
                        class="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
                </form>
            </div>
        </div>
    );
  }