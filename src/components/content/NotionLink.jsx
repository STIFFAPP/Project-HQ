import { ExternalLink } from "lucide-react";

export default function NotionLink({ url }) {
  if (!url) {
    return (
      <div className="placeholder">
        Notion is not linked yet.
        {/* TODO: project editor should expose a checkbox + URL field.
            Later, replace shared-link mode with optional Notion OAuth/API. */}
      </div>
    );
  }

  return (
    <a className="button dark" href={url} target="_blank" rel="noreferrer">
      <ExternalLink size={16} />
      Open Notion
    </a>
  );
}
