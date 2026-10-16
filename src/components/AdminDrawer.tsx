import React, { useState, useEffect } from 'react';
import { getStoredSubmissions, type MembershipRequestData, type ContactMessageData } from '../utils/storage';
import { Database, X, Trash2, Download, RefreshCw } from 'lucide-react';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({ isOpen, onClose }) => {
  const [data, setData] = useState<{
    memberships: MembershipRequestData[];
    contacts: ContactMessageData[];
  }>({ memberships: [], contacts: [] });

  const [activeTab, setActiveTab] = useState<'memberships' | 'contacts'>('memberships');

  const refreshData = () => {
    setData(getStoredSubmissions());
  };

  useEffect(() => {
    if (isOpen) {
      refreshData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear stored test submissions?")) {
      localStorage.removeItem('pawar_fitness_membership_requests');
      localStorage.removeItem('pawar_fitness_contact_messages');
      refreshData();
    }
  };

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `pawar-fitness-submissions-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-xl bg-[#101117] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl p-6 overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-red-500/10 text-[#ff3b30]">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black uppercase text-white">
                  Local Leads & Inquiries
                </h3>
                <p className="text-[11px] text-zinc-400">
                  Preview stored submissions locally (Backend-Ready)
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Action Tabs & Buttons */}
          <div className="flex items-center justify-between mt-4 mb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('memberships')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'memberships'
                    ? 'bg-[#ff3b30] text-white shadow-md shadow-red-600/30'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                Memberships ({data.memberships.length})
              </button>

              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'contacts'
                    ? 'bg-[#ff3b30] text-white shadow-md shadow-red-600/30'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                Messages ({data.contacts.length})
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={refreshData}
                title="Refresh"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={handleExportJSON}
                title="Export JSON"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300"
              >
                <Download className="w-4 h-4" />
              </button>
              <button
                onClick={handleClear}
                title="Clear Data"
                className="p-1.5 rounded-lg bg-red-950/40 text-red-400 hover:bg-red-900/40"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content List */}
          <div className="max-h-[70vh] overflow-y-auto space-y-3 pr-1">
            {activeTab === 'memberships' ? (
              data.memberships.length === 0 ? (
                <div className="text-center py-12 text-zinc-500 text-xs">
                  No membership submissions yet. Click "Join Now" anywhere on the site to submit a test inquiry!
                </div>
              ) : (
                data.memberships.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs space-y-1.5"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white text-sm">{item.fullName}</span>
                      <span className="px-2 py-0.5 rounded bg-red-500/20 text-[#ff3b30] font-bold uppercase text-[10px]">
                        {item.membershipPlan}
                      </span>
                    </div>
                    <div className="text-zinc-400 flex flex-wrap gap-x-4">
                      <span>📞 {item.mobile}</span>
                      <span>✉️ {item.email}</span>
                      <span>Age: {item.age} ({item.gender})</span>
                    </div>
                    <div className="text-zinc-400">
                      <strong>Goal:</strong> {item.fitnessGoal} | <strong>Start:</strong> {item.startDate}
                    </div>
                    {item.message && (
                      <p className="text-zinc-300 bg-black/40 p-2 rounded italic">
                        "{item.message}"
                      </p>
                    )}
                    <div className="text-[10px] text-zinc-600 pt-1">
                      Submitted: {new Date(item.submittedAt).toLocaleString()}
                    </div>
                  </div>
                ))
              )
            ) : data.contacts.length === 0 ? (
              <div className="text-center py-12 text-zinc-500 text-xs">
                No contact messages yet. Submit a message via the Contact Form to test!
              </div>
            ) : (
              data.contacts.map((msg) => (
                <div
                  key={msg.id}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs space-y-1.5"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white text-sm">{msg.name}</span>
                    <span className="text-zinc-400 font-mono text-[10px]">{msg.subject}</span>
                  </div>
                  <div className="text-zinc-400 flex gap-4">
                    <span>📞 {msg.mobile}</span>
                    <span>✉️ {msg.email}</span>
                  </div>
                  <p className="text-zinc-300 bg-black/40 p-2 rounded italic">
                    "{msg.message}"
                  </p>
                  <div className="text-[10px] text-zinc-600 pt-1">
                    Submitted: {new Date(msg.submittedAt).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 text-center">
          <p className="text-[11px] text-zinc-500">
            Pawar Fitness Administrative Preview • Badora, Betul
          </p>
        </div>
      </div>
    </div>
  );
};
