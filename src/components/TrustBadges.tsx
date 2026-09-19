import { ShieldCheck, Lock, Clock, Sparkles, CheckCircle2 } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      title: "No Upfront Financial Commitments",
      description: "Avoid transferring money in advance. Settle directly with your model upon meeting in your hotel room."
    },
    {
      icon: Sparkles,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      title: "100% Verified Real Photos",
      description: "All companion portfolios are checked directly with short real-time video welcome in WhatsApp."
    },
    {
      icon: Clock,
      color: "text-sky-600 bg-sky-50 border-sky-200",
      title: "Fastest Way to Dispatch",
      description: "Central co-ordination for quick private arrival from all the hotels of Vijay Nagar, Palasia & Bypass."
    },
    {
      icon: Lock,
      color: "text-[#e31777] bg-pink-50 border-pink-200",
      title: "Guaranteed Discretion",
      description: "Strict privacy safeguards, encrypted chats, and zero data logging of your personal details."
    }
  ];

  return (
    <section className="my-14">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
          Our Quality Standard
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
          Why Discerning Clients Trust Our Indore Directory
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Establishing a standard of safety, transparency and top-notch companionship in Madhya Pradesh.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {badges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-gray-200 p-5 hover:border-[#e31777] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${badge.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5 flex items-center gap-1.5">
                <span>{badge.title}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {badge.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
