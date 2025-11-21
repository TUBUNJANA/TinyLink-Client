import { useEffect, useState } from "react";
import { getLinks } from "../api";
import LinkForm from "../components/LinkForm";
import LinksTable from "../components/LinksTable";

export default function Dashboard() {
  const [links, setLinks] = useState([]);

  async function load() {
    const data = await getLinks();
    setLinks(data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">TinyLink Dashboard</h1>

      <LinkForm onCreated={load} />

      <LinksTable links={links} refresh={load} />
    </div>
  );
}
