import React from "react";
import { trpc } from "@/providers/trpc";

export default function Opportunities() {
  const summary = trpc.opportunity.summary.useQuery();
  const list = trpc.opportunity.list.useQuery();
  const incrementView = trpc.opportunity.incrementView.useMutation();
  const incrementApp = trpc.opportunity.incrementApplication.useMutation();
  const incrementConv = trpc.opportunity.incrementConversion.useMutation();

  if (summary.isLoading || list.isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Opportunities</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="p-4 border rounded">
          <div className="text-sm text-gray-500">Views</div>
          <div className="text-xl font-bold">{summary.data?.views ?? 0}</div>
        </div>
        <div className="p-4 border rounded">
          <div className="text-sm text-gray-500">Applications</div>
          <div className="text-xl font-bold">{summary.data?.applications ?? 0}</div>
        </div>
        <div className="p-4 border rounded">
          <div className="text-sm text-gray-500">Conversions</div>
          <div className="text-xl font-bold">{summary.data?.conversions ?? 0}</div>
        </div>
        <div className="p-4 border rounded">
          <div className="text-sm text-gray-500">Active Listings</div>
          <div className="text-xl font-bold">{summary.data?.activeListings ?? 0}</div>
        </div>
      </div>

      <div className="space-y-4">
        {list.data && list.data.length === 0 && <div>No active opportunities.</div>}
        {list.data?.map((op) => (
          <div key={op.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{op.title}</div>
              <div className="text-sm text-gray-600">{op.description}</div>
              <div className="text-xs text-gray-400">Expires: {new Date(op.expiresAt).toLocaleString()}</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-sm text-gray-600">V:{op.views} A:{op.applications} C:{op.conversions}</div>
              <button
                className="px-3 py-1 bg-gray-100 rounded"
                onClick={async () => {
                  await incrementView.mutateAsync({ id: op.id });
                  list.refetch();
                  summary.refetch();
                }}
              >
                +View
              </button>
              <button
                className="px-3 py-1 bg-gray-100 rounded"
                onClick={async () => {
                  await incrementApp.mutateAsync({ id: op.id });
                  list.refetch();
                  summary.refetch();
                }}
              >
                +App
              </button>
              <button
                className="px-3 py-1 bg-gray-100 rounded"
                onClick={async () => {
                  await incrementConv.mutateAsync({ id: op.id });
                  list.refetch();
                  summary.refetch();
                }}
              >
                +Conv
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
