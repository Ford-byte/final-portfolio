export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="center bg-black text-white min-h-[700px] pt-24">
        <div className="container">
          <div className="center">
            <div className="flex flex-col gap-y-[70px] items-center ">
              <div>
                <span className="text-primary underline text-[44px] font-[700]">
                  Contact
                </span>
              </div>
              <div>
                <form
                  action=""
                  className="text-white text-[24px] flex flex-col gap-y-[51px]">
                  <section className="w-full flex gap-x-[12px]">
                    <div className="w-full">
                      <input
                        type="text"
                        className="border-b-2 border-primary bg-transparent focus:outline-none w-full text-center"
                        placeholder="Name"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        type="email"
                        className="border-b-2 border-primary bg-transparent focus:outline-none w-full text-center"
                        placeholder="Email"
                      />
                    </div>
                  </section>
                  <div className="w-full">
                    <textarea
                      className="border-b-2 border-primary bg-transparent focus:outline-none w-full text-center h-auto"
                      placeholder="Message"></textarea>
                  </div>
                  <div className="w-full flex justify-between">
                    <div>
                      <label htmlFor="file-upload" className="flex items-center gap-x-[12px] pointer bg-primary px-[24px] py-[12px] rounded-md">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 text-white">
                          <path d="M12 5v14M5 12h14"></path>
                        </svg>
                        <span>File</span>
                      </label>
                      <input
                        type="file"
                        id="file-upload"
                        name="file"
                        className="hidden"
                      />
                    </div>

                    <div>
                        <button type="submit" className="flex items-center gap-x-[12px] pointer bg-primary px-[24px] py-[12px] rounded-md">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
