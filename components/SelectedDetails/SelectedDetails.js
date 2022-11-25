import Image from "next/image";

const SelectedDetails = ({
  name,
  about,
  day,
  firstName,
  lastName,
  image,
  company,
}) => {
  return (
    <div className="bg-white p-2 md:p-4 grid grid-cols-5 gap-2 items-center rounded-md">
      <div className="col-span-2 md:col-span-1">
        {image ? (
          <Image
            className="rounded-lg w-28 h-28 object-contain"
            src={image}
            height={100}
            width={100}
            alt={name}
          />
        ) : (
          <b className="rounded-lg w-28 h-28">{day}</b>
        )}
      </div>
      <div className="col-span-3 md:col-span-4 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between md:items-end">
          <b className="font-bold">{name}</b>
          <p className="text-sm text-gray-700">{company}</p>
        </div>
        <p className="text-justify">{about}</p>
      </div>
    </div>
  );
};

export default SelectedDetails;
