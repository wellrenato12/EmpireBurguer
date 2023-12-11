export function BannerHero() {
  return (
    <div
      className="flex flex-col justify-center custom-bg-image:justify-start pl-8
     custom-bg-image:pl-4 h-[250px] pt-20 custom-bg-image:h-[400px] max-w-screen-xl mx-auto"
    >
      <h2 className="text-base lg:text-xl font-bold font-lato">
        Uma nova experiência!
      </h2>
      <h1 className="text-4xl lg:text-7xl font-bold font-lilita-one text-[#3b200b]">
        KING <span className="text-[#f59a1b]">BURGUER</span>
      </h1>
      <p className="flex items-center gap-1 text-base lg:text-xl font-lato mt-3">
        Para quem tem um{' '}
        <span className="bg-[#f59a1b] font-bold rounded px-1">
          Apetite de um REI!
        </span>
      </p>
      <button className="flex items-center justify-center w-[170px] lg:w-[200px] h-[45px] lg:h-[52px] mt-4 bg-[#f43127] rounded font-lato text-white text-lg lg:text-xl">
        Comprar Agora
      </button>
    </div>
  )
}
