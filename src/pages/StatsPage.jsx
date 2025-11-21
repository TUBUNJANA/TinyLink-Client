import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLinkStats } from "../api";

export default function StatsPage() {
  const { code } = useParams();
  const [link, setLink] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getLinkStats(code);
      setLink(data);
    }
    load();
  }, [code]);

  if (!link) return <p className="p-6">Loading...</p>;

  if (link.error) return <p className="p-6 text-red-500">Link not found</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded space-y-4">
      <h1 className="text-2xl font-bold">Stats for: {code}</h1>

      <div><b>Target URL:</b> {link.url}</div>

      <div><b>Total Clicks:</b> {link.total_clicks}</div>

      <div>
        <b>Last Clicked:</b>{" "}
        {link.last_clicked ? new Date(link.last_clicked).toLocaleString() : "Never"}
      </div>

      <div>
        <b>Created At:</b> {new Date(link.created_at).toLocaleString()}
      </div>
    </div>
  );
}
