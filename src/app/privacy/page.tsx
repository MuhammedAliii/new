import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function PrivacyPolicy() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      {/* Universal Premium Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <Header />
      {/* Normalized padding-top for standard header size */}
      <main className="relative z-10 flex-grow pt-48 md:pt-56 pb-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white/50 premium-blur p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-xl ring-1 ring-black/[0.02]">
          <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Last Updated: May 2026</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">1. Our Commitment to Your Privacy</h2>
              <p>At Better Call Hana, we believe that AI should be a tool that empowers your business while respecting the absolute privacy of your data. Our role is to facilitate your front desk operations and help you scale efficiently, ensuring that your patient interactions are handled with the highest level of confidentiality.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">2. Data Ownership & Usage</h2>
              <p>Your data is yours. We act as a service provider to facilitate your business needs. Any information collected during calls—including voice recordings, transcripts, and patient details—is used exclusively to provide the services you have requested, such as booking appointments and providing call summaries.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">3. No Training on Your Data</h2>
              <p>We do not use your practice's specific call data, transcripts, or patient information to train our general AI models. Your business interactions remain isolated and private to your account. We use pre-trained, secure AI technology to provide our services without compromising your data privacy.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">4. Information Security</h2>
              <p>We utilize advanced security protocols, including end-to-end encryption and secure cloud infrastructure, to protect your information. Our systems are designed to ensure that only authorized users within your organization can access the data Hana processes for you.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">5. Facilitation, Not Surveillance</h2>
              <p>Our objective is solely to help you get your work done and grow your company. We do not sell your data, nor do we access your information for any purpose other than providing the AI voice receptionist service you’ve entrusted us with.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">6. Contact & Transparency</h2>
              <p>If you have any questions regarding how we handle your data, please contact us through the main page. We are committed to transparency and maintaining your trust as we help modernize your front desk.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
