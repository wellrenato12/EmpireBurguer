import ImagePublication from '../assets/Publicações.png'
import EmpireBurguerPublication from '../assets/EmpireBurguerPublication.png'

export function Publication() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-center mb-5">
        <h2 className="font-lilita-one text-4xl">PUBLICAÇÕES DO INSTAGRAM</h2>
        <p className="font-lato">
          Todos os nossos clientes são tratados como rei e rainha, com a nossa
          culinária artesanal.
        </p>
      </div>
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={ImagePublication}
          alt=""
        />
        <img
          className="w-full h-full object-cover"
          src={EmpireBurguerPublication}
          alt=""
        />
      </div>
    </div>
  )
}
