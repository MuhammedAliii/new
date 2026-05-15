import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function TermsOfService() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      {/* Universal Premium Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <Header />
      {/* Normalized padding-top for standard header size */}
      <main className="relative z-10 flex-grow pt-48 md:pt-56 pb-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white/50 premium-blur p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-xl ring-1 ring-black/[0.02]">
          <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Terms of Service</h1>
          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Last Updated: May 2026</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">1. Agreement to Terms</h2>
              <p>By using Better Call Hana, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services. Our goal is to provide a seamless AI integration for your professional practice.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">2. Service Description</h2>
              <p>Better Call Hana provides an AI-powered voice receptionist designed to answer calls, answer questions, and book appointments for professional businesses. We act as an extension of your front desk, active 24/7.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">3. Use of AI Technology</h2>
              <p>You acknowledge that Hana is an artificial intelligence. While we strive for high accuracy and professionality, we do not guarantee that the service will be error-free at all times. Users are responsible for reviewing appointment bookings in their own systems.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">4. Trial Period</h2>
              <p>We offer a 7-day free trial to experience the impact on your business. Following the trial period, subscription fees will apply as agreed upon during the premium sign-up process.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">5. Limitation of Liability</h2>
              <p>Better Call Hana shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the service. We provide the tools for growth, but final business decisions remain with the owner.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">6. Modifications</h2>
              <p>We reserve the right to modify these terms at any time. Your continued use of the service constitutes acceptance of updated terms. We are committed to transparency as our technology evolves.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
