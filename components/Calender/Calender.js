import Link from "next/link";
const Calender = ({ conferences }) => {
  const data = {};
  for (const key in conferences) {
    if (Object.hasOwnProperty.call(conferences, key)) {
      const element = conferences[key];
      data[element.year] = [];
    }
  }
  for (const key in conferences) {
    if (Object.hasOwnProperty.call(conferences, key)) {
      const element = conferences[key];
      data[element.year].push(element);
    }
  }

  return (
    <div className="rounded-xl border overflow-x-auto">
      <table className="w-full">
        <tbody>
          {Object.keys(data).map((item, index) => (
            <tr key={index}>
              <th className="p-10 md:p-0 w-36 h-36 border">{item}</th>
              {data[item].map((schedule, i) => (
                <td
                  key={i}
                  className="p-10 md:p-0 w-36 h-36 border text-center"
                >
                  <span className="font-bold">{schedule.startDate}</span>
                  <Link
                    href={`/${schedule.id}`}
                    className="p-1 bg-blue-600/30 border-blue-700 border rounded-lg text-blue-700 flex flex-col m-2"
                  >
                    <span className="font-semibold">{schedule.name}</span>
                    <span className="text-sm">
                      {schedule?.locations?.length &&
                        schedule?.locations[0]?.city}
                    </span>
                  </Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calender;
