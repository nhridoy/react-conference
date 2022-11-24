import Link from "next/link";
const Calender = ({ conferences }) => {
  // console.log(conferences);
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
  console.log(data);
  return (
    <div className="rounded-xl border overflow-x-auto">
      <table className="w-full">
        {/* <thead className="h-16">
          <tr>
            <th className="border"></th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
            <th>Mon</th>
          </tr>
        </thead> */}
        <tbody>
          {Object.keys(data).map((item, index) => (
            <tr key={index}>
              <th className="p-10 md:p-0 w-36 h-36 border">{item}</th>
              <td className="p-10 md:p-0 w-36 h-36 border text-center">
                <span className="font-bold">sdasdd</span>
                <Link
                  href="/2"
                  className="p-1 bg-blue-600/30 border-blue-700 border rounded-lg text-blue-700 flex flex-col m-2"
                >
                  <span className="font-semibold">sdsdasda</span>
                  <span className="text-sm">asasas</span>
                </Link>
              </td>
              <td className="p-10 md:p-0 w-36 h-36  border text-center">
                sdsdasda
              </td>
              <td className="p-10 md:p-0 w-36 h-36  border text-center">
                sdsdasda
              </td>
              <td className="p-10 md:p-0 w-36 h-36  border text-center">
                sdsdasda
              </td>
              <td className="p-10 md:p-0 w-36 h-36  border text-center">
                sdsdasda
              </td>
              <td className="p-10 md:p-0 w-36 h-36  border text-center">
                sdsdasda
              </td>
              <td className="p-10 md:p-0 w-36 h-36  border text-center">
                sdsdasda
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calender;
