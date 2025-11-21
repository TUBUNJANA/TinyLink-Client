import { useState } from "react";
import { createLink } from "../api";

export default function LinkForm({ onCreated }) {
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await createLink({ url, code });

    if (res.status === 409) {
      setError("Short code already exists");
    } else if (!res.ok) {
      setError("Error creating link");
    } else {
      setUrl("");
      setCode("");
      onCreated();
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white p-4 rounded shadow space-y-3"
    >
      <h2 className="text-xl font-semibold">Create Short Link</h2>

      <div>
        <input
          className="w-full p-2 border rounded"
          placeholder="Long URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>

      <div>
        <input
          className="w-full p-2 border rounded"
          placeholder="Custom Code (optional)"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Creating..." : "Create"}
      </button>
    </form>
  );
}
