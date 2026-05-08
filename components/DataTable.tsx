import { ReactNode } from "react";

interface Column {
  header: string;
  accessor: string;
  render?: (row: any) => ReactNode;
  align?: "left" | "right" | "center";
}

interface DataTableProps {
  columns: Column[];
  rows: any[];
  mobileCard?: boolean;
}

export default function DataTable({ columns, rows, mobileCard = true }: DataTableProps) {
  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className={`hidden md:block border border-[#e5e7eb] rounded-xl overflow-hidden bg-white`}>
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
            <tr>
              {columns.map((col, i) => (
                <th
                  key={i}
                  className={`px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider ${
                    col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f3f4f6]">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-[#fafafa] transition">
                {columns.map((col, j) => (
                  <td
                    key={j}
                    className={`px-6 py-4 text-sm text-[#4b5563] ${
                      col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"
                    }`}
                  >
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      {mobileCard && (
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {rows.map((row, i) => (
            <div key={i} className="bg-white border border-[#e5e7eb] rounded-xl p-5 flex flex-col gap-3 shadow-sm">
              {columns.map((col, j) => (
                <div key={j} className="flex flex-col">
                  <span className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-1">
                    {col.header}
                  </span>
                  <div className="text-sm text-[#111827]">
                    {col.render ? col.render(row) : row[col.accessor]}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
