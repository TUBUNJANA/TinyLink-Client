import { deleteLink } from "../api";
import { Link } from "react-router-dom";

export default function LinksTable({ links, refresh }) {
  async function remove(code) {
    await deleteLink(code);
    refresh();
  }

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-semibold mb-3">Your Links</h2>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Code</th>
            <th className="p-2">URL</th>
            <th className="p-2">Clicks</th>
            <th className="p-2">Last Clicked</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {links.map((l) => (
            <tr key={l.code} className="border-b">
              <td className="p-2">
                <Link className="text-blue-600 underline" to={`/code/${l.code}`}>
                  {l.code}
                </Link>
              </td>

              <td className="p-2 truncate max-w-[260px]">{l.url}</td>

              <td className="p-2">{l.total_clicks}</td>

              <td className="p-2">
                {l.last_clicked
                  ? new Date(l.last_clicked).toLocaleString()
                  : "Never"}
              </td>

              <td className="p-2 flex gap-2">
                <button
                  onClick={() => navigator.clipboard.writeText(window.location.origin + "/" + l.code)}
                  className="px-2 py-1 bg-green-600 text-white rounded"
                >
                  Copy
                </button>

                <button
                  onClick={() => remove(l.code)}
                  className="px-2 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {links.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center p-6 text-gray-500">
                No links created yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
