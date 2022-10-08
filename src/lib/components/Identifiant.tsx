/**
 * it will identify an entity: user, author, book
 * TODO-1: specify entity type (user, author or book)
 * TODO-2: add an onClick action that redirect to entity page
 */

interface IdentifiantProps {
  name: string;
  avatar: string;
  details: string;
}

const Identifiant = ({ name, details, avatar }: IdentifiantProps) => {
  return (
    <div className="flex gap-4 items-center cursor-pointer">
      <img className="w-12 h-12 rounded bg-gray-300" alt="pp" src={avatar} />
      <div className="flex flex-col">
        <div className="text-gray-300">{details}</div>
        <div className="text-black font-semibold text-xl">{name}</div>
      </div>
    </div>
  );
};

export default Identifiant;
