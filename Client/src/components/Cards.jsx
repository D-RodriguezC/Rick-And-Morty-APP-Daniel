import Card from './Card'

export function Cards({ characters, onClose }) {
  console.log(characters)
  return (
    <div>
      {characters.map((character) => {
        const { id, name, status, species, gender, origin, image } = character
        return (
          <Card
            id={id}
            key={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
          />
        )
      })}
    </div>
  )
}
