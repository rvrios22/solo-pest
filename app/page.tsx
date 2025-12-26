"use client";

import { useState, useEffect } from "react";
import { subscribeUser, unsubscribeUser, sendNotificaiton } from "./actions";
import {
  CheckCircle,
  ClipboardList,
  DollarSign,
  MapPin,
  ShieldAlert,
  Truck,
} from "lucide-react";
import PushNotificationManager from "@/components/PushNotificationManager";
import InstallPrompt from "@/components/InstallPrompt";

export default function Home() {

  return (
    <>
    <PushNotificationManager />
    <InstallPrompt />
    </>
  //   <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
  //     {/* --- HERO SECTION --- */}
  //     <section className="px-6 py-12 md:py-20 lg:px-8 max-w-lg mx-auto md:max-w-4xl">
  //       <div className="mb-6 flex items-center gap-2">
  //         <ShieldAlert className="w-8 h-8 text-orange-600" />
  //         <span className="text-xl font-bold tracking-tight text-slate-800">
  //           SoloPest
  //         </span>
  //       </div>

  //       <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
  //         Stop doing paperwork <br className="hidden md:block" /> at{" "}
  //         <span className="text-orange-600">9:00 PM.</span>
  //       </h1>

  //       <p className="text-lg text-slate-600 mb-8 leading-relaxed">
  //         The first CRM built exclusively for the <strong>one-person</strong>{" "}
  //         operation. No dispatch teams. No bloat. Just you, your route, and
  //         getting paid.
  //       </p>

  //       {/* Waitlist Form - Mobile Optimized */}
  //       <div className="bg-white p-2 rounded-xl shadow-lg border border-slate-200">
  //         <form className="flex flex-col gap-3 md:flex-row">
  //           <input
  //             type="email"
  //             placeholder="Enter your email..."
  //             className="flex-1 px-4 py-4 rounded-lg bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-lg"
  //             required
  //           />
  //           <button
  //             type="submit"
  //             className="px-6 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg text-lg transition-all shadow-md active:scale-95"
  //           >
  //             Notify Me
  //           </button>
  //         </form>
  //         <p className="text-xs text-center text-slate-400 mt-2">
  //           Join 150+ operators. Early access members get 50% off for life.
  //         </p>
  //       </div>
  //     </section>

  //     {/* --- THE REALITY CHECK (COMPARISON) --- */}
  //     <section className="bg-slate-900 text-white py-16 px-6">
  //       <div className="max-w-lg mx-auto md:max-w-4xl">
  //         <h2 className="text-2xl font-bold mb-6">
  //           You’re an exterminator, <br />
  //           not an IT guy.
  //         </h2>

  //         <div className="overflow-hidden rounded-xl border border-slate-700">
  //           <table className="w-full text-left text-sm md:text-base">
  //             <thead className="bg-slate-800">
  //               <tr>
  //                 <th className="p-4 text-slate-400 font-medium">Feature</th>
  //                 <th className="p-4 text-slate-400 font-medium">
  //                   Big Software
  //                 </th>
  //                 <th className="p-4 text-orange-400 font-bold">SoloPest</th>
  //               </tr>
  //             </thead>
  //             <tbody className="divide-y divide-slate-800">
  //               <tr>
  //                 <td className="p-4">Cost</td>
  //                 <td className="p-4 opacity-50">$150+/mo</td>
  //                 <td className="p-4 font-bold text-green-400">$29/mo</td>
  //               </tr>
  //               <tr>
  //                 <td className="p-4">Setup</td>
  //                 <td className="p-4 opacity-50">3 Sales Calls</td>
  //                 <td className="p-4 font-bold text-green-400">Instant</td>
  //               </tr>
  //               <tr>
  //                 <td className="p-4">Invoicing</td>
  //                 <td className="p-4 opacity-50">50 Clicks</td>
  //                 <td className="p-4 font-bold text-green-400">1 Tap</td>
  //               </tr>
  //               <tr>
  //                 <td className="p-4">Device</td>
  //                 <td className="p-4 opacity-50">Desktop First</td>
  //                 <td className="p-4 font-bold text-green-400">Phone First</td>
  //               </tr>
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>
  //     </section>

  //     {/* --- CORE FEATURES --- */}
  //     <section className="py-16 px-6 bg-white">
  //       <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-3">
  //         {/* Feature 1 */}
  //         <div className="flex flex-col items-start">
  //           <div className="p-3 bg-orange-100 rounded-lg mb-4 text-orange-600">
  //             <ClipboardList size={32} />
  //           </div>
  //           <h3 className="text-xl font-bold text-slate-900 mb-2">
  //             Digital Clipboard
  //           </h3>
  //           <p className="text-slate-600">
  //             Customer history, chemical usage logs, and gate codes right on
  //             your phone. Throw away the paper.
  //           </p>
  //         </div>

  //         {/* Feature 2 */}
  //         <div className="flex flex-col items-start">
  //           <div className="p-3 bg-green-100 rounded-lg mb-4 text-green-600">
  //             <DollarSign size={32} />
  //           </div>
  //           <h3 className="text-xl font-bold text-slate-900 mb-2">
  //             Paid in the Driveway
  //           </h3>
  //           <p className="text-slate-600">
  //             Send a text invoice and get paid via card before you even start
  //             the engine to leave.
  //           </p>
  //         </div>

  //         {/* Feature 3 */}
  //         <div className="flex flex-col items-start">
  //           <div className="p-3 bg-blue-100 rounded-lg mb-4 text-blue-600">
  //             <MapPin size={32} />
  //           </div>
  //           <h3 className="text-xl font-bold text-slate-900 mb-2">
  //             Route Reality
  //           </h3>
  //           <p className="text-slate-600">
  //             Smart scheduling that fills the empty gaps in your map, not the
  //             gaps in your free time.
  //           </p>
  //         </div>
  //       </div>
  //     </section>

  //     {/* --- FOOTER CTA --- */}
  //     <section className="bg-slate-100 border-t border-slate-200 py-20 px-6 text-center">
  //       <div className="max-w-md mx-auto">
  //         <Truck className="w-12 h-12 text-slate-400 mx-auto mb-4" />
  //         <h2 className="text-3xl font-bold text-slate-900 mb-2">
  //           Reclaim your evenings.
  //         </h2>
  //         <p className="text-slate-600 mb-8">
  //           We are launching a private beta soon for 50 users.
  //         </p>

  //         <button className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-lg shadow-lg transition-transform active:scale-95">
  //           Join the Waitlist
  //         </button>
  //       </div>
  //     </section>
  //   </div>
  );
}
