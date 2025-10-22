import fs from "fs";
import path from "path";
import { MarkdownRenderer } from "@/components/markdown-renderer";

export default async function HRProfilePage() {
  const filePath = path.join(process.cwd(), "src/app/profile/hr.md");
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">Profile for HR & Recruiters</h1>
      <MarkdownRenderer content={content} />
    </main>
  );
}
