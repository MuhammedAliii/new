import { Phone, MessageSquare, CalendarCheck, Clock, Zap, UserCheck, ShieldCheck } from "lucide-react"
import { Card } from "@/components/ui/card"

const steps = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "The Phone Rings",
    description: "Whether it's 2 PM or 2 AM, Hana answers every single call immediately. No hold times, no voicemails, no missed revenue.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Hana Answers",
    description: "Hana triages questions and handles bookings with expert professionality. Hana never gets tired, never gets sick, and never has an 'off' day.",
  },
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Your Calendar Fills",
    description: "Clients book directly into your system. Your front desk arrives to a perfectly organized schedule, even after nights and holidays.",
  }
]

const vitals = [
  { icon: <Clock className="w-4 h-4" />, text: "No Sleep Needed" },
  { icon: <Zap className="w-4 h-4" />, text: "Zero Burnout" },
  { icon: <UserCheck className="w-4 h-4" />, text: "No Sick Days" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "No Vacations" }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 md:py-32 px-6 overflow-hidden">
      {/* Decorative architectural lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute left-[10%] top-0 w-px h-full bg-foreground" />
        <div className="absolute right-[10%] top-0 w-px h-full bg-foreground" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Our Process</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">How It Works</h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Hana integrates seamlessly into your existing workflow, acting as a tireless, 24/7 extension of your front desk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          {steps.map((step, idx) => (
            <Card 
              key={idx} 
              className="group relative p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-white/50 premium-blur border border-white/20 transition-all duration-700 ease-in-out hover:shadow-[0_40px_80px_-20px_rgba(18,160,153,0.15)] hover:bg-white hover:scale-[1.04] hover:-translate-y-3 cursor-default overflow-hidden ring-1 ring-black/[0.02]"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 md:mb-10 shadow-lg shadow-black/[0.02] ring-1 ring-black/[0.03] group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500">
                  {step.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-500">
                  {step.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Hana Vitals / Reliability Footer */}
        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border/40 flex flex-col items-center gap-8 md:gap-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-primary/80">The Always-On Advantage</p>
          
          <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center gap-3 md:gap-8 w-full max-w-6xl mx-auto px-4">
            {vitals.map((vital, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center gap-3 px-4 py-4 md:px-8 md:py-5 rounded-full bg-white/80 premium-blur ring-1 ring-border shadow-sm text-primary text-[10px] md:text-xs font-extrabold uppercase tracking-widest transition-all duration-300 hover:shadow-xl hover:ring-primary/20 hover:-translate-y-1 hover:bg-white w-full lg:w-auto"
              >
                <span className="text-primary shrink-0">{vital.icon}</span>
                <span className="whitespace-nowrap">{vital.text}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full justify-center">
            <div className="hidden sm:block w-12 h-px bg-border/60" />
            <p className="text-xs md:text-sm text-muted-foreground/60 font-semibold italic text-center">
              Unmatched 24/7 reliability for your business
            </p>
            <div className="hidden sm:block w-12 h-px bg-border/60" />
          </div>
        </div>
      </div>
    </section>
  )
}
