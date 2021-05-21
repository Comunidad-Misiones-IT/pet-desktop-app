import './Galeria.css';

export default function Galeria() {

  //array de ejemplo, borrar cuando este listo el back
  const pets = [
    {
      id: 1,
      name: "Lola",
      image: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      name: "River",
      image: "https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 3,
      name: "Michi",
      image: "https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 4,
      name: "Durazno",
      image: "https://images.pexels.com/photos/4668425/pexels-photo-4668425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 5,
      name: "Milo",
      image: "https://images.pexels.com/photos/4588435/pexels-photo-4588435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 6,
      name: "Chicho",
      image: "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 7,
      name: "Julio",
      image: "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    }

  ]

  return (
    <section className='container'>
      <div className='cards-container'>
        { pets && pets.map(p => (
        <div key={p.id} className='card'>
          <div className="image-container" style={{backgroundImage: `url(${p.image})`}}>        
          </div>
          <p className='pet-name'>{p.name}</p>
          <button className='info-button'>Más info</button>
        </div>
        ))}
      </div>
    </section>
  );
}